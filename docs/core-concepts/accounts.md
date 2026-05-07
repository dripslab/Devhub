---
id: accounts
title: Accounts
description: Learn how Stellar accounts hold balances, sign transactions, and reserve ledger entries.
---

# Accounts

A Stellar account is the on-ledger identity that owns balances and signs transactions. Most user wallets, services, and applications interact with Stellar through accounts.

## Account IDs and secret keys

Every account begins with a keypair:

- The public key is the account ID. It starts with `G` and can be shared.
- The secret key signs transactions. It starts with `S` and must stay private.

The keypair can exist before the account exists on the ledger. The account becomes real only after it is funded with enough XLM to meet Stellar's minimum balance rules.

## Minimum balance

Stellar accounts must hold a minimum amount of XLM. This reserve discourages ledger spam and increases when the account owns more ledger entries, such as trustlines, offers, signers, or data entries.

At a minimum, a basic account needs enough XLM for the base reserve requirements. If an account tries to spend below its required reserve, the transaction fails.

## Balances

An account can hold:

- Native XLM
- Issued assets, such as a project token or stablecoin

Before an account can hold most issued assets, it must create a trustline for that asset. XLM is native to Stellar and does not need a trustline.

## Sequence numbers

Each account has a sequence number that increases with every successful transaction. Stellar uses sequence numbers to order transactions and prevent replay. If you submit two transactions from the same account, each one must use the next valid sequence number.

The SDK usually handles this when you load an account from Horizon before building a transaction:

```js
const StellarSdk = require('@stellar/stellar-sdk');

const server = new StellarSdk.Horizon.Server('https://horizon-testnet.stellar.org');
const account = await server.loadAccount(publicKey);

console.log(account.sequence);
```

## Signers and thresholds

Accounts can have multiple signers and configurable thresholds. This allows patterns like shared team accounts, multisig wallets, or service accounts that require more than one approval for high-risk operations.

For a first app, start with a single keypair. As your app grows, signers and thresholds let you design stronger custody and operational controls.
