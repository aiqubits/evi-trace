import React, { useState } from 'react';
import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';

const suiClient = new SuiClient({ url: getFullnodeUrl('devnet') });

const WriteStore: React.FC = () => {
    const [systemObjId, setSystemObjId] = useState<string>('0xSystemObjId');
    const [paymentId, setPaymentId] = useState<string>('0xPaymentId');

    const handleWriteStore = async () => {
        const tx = {
            kind: 'moveCall',
            data: {
                packageObjectId: '0x2',
                module: 'evidence',
                function: 'write_store',
                typeArguments: [],
                arguments: [systemObjId, paymentId],
                gasBudget: 10000,
            },
            transactionBlock: '',
            signature: '',
        };

        const res = await suiClient.executeTransactionBlock(tx);
        console.log('Store written:', res);
    };

    return (
        <div>
            <h2>Write to Store</h2>
            <input
                type="text"
                value={systemObjId}
                onChange={(e) => setSystemObjId(e.target.value)}
                placeholder="System Object ID"
            />
            <input
                type="text"
                value={paymentId}
                onChange={(e) => setPaymentId(e.target.value)}
                placeholder="Payment ID"
            />
            <button onClick={handleWriteStore}>Write Store</button>
        </div>
    );
};

export default WriteStore;
