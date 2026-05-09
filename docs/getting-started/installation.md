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

## Troubleshooting setup

If the first run does not work, start with the exact error message in your terminal. Most early setup issues fall into one of these cases.

### `node` or `npm` is not recognized

Your terminal cannot find Node.js. Install Node.js again, choose the option that adds it to your `PATH`, then close and reopen your terminal.

Check again:

```bash
node --version
npm --version
```

If you are working inside this Devhub docs repo, use Node.js 20 because the docs site is configured for Node 20. For a standalone Stellar SDK project, Node.js 18 or newer is enough.

### `Cannot find module '@stellar/stellar-sdk'`

The SDK is not installed in the folder where you are running `node index.js`. Make sure your terminal is inside the project folder that contains `package.json`, then install the package again:

```bash
npm install @stellar/stellar-sdk
node index.js
```

You should see `@stellar/stellar-sdk` listed in `dependencies` in your `package.json`.

### `StellarSdk.Horizon.Server is not a constructor`

This usually means the SDK import style and installed SDK version do not match your code. For this guide, use CommonJS and install the current package name:

```js
const StellarSdk = require('@stellar/stellar-sdk');
const server = new StellarSdk.Horizon.Server('https://horizon-testnet.stellar.org');
```

If your project has `"type": "module"` in `package.json`, either rename the file to `index.cjs` or use an ES module import:

```js
import * as StellarSdk from '@stellar/stellar-sdk';
```

### Network or Horizon connection errors

Errors such as `fetch failed`, `ENOTFOUND`, `ECONNRESET`, `ETIMEDOUT`, or `503 Service Unavailable` usually mean your app could not reach Horizon.

Try these checks:

- Open `https://horizon-testnet.stellar.org` in a browser.
- Confirm your VPN, proxy, firewall, or company network is not blocking the request.
- Wait a minute and retry if Horizon testnet is temporarily busy.
- Confirm you are using the testnet URL, not the public network Horizon URL.

### `Resource Missing` when loading an account

The keypair exists locally, but the account has not been created on testnet yet. Fund the public key with Friendbot before trying to load the account:

```bash
https://friendbot.stellar.org?addr=YOUR_PUBLIC_KEY
```

Use the public key that starts with `G`, not the secret key that starts with `S`.

### Friendbot returns an error

Friendbot only works on testnet. If it fails:

- Check that the address starts with `G`.
- Make sure the URL uses `addr=YOUR_PUBLIC_KEY`.
- Try again after a short wait; Friendbot may rate limit repeated requests.
- Generate and fund a new keypair if the account was removed during a testnet reset.

### Transaction fails with `tx_bad_auth`, `tx_bad_seq`, or `tx_bad_auth_extra`

These errors usually happen after your setup works and you begin submitting transactions:

- `tx_bad_auth`: sign the transaction with the source account's secret key.
- `tx_bad_seq`: reload the account from Horizon before building the transaction so the sequence number is current.
- `tx_bad_auth_extra`: remove signatures that are not required for the transaction.

Also confirm that every testnet transaction uses the testnet network passphrase:

```js
StellarSdk.Networks.TESTNET
```

## Important network values

Use these values while learning:

| Purpose | Value |
| --- | --- |
| Network | Stellar testnet |
| Network passphrase | `Test SDF Network ; September 2015` |
| Horizon URL | `https://horizon-testnet.stellar.org` |
| Friendbot funding URL | `https://friendbot.stellar.org` |

Testnet resets occasionally, so balances and accounts can disappear. That is expected. Never use a testnet secret key for mainnet funds.
