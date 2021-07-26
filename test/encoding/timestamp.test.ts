import { createUID } from '@ooo/types/uid';
import { helper } from '@test/helper/helper';
import { expect } from 'chai';
import { Timestamp } from '@ooo/types/timestamp';
import { uint32, uint64 } from '@ooo/types/integer';

describe('Test encoding Timestamp', () => {
  it('Can encode and decode Timestamps', () => {
    const ts1 = new Timestamp(1, 2, createUID(), 3);
    const encodedTs1 = ts1.toJSON();
    helper.L.info(`${encodedTs1}`);
    const ts2 = Timestamp.fromJSON(encodedTs1);
    helper.L.info(`${ts2}`);
    expect(ts1.compare(ts2)).to.equal(0);
  });
});