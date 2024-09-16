import React, { useState } from 'react';
import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';

const suiClient = new SuiClient({ url: getFullnodeUrl('devnet') });

const CreateEvidence: React.FC = () => {
    const [data, setData] = useState<Uint8Array>(new Uint8Array([1, 2, 3, 4]));

    const handleCreateEvidence = async () => {
        const tx = {
            kind: 'moveCall',
            data: {
                packageObjectId: '0x2',
                module: 'evidence',
                function: 'create_evidence',
                typeArguments: [],
                arguments: [Array.from(data)],
                gasBudget: 10000,
            },
            transactionBlock: '',
            signature: '',
        };

        const res = await suiClient.executeTransactionBlock(tx);
        console.log('Evidence created:', res);
    };

    return (
        <div>
            <h2>Create Evidence</h2>
            <button onClick={handleCreateEvidence}>Create Evidence</button>
        </div>
    );
};

export default CreateEvidence;
