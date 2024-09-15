## Basic Info
Project Name: EVI-Trace

## Project Details

### Introduction
EVI-Trace is a massive evidence storage and traceability application platform.

### Insights
To build a massive evidence storage and traceability application solution, we need to design a system that ensures the authenticity and compliance of evidences throughout the supply chain. This involves creating a secure and transparent record of transactions and ownership transfers.

### System Design
1. Smart Contracts:
Develop smart contracts to manage the lifecycle of evidences, including create_evidence, get_evidence_data, get_evidence_timestamp, and destroy_evidence. These contracts will be executed on the SUI blockchain.

2. Data Storage:
Integrate decentralized storage solutions like SUI Walrus for storing large files (e.g., product images, documents) that are referenced in the blockchain records.

3. Identity Management:
Implement a secure identity management system using private keys and addresses to authenticate participants in the EVI-Trace.

4. Front-End Application:
Develop a user-friendly front-end application that allows companies to interact with the system, view their EVI-Trace status, and verify evidences.

### Example User Flow

1. Build and Deploy Contract on testnet:

```bash
cd contract
sui move build
sui client publish --with-unpublished-dependencies --skip-dependency-verification
```

output
```
Transaction Digest: 2zFy1hEFxA6GbCaGHRQdy2u2MUhAu2kHM21qC4qgUhdw
╭──────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Transaction Data                                                                                             │
├──────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Sender: 0x746c53fc6799109377d10d2089dee209710dd15ac572a090d3d5abad9130dca9                                   │
│ Gas Owner: 0x746c53fc6799109377d10d2089dee209710dd15ac572a090d3d5abad9130dca9                                │
│ Gas Budget: 107541200 MIST                                                                                   │
│ Gas Price: 1000 MIST                                                                                         │
│ Gas Payment:                                                                                                 │
│  ┌──                                                                                                         │
│  │ ID: 0x08d93969d373f2b668e5cd9f7b6bd06d150e51e659b0b28e3ceda8b455420c09                                    │
│  │ Version: 83798882                                                                                         │
│  │ Digest: 5TQNNUHJR3WLMwfPN5XP7PaMZfptU7WLHKQAqpLQa7bY                                                      │
│  └──                                                                                                         │
│                                                                                                              │
│ Transaction Kind: Programmable                                                                               │
│ ╭──────────────────────────────────────────────────────────────────────────────────────────────────────────╮ │
│ │ Input Objects                                                                                            │ │
│ ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤ │
│ │ 0   Pure Arg: Type: address, Value: "0x746c53fc6799109377d10d2089dee209710dd15ac572a090d3d5abad9130dca9" │ │
│ ╰──────────────────────────────────────────────────────────────────────────────────────────────────────────╯ │
│ ╭─────────────────────────────────────────────────────────────────────────╮                                  │
│ │ Commands                                                                │                                  │
│ ├─────────────────────────────────────────────────────────────────────────┤                                  │
│ │ 0  Publish:                                                             │                                  │
│ │  ┌                                                                      │                                  │
│ │  │ Dependencies:                                                        │                                  │
│ │  │   0x0000000000000000000000000000000000000000000000000000000000000001 │                                  │
│ │  │   0x0000000000000000000000000000000000000000000000000000000000000002 │                                  │
│ │  └                                                                      │                                  │
│ │                                                                         │                                  │
│ │ 1  TransferObjects:                                                     │                                  │
│ │  ┌                                                                      │                                  │
│ │  │ Arguments:                                                           │                                  │
│ │  │   Result 0                                                           │                                  │
│ │  │ Address: Input  0                                                    │                                  │
│ │  └                                                                      │                                  │
│ ╰─────────────────────────────────────────────────────────────────────────╯                                  │
│                                                                                                              │
│ Signatures:                                                                                                  │
│    DGhHs0XV0z/ASM9PKoVLLAe3Qw/8X2iWdYkw56M3JmPh1RKsVHrlc99aI70IGCUs0TcmhxypoU/V24lGAzarDQ==                  │
│                                                                                                              │
╰──────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭───────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Transaction Effects                                                                               │
├───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Digest: 2zFy1hEFxA6GbCaGHRQdy2u2MUhAu2kHM21qC4qgUhdw                                              │
│ Status: Success                                                                                   │
│ Executed Epoch: 494                                                                               │
│                                                                                                   │
│ Created Objects:                                                                                  │
│  ┌──                                                                                              │
│  │ ID: 0x208373fd1adff665cfee758b158dc0bc215c9653926ce44a9aa3f72a4432685e                         │
│  │ Owner: Immutable                                                                               │
│  │ Version: 1                                                                                     │
│  │ Digest: 5U7T6pCEBsdi1NBGVx547tyvzHJ6tyF7a6FgBCa5HXHW                                           │
│  └──                                                                                              │
│  ┌──                                                                                              │
│  │ ID: 0x3349e1e3808afdaf5bf46a30e81972f0ac2319e393a53ec5f9fdc2a97766862f                         │
│  │ Owner: Account Address ( 0x746c53fc6799109377d10d2089dee209710dd15ac572a090d3d5abad9130dca9 )  │
│  │ Version: 83798883                                                                              │
│  │ Digest: F2vegwu1gneNBcwNUyMJRgJAjRyETCrsfz9CM99oUAZg                                           │
│  └──                                                                                              │
│  ┌──                                                                                              │
│  │ ID: 0x6db5b950a7c0608e74469bb850e86d22a33e60862e95428f2b15105776aeea20                         │
│  │ Owner: Account Address ( 0x746c53fc6799109377d10d2089dee209710dd15ac572a090d3d5abad9130dca9 )  │
│  │ Version: 83798883                                                                              │
│  │ Digest: D67tQzTTKsp5XAehdB8j43iNZCtyunfDa27rmDBXT1ZL                                           │
│  └──                                                                                              │
│ Mutated Objects:                                                                                  │
│  ┌──                                                                                              │
│  │ ID: 0x08d93969d373f2b668e5cd9f7b6bd06d150e51e659b0b28e3ceda8b455420c09                         │
│  │ Owner: Account Address ( 0x746c53fc6799109377d10d2089dee209710dd15ac572a090d3d5abad9130dca9 )  │
│  │ Version: 83798883                                                                              │
│  │ Digest: 8vhFQrQ3W8sz9pMwJ5xnv9SZviyU7UhTAoqbwcfVKufS                                           │
│  └──                                                                                              │
│ Gas Object:                                                                                       │
│  ┌──                                                                                              │
│  │ ID: 0x08d93969d373f2b668e5cd9f7b6bd06d150e51e659b0b28e3ceda8b455420c09                         │
│  │ Owner: Account Address ( 0x746c53fc6799109377d10d2089dee209710dd15ac572a090d3d5abad9130dca9 )  │
│  │ Version: 83798883                                                                              │
│  │ Digest: 8vhFQrQ3W8sz9pMwJ5xnv9SZviyU7UhTAoqbwcfVKufS                                           │
│  └──                                                                                              │
│ Gas Cost Summary:                                                                                 │
│    Storage Cost: 105541200 MIST                                                                   │
│    Computation Cost: 1000000 MIST                                                                 │
│    Storage Rebate: 978120 MIST                                                                    │
│    Non-refundable Storage Fee: 9880 MIST                                                          │
│                                                                                                   │
│ Transaction Dependencies:                                                                         │
│    xADMWM3dJ2Ga5Q54QHwcsMtWB3a6hut1xUH5KsrgAfb                                                    │
│    GMHSeA2tCJZq8N6DicyXV1umBZXN4kLNU2NR43pucpJ4                                                   │
╰───────────────────────────────────────────────────────────────────────────────────────────────────╯
╭─────────────────────────────╮
│ No transaction block events │
╰─────────────────────────────╯

╭─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Object Changes                                                                                                                                              │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Created Objects:                                                                                                                                            │
│  ┌──                                                                                                                                                        │
│  │ ObjectID: 0x3349e1e3808afdaf5bf46a30e81972f0ac2319e393a53ec5f9fdc2a97766862f                                                                             │
│  │ Sender: 0x746c53fc6799109377d10d2089dee209710dd15ac572a090d3d5abad9130dca9                                                                               │
│  │ Owner: Account Address ( 0x746c53fc6799109377d10d2089dee209710dd15ac572a090d3d5abad9130dca9 )                                                            │
│  │ ObjectType: 0x208373fd1adff665cfee758b158dc0bc215c9653926ce44a9aa3f72a4432685e::e2e_test::CommitteeCapHolder                                             │
│  │ Version: 83798883                                                                                                                                        │
│  │ Digest: F2vegwu1gneNBcwNUyMJRgJAjRyETCrsfz9CM99oUAZg                                                                                                     │
│  └──                                                                                                                                                        │
│  ┌──                                                                                                                                                        │
│  │ ObjectID: 0x6db5b950a7c0608e74469bb850e86d22a33e60862e95428f2b15105776aeea20                                                                             │
│  │ Sender: 0x746c53fc6799109377d10d2089dee209710dd15ac572a090d3d5abad9130dca9                                                                               │
│  │ Owner: Account Address ( 0x746c53fc6799109377d10d2089dee209710dd15ac572a090d3d5abad9130dca9 )                                                            │
│  │ ObjectType: 0x2::package::UpgradeCap                                                                                                                     │
│  │ Version: 83798883                                                                                                                                        │
│  │ Digest: D67tQzTTKsp5XAehdB8j43iNZCtyunfDa27rmDBXT1ZL                                                                                                     │
│  └──                                                                                                                                                        │
│ Mutated Objects:                                                                                                                                            │
│  ┌──                                                                                                                                                        │
│  │ ObjectID: 0x08d93969d373f2b668e5cd9f7b6bd06d150e51e659b0b28e3ceda8b455420c09                                                                             │
│  │ Sender: 0x746c53fc6799109377d10d2089dee209710dd15ac572a090d3d5abad9130dca9                                                                               │
│  │ Owner: Account Address ( 0x746c53fc6799109377d10d2089dee209710dd15ac572a090d3d5abad9130dca9 )                                                            │
│  │ ObjectType: 0x2::coin::Coin<0x2::sui::SUI>                                                                                                               │
│  │ Version: 83798883                                                                                                                                        │
│  │ Digest: 8vhFQrQ3W8sz9pMwJ5xnv9SZviyU7UhTAoqbwcfVKufS                                                                                                     │
│  └──                                                                                                                                                        │
│ Published Objects:                                                                                                                                          │
│  ┌──                                                                                                                                                        │
│  │ PackageID: 0x208373fd1adff665cfee758b158dc0bc215c9653926ce44a9aa3f72a4432685e                                                                            │
│  │ Version: 1                                                                                                                                               │
│  │ Digest: 5U7T6pCEBsdi1NBGVx547tyvzHJ6tyF7a6FgBCa5HXHW                                                                                                     │
│  │ Modules: blob, blob_events, bls_aggregate, committee, e2e_test, encoding, evidence, redstuff, storage_accounting, storage_node, storage_resource, system │
│  └──                                                                                                                                                        │
╰─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭───────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Balance Changes                                                                                   │
├───────────────────────────────────────────────────────────────────────────────────────────────────┤
│  ┌──                                                                                              │
│  │ Owner: Account Address ( 0x746c53fc6799109377d10d2089dee209710dd15ac572a090d3d5abad9130dca9 )  │
│  │ CoinType: 0x2::sui::SUI                                                                        │
│  │ Amount: -105563080                                                                             │
│  └──                                                                                              │
╰───────────────────────────────────────────────────────────────────────────────────────────────────╯
```

2. Build and Deploy frontend:

```bash
cd frontend
npm i
npm start
```