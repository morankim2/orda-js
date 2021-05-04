import { StateOfDatatype, TypeOfDatatype } from '@ooo/types/datatype';
import { ClientContext } from '@ooo/context';
import { Wire, WiredDatatype } from '@ooo/datatypes/wired';
import { SnapshotOperation } from '@ooo/operations/meta';
import { DatatypeHandlers } from '@ooo/handlers/handlers';
import { OrtooError } from '@ooo/errors/error';
import { encodeStateOfDatatype } from '@ooo/generated/proto.enum';
import { Operation } from '@ooo/operations/operation';

export { Datatype };
export type { IDatatype };

interface IDatatype {
  readonly key: string;

  readonly type: TypeOfDatatype;

  readonly state: StateOfDatatype;

  sync(): Promise<void>;
}

abstract class Datatype extends WiredDatatype {
  handlers?: DatatypeHandlers;

  protected constructor(
    ctx: ClientContext,
    key: string,
    type: TypeOfDatatype,
    state: StateOfDatatype,
    wire?: Wire,
    handlers?: DatatypeHandlers
  ) {
    super(ctx, key, type, state, wire);
    this.handlers = handlers;
  }

  async callOnStateChange(
    oldState: StateOfDatatype,
    newState: StateOfDatatype
  ): Promise<void> {
    if (
      newState === StateOfDatatype.SUBSCRIBED ||
      newState === StateOfDatatype.UNSUBSCRIBED ||
      newState === StateOfDatatype.DELETED
    ) {
      this.notifyWireOnChangeState();
    }
    if (this.handlers && this.handlers.onStateChange) {
      this.handlers.onStateChange(this, oldState, newState);
    }
  }

  async callOnRemoteOperations(opList: unknown[]): Promise<void> {
    if (this.handlers && this.handlers.onRemoteOperations) {
      this.handlers.onRemoteOperations(this, opList);
    }
  }

  async callOnErrors(...errs: OrtooError[]): Promise<void> {
    if (this.handlers && this.handlers.onErrors) {
      this.handlers.onErrors(this, ...errs);
    }
  }

  subscribeOrCreate(): void {
    if (this.state === StateOfDatatype.DUE_TO_SUBSCRIBE) {
      this.deliverTransaction(new Array<Operation>());
      return;
    }
    this.sentenceLocalInTx(
      new SnapshotOperation(
        encodeStateOfDatatype[this.state],
        this.getSnapshot().toJSONString()
      )
    );
  }
}
