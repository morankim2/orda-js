import { ClientContext } from '@ooo/context';
import { WireManager } from '@ooo/managers/wire';
import { Datatype } from '@ooo/datatypes/datatype';
import { _Counter } from '@ooo/datatypes/counter';
import { PushPullPack } from '@ooo/types/pushpullpack';
import { StateOfDatatype, TypeOfDatatype } from '@ooo/types/datatype';
import { DatatypeHandlers } from '@ooo/handlers/handlers';
import { Uint64 } from '@ooo/types/integer';
import { NotifyReceiver } from '@ooo/managers/notify';
import { WiredDatatype } from '@ooo/datatypes/wired';

export class DataManager implements NotifyReceiver {
  ctx: ClientContext;
  private wireManager?: WireManager;
  private dataMap: Map<string, Datatype>;
  private promiseSyncAll: boolean;

  constructor(ctx: ClientContext, wireManager?: WireManager) {
    this.ctx = ctx;
    this.wireManager = wireManager;
    this.dataMap = new Map<string, Datatype>();
    this.promiseSyncAll = false;
  }

  addWireManager(wireManager?: WireManager): void {
    this.wireManager = wireManager;
  }

  async syncAll(): Promise<void> {
    try {
      this.ctx.L.info('[💾🔻] begin syncAll');
      const pushPullPackList = new Array<PushPullPack>();
      this.dataMap.forEach((datatype) => {
        const ppp = datatype.createPushPullPack();
        if (ppp !== null) {
          pushPullPackList.push(ppp);
        }
      });
      if (this.wireManager) {
        return await this.wireManager?.exchangePushPull(...pushPullPackList);
      }
      return Promise.resolve();
    } finally {
      this.ctx.L.info('[💾🔺] end syncAll');
    }
  }

  async trySyncAll(): Promise<boolean> {
    if (!(await this.ctx.tryLock(`trySyncAll`))) {
      this.promiseSyncAll = true;
      return Promise.resolve(false);
    }
    try {
      await this.syncAll();
      return Promise.resolve(true);
    } finally {
      this.ctx.doUnlock('trySyncAll');
    }
  }

  async syncAllWithLock(): Promise<void> {
    if (await this.ctx.doLock(`syncAll`)) {
      try {
        return await this.syncAll();
      } finally {
        this.ctx.doUnlock(`syncAll`);
      }
    }
  }

  async trySyncDatatype(datatype: WiredDatatype): Promise<boolean> {
    if (!(await this.ctx.tryLock(`syncDatatype: ${datatype.key}`))) {
      return Promise.resolve(false);
    }
    try {
      this.ctx.L.info(`[💾🔻] BEGIN syncDatatype: ${datatype.key}`);
      const ppp = datatype.createPushPullPack();
      await this.wireManager?.exchangePushPull(ppp);
      return Promise.resolve(true);
    } finally {
      this.ctx.doUnlock(`syncDatatype: ${datatype.key}`);
      this.ctx.L.info(`[💾🔺] END syncDatatype: ${datatype.key}`);
      if (!this.syncAllIfNeeded()) {
        if (datatype.needPush()) {
          this.trySyncDatatype(datatype).then();
        }
      }
    }
  }

  syncAllIfNeeded(): boolean {
    if (this.promiseSyncAll) {
      this.promiseSyncAll = false;
      this.trySyncAll().then();
      return true;
    }
    this.ctx.L.info('[💾] no need to sync');
    return false;
  }

  subscribeOrCreateDatatype(
    key: string,
    type: TypeOfDatatype,
    state: StateOfDatatype,
    handlers?: DatatypeHandlers
  ): Datatype {
    let data: Datatype | undefined = this.dataMap.get(key);
    if (data) {
      this.ctx.L.warn(`${type} ${key} already exists`);
      return data;
    }

    switch (type) {
      case TypeOfDatatype.COUNTER:
        data = new _Counter(this.ctx, key, state, this.wireManager, handlers);
        this.dataMap.set(key, data);
        break;
      case TypeOfDatatype.MAP:
      case TypeOfDatatype.LIST:
      case TypeOfDatatype.DOCUMENT:
      default:
    }
    if (data) {
      data.subscribeOrCreate();
      return data;
    }
    throw new Error('not implemented yet');
  }

  applyPushPullPack(...pushPullPacks: PushPullPack[]): void {
    for (const ppp of pushPullPacks) {
      const datatype = this.dataMap.get(ppp.key);
      if (datatype) {
        datatype.applyPushPullPack(ppp);
      }
    }
  }

  async onReceiveNotification(
    cuid: string,
    duid: string,
    key: string,
    sseq: Uint64
  ): Promise<void> {
    const datatype = this.dataMap.get(key);
    if (datatype && datatype.id === duid && datatype.needPull(sseq)) {
      if (await this.trySyncDatatype(datatype)) {
        return Promise.resolve();
      }
      this.promiseSyncAll = true;
    }
    return Promise.resolve();
  }

  close(): void {
    this.dataMap.forEach((data, key) => {
      data.unsubscribe();
    });
    this.dataMap.clear();
  }
}
