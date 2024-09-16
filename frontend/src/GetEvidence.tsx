import React, { useState } from 'react';
import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';

const suiClient = new SuiClient({ url: getFullnodeUrl('devnet') });

const GetEvidence: React.FC = () => {
    const [evidenceId, setEvidenceId] = useState<string>('0xEvidenceId');
    const [evidenceData, setEvidenceData] = useState<Uint8Array | null>(null);
    const [timestamp, setTimestamp] = useState<number | null>(null);

    const handleGetEvidence = async () => {
        const params = {
            id: evidenceId, // or the correct field name based on the documentation
            // Include additional required fields here if needed
        };
        const data = await suiClient.getObject(params) as any;
        setEvidenceData(data.data);
        setTimestamp(data.timestamp);
    };

    return (
        <div>
            <h2>Get Evidence</h2>
            <input
                type="text"
                value={evidenceId}
                onChange={(e) => setEvidenceId(e.target.value)}
                placeholder="Evidence ID"
            />
            <button onClick={handleGetEvidence}>Get Evidence</button>
            {evidenceData && <p>Evidence Data: {new TextDecoder().decode(evidenceData)}</p>}
            {timestamp && <p>Timestamp: {timestamp}</p>}
        </div>
    );
};

export default GetEvidence;
