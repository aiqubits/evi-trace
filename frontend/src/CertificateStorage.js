import React, { useState } from 'react';
import { JsonRpcProvider, devnetConnection } from '@mysten/sui.js';
import Web3 from 'web3';

const provider = new JsonRpcProvider(devnetConnection);
const web3 = new Web3(provider.connection.fullnode);

const CertificateStorage = () => {
    const [data, setData] = useState('');
    const [certificate, setCertificate] = useState(null);

    const createCertificate = async () => {
        const accounts = await web3.eth.getAccounts();
        const tx = await web3.eth.sendTransaction({
            from: accounts[0],
            to: '0x7e12d67a52106ddd5f26c6ff4fe740ba5dea7cfc138d5b1d33863ba9098aa6fe', // Walrus Devnet package ID
            data: web3.utils.asciiToHex(data),
        });
        console.log('Transaction:', tx);
    };

    const getCertificate = async () => {
        const accounts = await web3.eth.getAccounts();
        const certificate = await web3.eth.call({
            to: '0x7e12d67a52106ddd5f26c6ff4fe740ba5dea7cfc138d5b1d33863ba9098aa6fe', // Walrus Devnet package ID
            data: web3.utils.asciiToHex('get_evidence_data'),
        });
        setCertificate(web3.utils.hexToAscii(certificate));
    };

    return (
        <div>
            <h1>Certificate Storage</h1>
            <input
                type="text"
                value={data}
                onChange={(e) => setData(e.target.value)}
                placeholder="Enter certificate data"
            />
            <button onClick={createCertificate}>Create Certificate</button>
            <button onClick={getCertificate}>Get Certificate</button>
            {certificate && <p>Certificate Data: {certificate}</p>}
        </div>
    );
};

export default CertificateStorage;
