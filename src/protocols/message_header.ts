import { MessageHeader, TypeOfMessage } from './protobuf/ortoo_pb';
import { ProtocolVersion } from '../constants/constants';

export function CreateMessageHeader(
  type: TypeOfMessage,
  alias: string,
  collection: string,
  seq: number,
  cuid: Uint8Array
): MessageHeader {
  const header = new MessageHeader();
  header.setVersion(ProtocolVersion);
  header.setClientalias(alias);
  header.setCollection(collection);
  header.setCuid(cuid);
  header.setTypeof(type);
  return header;
}