/// Module: evi_trace
module evi_trace::evidence {
    // use sui::object::{Self, UID};
    // use sui::transfer;
    // use sui::tx_context::{Self, TxContext};

    use blob_store::blob;
    use blob_store::system::{System};
    use sui::coin::{Coin};
    use sui::sui::{SUI};
    use sui::bcs;

    const RED_STUFF: u8 = 0;

    public struct Evidence has key, store {
        id: UID,
        data: vector<u8>,
        timestamp: u64,
    }

    public fun create_evidence(data: vector<u8>, ctx: &mut TxContext): Evidence {
        Evidence {
            id: object::new(ctx),
            data,
            timestamp: tx_context::epoch(ctx),
        }
    }

    public fun write_store(system_obj: &mut System<SUI>, payment: Coin<SUI>, ctx: &mut TxContext) {
        let root_hash_vec = vector[
            1, 2, 3, 4, 5, 6, 7, 8,
            1, 2, 3, 4, 5, 6, 7, 8,
            1, 2, 3, 4, 5, 6, 7, 8,
            1, 2, 3, 4, 5, 6, 7, 8,
        ];

        let mut encode = bcs::new(root_hash_vec);
        let root_hash = bcs::peel_u256(&mut encode);
        
        let (storage, change) = system_obj.reserve_space<SUI>(10_000_000, 3, payment, ctx);
        let blob_id = blob::derive_blob_id(root_hash, RED_STUFF, 10000);
        let blob1 = blob::register(system_obj, storage, blob_id, root_hash, 10000, RED_STUFF, ctx);

        transfer::public_transfer(blob1, tx_context::sender(ctx));

        transfer::public_transfer(change, tx_context::sender(ctx));
    }

    public fun get_evidence_data(evidence: &Evidence): &vector<u8> {
        &evidence.data
    }

    public fun get_evidence_timestamp(evidence: &Evidence): u64 {
        evidence.timestamp
    }

    public fun destroy_evidence(evidence: Evidence) {
        let Evidence { id, data: _, timestamp: _ } = evidence;
        object::delete(id);
    }
}
