---
id: installation
title: Installation
description: Set up Node.js and the Stellar JavaScript SDK for testnet development.
---

# Installation

This guide sets up a local JavaScript environment for building against Stellar testnet. Testnet is a public Stellar network for development, so you can create accounts and submit transactions without using real XLM.

## Prerequisites

Install these tools first:

- Node.js 18 or newer
- npm, which ships with Node.js
- A code editor
- A terminal

Check your versions:

```bash
node --version
npm --version
```

## Create a project

Create a small workspace for Stellar experiments:

```bash
mkdir stellar-testnet-app
cd stellar-testnet-app
npm init -y
```

Install the Stellar JavaScript SDK:

```bash
npm install @stellar/stellar-sdk
```

## Connect to testnet

Create `index.js`:

```js
const StellarSdk = require('@stellar/stellar-sdk');

const server = new StellarSdk.Horizon.Server('https://horizon-testnet.stellar.org');

async function main() {
  const ledger = await server.ledgers().order('desc').limit(1).call();
  console.log('Latest testnet ledger:', ledger.records[0].sequence);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
```

Run it:

```bash
node index.js
```

If you see a ledger sequence number, your app can reach Stellar testnet.

## Important network values

Use these values while learning:

| Purpose | Value |
| --- | --- |
| Network | Stellar testnet |
| Network passphrase | `Test SDF Network ; September 2015` |
| Horizon URL | `https://horizon-testnet.stellar.org` |
| Friendbot funding URL | `https://friendbot.stellar.org` |

Testnet resets occasionally, so balances and accounts can disappear. That is expected. Never use a testnet secret key for mainnet funds.
