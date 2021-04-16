import { helper } from '@test/helper';
import { expect } from 'chai';
import { SyncType } from '@ooo/types/client';
import { Client } from '@ooo/client';
import { Suite } from 'mocha';

describe('Test Clients', function (this: Suite): void {
  it('Can connect a client', async () => {
    const conf1 = helper.createClientConfig('NOT_EXIST');

    const client1: Client = new Client(conf1, 'client1');
    try {
      await client1.connect();
      expect.fail();
    } catch (e) {}
    expect(client1.isConnected()).to.false;

    const conf = await helper.createTestClientConfig(SyncType.NOTIFIABLE);
    const client2: Client = new Client(conf, 'client2');
    try {
      await client2.connect();
    } catch (e) {
      expect.fail();
    }
    expect(client2.isConnected()).to.true;

    client1.close();
    client2.close();
  });

  it('Can subscribe and create a counter', async () => {
    const conf1 = await helper.createTestClientConfig();

    const client1: Client = new Client(conf1, 'client1');
    try {
      await client1.connect();
    } catch (e) {
      expect.fail();
    }

    const counter1 = client1.subscribeOrCreateCounter(helper.dtName(this));
    counter1.increase(2);
    await client1.sync();
    client1.close();

    const client2: Client = new Client(conf1, 'client2');
    await client2.connect();

    const counter2 = client2.subscribeOrCreateCounter(helper.dtName(this));
    await client2.sync();
    expect(counter2.get()).to.equal(2);
    client2.close();
  });
});
