import { Suite } from 'mocha';
import { helper } from '@test/helper';
import { int32, Int32 } from '@ooo/types/integer';

describe('Test Counter', function (this: Suite): void {
  it('Can create Counter', () => {
    const client = helper.getLocalClient(helper.getClientName(this));
    const counter = client.createCounter(helper.getDatatypeName(this));
    counter.increase(int32(Int32.MAX_VALUE).asNumber());
    helper.L.info(counter.get());
    counter.increase();
    helper.L.info(counter.get());
  });
});