import { OrtooLogger } from '@ooo/utils/ortoo_logger';

export const BaseErrorCode = {
  Common: 0,
  Datatype: 100,
  Client: 200,
};

export class OrtooError extends Error {
  code: number;

  constructor(
    code: number,
    msg: string,
    log?: OrtooLogger,
    e?: Error,
    ...args: string[]
  ) {
    super(`[${code}] ${msg} ${e?.message}`);
    this.code = code;
    if (e) {
      this.stack = e.stack;
    }
    if (log) {
      log.error(this.message, ...args, '\n', this.stack);
    }
  }
}
