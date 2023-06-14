import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'getOpenDCanisterID' : ActorMethod<[], Principal>,
  'getOwnedNFTs' : ActorMethod<[Principal], Array<Principal>>,
  'listItem' : ActorMethod<[Principal, bigint], string>,
  'mint' : ActorMethod<[Uint8Array | number[], string], Principal>,
}
