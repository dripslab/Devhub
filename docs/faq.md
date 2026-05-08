---
id: faq
title: FAQ
description: Common questions about building applications and smart contracts on Stellar.
---

# Frequently Asked Questions

## 1. What can I build on Stellar?

You can build payment apps, wallets, remittance tools, tokenized assets, on-chain marketplaces, and smart contract applications. Stellar is especially strong for fast, low-cost value movement, issued assets, and applications that need clear asset controls such as trustlines, authorization, clawbacks, or sponsored reserves.

For programmable workflows, Stellar includes the Soroban smart contract platform. Soroban contracts are written in Rust, compiled to WebAssembly, and invoked through Stellar transactions.

## 2. Should I start with testnet or mainnet?

Start with testnet. Testnet lets you create accounts, fund them with Friendbot, submit transactions, and deploy contracts without using real XLM. It is the right place to learn Stellar concepts, test integrations, and rehearse deployments.

Move to mainnet only after you have tested account creation, signing, transaction submission, error handling, and recovery flows. Never reuse testnet secret keys for mainnet funds.

## 3. What is the difference between Horizon and Stellar RPC?

Horizon is commonly used for classic Stellar data and actions such as reading accounts, balances, payments, operations, and transaction history. It is a good fit for many payment, wallet, and asset workflows.

Stellar RPC is used for smart contract workflows, including simulating Soroban transactions, estimating resource usage, assembling contract transactions, and submitting contract invocations. If your app invokes Soroban contracts, expect to use Stellar RPC alongside an SDK.

## 4. How do fees work on Stellar?

Every Stellar transaction pays fees in XLM. For regular transactions, the fee is mainly an inclusion fee: the amount the submitter is willing to pay for the transaction to be included in a ledger.

Smart contract transactions also include resource fees. These depend on the resources declared and consumed by the contract transaction, such as compute, ledger reads and writes, transaction size, events, return values, and storage rent. The recommended way to estimate a Soroban transaction's required fee and resources is to simulate it before submitting it.

## 5. How do I keep users' keys safe?

Treat secret keys as production credentials. Never log them, commit them, send them to analytics tools, or store them unencrypted. For user-facing apps, prefer wallet-based signing so the application builds transactions while the wallet handles private keys and signatures.

For backend services, separate hot keys from administrative keys, use environment-specific accounts, rotate credentials when needed, and consider multisig or threshold settings for higher-risk operations. Design your app so losing one service key does not compromise all funds or issuer controls.

## Official Resources

- [Stellar developer documentation](https://developers.stellar.org/)
- [Smart contracts on Stellar](https://developers.stellar.org/docs/build/smart-contracts)
- [Transactions guide](https://developers.stellar.org/docs/build/guides/transactions)
- [Fees and resource limits](https://developers.stellar.org/docs/learn/fundamentals/fees-resource-limits-metering)
