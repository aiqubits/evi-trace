import React, { useState } from 'react';
import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';

const suiClient = new SuiClient({ url: getFullnodeUrl('devnet') });

const DestroyEvidence: React.FC = () => {
    const [evidenceId, setEvidenceId] = useState<string>('0xEvidenceId');

    const handleDestroyEvidence = async () => {
        const tx = {
            kind: 'moveCall',
            data: {
                packageObjectId: '0x2',
                module: 'evidence',
                function: 'destroy_evidence',
                typeArguments: [],
                arguments: [evidenceId],
                gasBudget: 10000,
            },
            transactionBlock: '',
            signature: '',
        };

        const res = await suiClient.executeTransactionBlock(tx);
        console.log('Evidence destroyed:', res);
    };

    return (
        <div>
            <h2>Destroy Evidence</h2>
            <input
                type="text"
                value={evidenceId}
                onChange={(e) => setEvidenceId(e.target.value)}
                placeholder="Evidence ID"
            />
            <button onClick={handleDestroyEvidence}>Destroy Evidence</button>
        </div>
    );
};

export default DestroyEvidence;
