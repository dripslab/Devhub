---
id: create-keypair
title: Create a Keypair
description: Generate a Stellar keypair with the JavaScript SDK and fund it on testnet.
---

# Create a Keypair

A Stellar keypair has two parts:

- A public key, also called an account ID, that starts with `G`
- A secret key, used to sign transactions, that starts with `S`

Anyone can see your public key. Keep the secret key private.

## Generate keys

Create `create-keypair.js`:

```js
const StellarSdk = require('@stellar/stellar-sdk');

const pair = StellarSdk.Keypair.random();

console.log('Public key:', pair.publicKey());
console.log('Secret key:', pair.secret());
```

Run it:

```bash
node create-keypair.js
```

You now have a valid Stellar keypair, but the account does not exist on the ledger yet. On Stellar, an account is created when it receives the minimum balance of XLM.

## Fund the account on testnet

Use Friendbot to fund the public key:

```js
const StellarSdk = require('@stellar/stellar-sdk');

const pair = StellarSdk.Keypair.random();
const publicKey = pair.publicKey();

async function main() {
  console.log('Public key:', publicKey);
  console.log('Secret key:', pair.secret());

  const response = await fetch(
    `https://friendbot.stellar.org?addr=${encodeURIComponent(publicKey)}`
  );

  if (!response.ok) {
    throw new Error(`Friendbot failed: ${response.status} ${response.statusText}`);
  }

  console.log('Account funded on testnet');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
```

Run it:

```bash
node create-keypair.js
```

After Friendbot succeeds, the public key is an active testnet account. You can inspect it with Horizon:

```bash
https://horizon-testnet.stellar.org/accounts/YOUR_PUBLIC_KEY
```

## Store keys carefully

For tutorials, it is fine to print a testnet secret key in your terminal. For real apps, store secrets in environment variables or a dedicated secrets manager, and never commit them to Git.
