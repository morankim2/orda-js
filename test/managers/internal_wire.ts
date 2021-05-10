import { WireManager } from '@ooo/managers/wire';
import { WiredDatatype } from '@ooo/datatypes/wired';
import { DataManager } from '@ooo/managers/data';
import { CUID, DUID } from '@ooo/types/uid';
import {
  PPOptions,
  PushPullOptions,
  PushPullPack,
} from '@ooo/types/pushpullpack';
import { uint64 } from '@ooo/types/integer';
import { Op } from '@ooo/operations/operation';
import { OrtooLogger } from '@ooo/utils/ortoo_logger';
import { OooMap } from '@ooo/utils/map';
import { CheckPoint } from '@ooo/types/checkpoint';

export { InternalWireManager };

class InternalWireManager implements WireManager {
  private dataManagers: OooMap<CUID, DataManager>; // client -> dataManager
  private loggerMap: OooMap<CUID, OrtooLogger>; // client -> logger
  private checkPointMap: OooMap<CUID, OooMap<string, CheckPoint>>; // client -> data -> checkpoint
  private historyMap: OooMap<string, Array<Op>>; // data -> history
  private duidMap: OooMap<string, DUID>; // data -> duid

  constructor() {
    this.dataManagers = new OooMap<CUID, DataManager>();
    this.loggerMap = new OooMap<CUID, OrtooLogger>();
    this.checkPointMap = new OooMap<CUID, OooMap<string, CheckPoint>>();
    this.historyMap = new OooMap<string, Array<Op>>();
    this.duidMap = new OooMap<string, DUID>();
  }

  exchangePushPull(...pushPullList: PushPullPack[]): Promise<void> {
    pushPullList.forEach((ppp) => {
      const firstOp = ppp.opList[0];
      const ownerCuid = firstOp.id.cuid;
      this.exchangePushPullForSender(ownerCuid, ppp);
      if (ppp.opList.length <= 0) {
        return Promise.resolve();
      }
      this.dataManagers.forEach((dm, cuid) => {
        if (ownerCuid !== cuid) {
          const reply = this.makePushPullPack(cuid, ppp);
          dm.applyPushPullPack(reply);
        }
      });
    });
    return Promise.resolve();
  }

  private getCheckPoint(cuid: CUID, key: string): CheckPoint {
    const map = this.checkPointMap.getOrElseSet(
      cuid,
      new OooMap<string, CheckPoint>()
    );
    return map.getOrElseSet(key, new CheckPoint());
  }

  private makePushPullPack(cuid: CUID, ppp: PushPullPack): PushPullPack {
    const history = this.historyMap.getOrElseSet(ppp.key, new Array<Op>());

    const checkPoint = this.getCheckPoint(cuid, ppp.key);

    const opList = new Array<Op>();
    const startSseq = checkPoint.sseq.asNumber();
    checkPoint.setSseq(history.length);
    if (startSseq < history.length) {
      opList.push(...history.slice(startSseq));
    }

    return new PushPullPack(
      ppp.duid,
      ppp.key,
      ppp.type,
      checkPoint,
      ppp.era,
      ppp.option,
      opList
    );
  }

  private exchangePushPullForSender(ownerCuid: CUID, ppp: PushPullPack): void {
    const ownerLogger = this.loggerMap.get(ownerCuid);
    ownerLogger?.debug(`[🦅] SEND ${ppp.toString()}`);
    const dataManager = this.dataManagers.get(ownerCuid);
    const history = this.historyMap.getOrElseSet(ppp.key, new Array<Op>());

    const firstCreated = history.length === 0;
    const opArray = new Array<Op>();

    let option = PushPullOptions.normal;
    if (PPOptions.hasSubscribe(ppp.option) || PPOptions.hasCreate(ppp.option)) {
      option = PushPullOptions.subscribe;
      if (firstCreated && PPOptions.hasCreate(ppp.option)) {
        option = PushPullOptions.create;
        this.duidMap.set(ppp.key, ppp.duid);
      } else if (!firstCreated && PPOptions.hasCreate(ppp.option)) {
        ppp.opList = new Array<Op>();
        ppp.checkPoint.cseq = uint64(0);
        const duid = this.duidMap.get(ppp.key);
        if (duid) {
          ppp.duid = duid;
        }
      }
    }

    opArray.push(...history.slice(ppp.checkPoint.sseq.asNumber()));
    history.push(...ppp.opList);
    const checkPoint = this.getCheckPoint(ownerCuid, ppp.key);
    checkPoint.setSseq(history.length);
    checkPoint.setCseq(ppp.checkPoint.cseq);

    const response = new PushPullPack(
      ppp.duid,
      ppp.key,
      ppp.type,
      checkPoint,
      ppp.era,
      option,
      opArray
    );
    dataManager?.applyPushPullPack(response);
  }

  onChangeDatatypeState(wired: WiredDatatype): void {
    //
  }

  async exchangeClient(): Promise<void> {
    return Promise.resolve();
  }

  deliverTransaction(datatype: WiredDatatype): void {
    const pushPullPack = datatype.createPushPullPack();
    if (!pushPullPack) {
      return;
    }
    this.exchangePushPull(pushPullPack);
  }

  addDataManager(dataManager: DataManager): void {
    this.loggerMap.set(dataManager.ctx.cuid, dataManager.ctx.L);
    this.dataManagers.set(dataManager.ctx.cuid, dataManager);
  }

  close(): void {
    //
  }
}
