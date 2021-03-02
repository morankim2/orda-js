import { Wire } from '@ooo/datatypes/wired';
import { DataManager } from '@ooo/managers/data';
import { ClientContext } from '@ooo/context';
import { PushPullPack } from '@ooo/types/pushpullpack';

export type { WireManager };

/**
 * deal with request
 */
interface WireManager extends Wire {
  addDataManager(ctx: ClientContext, dataManager: DataManager): void;

  connect(): Promise<boolean>;

  sync(): void;

  exchangePushPull(...pushPullList: PushPullPack[]): void;
}
