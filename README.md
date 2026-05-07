 # devhub

> The missing developer docs for building on Stellar — interactive tutorials, code examples, and community guides from zero to dApp.

[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-blue)](https://docusaurus.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Stellar Ecosystem](https://img.shields.io/badge/Ecosystem-Stellar-blue)](https://stellar.org)
[![Drips Wave](https://img.shields.io/badge/Drips-Wave%20Program-purple)](https://drips.network/wave)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

## The Problem

Stellar's official docs are comprehensive but assume prior blockchain knowledge. Developers coming from a Web2 background — especially those in Africa and emerging markets where Stellar adoption is growing fast — have no single place that takes them from complete beginner to shipping a real application.

## The Solution

**devhub** is a Docusaurus-powered documentation site with step-by-step tutorials, live interactive code editors (powered by Sandpack), and community-contributed guides. Every tutorial runs against Stellar testnet so anyone can learn without spending real money.

---

## What's Inside

- **Getting Started** — set up tools, create a keypair, fund on testnet in 10 minutes
- **Core Concepts** — accounts, assets, operations, transactions explained simply
- **Tutorials** — send XLM, issue a custom token, build a DEX swap UI
- **Soroban** — deploy and invoke smart contracts step by step
- **API Reference** — Horizon API, stellar-sdk, and SEP standards
- **Community Guides** — contributed articles reviewed and merged by maintainers

---

## Live Site

> [devhub.cryptex.dev](https://devhub.cryptex.dev) *(hosted on Vercel, auto-deploys on merge to main)*

---

## Technical Architecture

```
Browser
│
└── Docusaurus 3 (React static site)
      ├── /docs                   → MDX content files
      ├── /src/components         → Custom React components
      │     ├── Sandpack editor   → In-browser live code (runs stellar-sdk)
      │     └── NetworkBadge      → Shows testnet / mainnet context
      ├── Algolia DocSearch       → Full-text search across all docs
      └── i18n layer              → English → French → Swahili (in progress)

Hosting: Vercel
  ├── Auto-deploy on merge to main
  └── Preview deploys on every PR

CI: GitHub Actions
  ├── Lint MDX files
  ├── Build check (no broken links)
  └── Spellcheck on changed files
```

**Stack:**

| Layer | Technology |
|---|---|
| Framework | Docusaurus 3 (React-based static site generator) |
| Hosting | Vercel (auto-deploy on merge to `main`) |
| Interactive examples | Sandpack — in-browser code editor |
| Stellar testnet calls | `stellar-sdk` loaded inside Sandpack sandbox |
| Search | Algolia DocSearch (free for open source) |
| Internationalisation | Docusaurus built-in i18n |
| CI | GitHub Actions — lint + build + spellcheck on every PR |

---

## Repository Structure

```
devhub/
├── docs/
│   ├── getting-started/
│   │   ├── installation.md
│   │   ├── create-keypair.md
│   │   └── fund-testnet.md
│   ├── core-concepts/
│   │   ├── accounts.md
│   │   ├── assets.md
│   │   ├── operations.md
│   │   └── transactions.md
│   ├── tutorials/
│   │   ├── send-xlm.mdx          # Sandpack interactive example
│   │   ├── issue-token.mdx
│   │   └── dex-swap-ui.mdx
│   ├── soroban/
│   │   ├── overview.md
│   │   ├── deploy-contract.mdx
│   │   └── invoke-contract.mdx
│   └── community/                # Community-contributed guides
├── src/
│   ├── components/
│   │   ├── SandpackEditor/       # Live code editor component
│   │   └── NetworkBadge/         # Testnet / mainnet indicator
│   ├── css/
│   │   └── custom.css
│   └── pages/
│       └── index.tsx             # Landing page
├── i18n/
│   ├── fr/                       # French translations
│   └── sw/                       # Swahili translations (planned)
├── static/
│   └── img/
├── docusaurus.config.js
├── sidebars.js
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

---

## Local Development

```bash
# 1. Clone the repo
git clone https://github.com/cryptex/devhub.git
cd devhub

# 2. Install dependencies
npm install

# 3. Start local dev server
npm start
# → http://localhost:3000

# 4. Build for production (checks for broken links)
npm run build

# 5. Serve the production build locally
npm run serve

# 6. Run spellcheck on docs
npm run spellcheck
```

### Writing a new guide

```bash
# Create a new doc file in the right folder
touch docs/tutorials/my-guide.mdx

# For interactive Sandpack examples, use .mdx extension
# For plain markdown guides, use .md
```

---

## Content Guidelines

- **Write for beginners.** Assume the reader knows JavaScript but has never touched a blockchain.
- **Every code block must work.** Test all snippets against Stellar testnet before submitting.
- **Use `.mdx` for interactive tutorials.** The Sandpack component lets readers run code in the browser.
- **Keep guides focused.** One guide = one concept or task. Link to related guides instead of covering everything.
- **Plain English only.** No jargon without an explanation.

---

## Open Issues (Wave Program)

These issues are part of the **Stellar Wave Program** on Drips. Contributors earn Points for resolving them.

| # | Issue | Complexity | Points |
|---|-------|-----------|--------|
| 1 | Fix broken links and spelling errors in Getting Started | Trivial | 100 |
| 2 | Write Soroban "hello world" deploy tutorial | Medium | 150 |
| 3 | Add French translation for core concepts section | High | 200 |
| 4 | Build interactive send-XLM Sandpack example | High | 200 |
| 5 | Add dark mode support to the docs theme | Medium | 150 |

To apply for an issue, visit the [Drips Wave dashboard](https://drips.network/wave) or apply directly on GitHub.

---

## Contributing

Contributions of all kinds are welcome — fixing typos, writing new guides, adding translations, or improving the site itself.

1. Fork this repo
2. Create a branch: `git checkout -b docs/your-guide-name`
3. Write or edit content inside `docs/`
4. Run `npm run build` to catch any broken links
5. Open a Pull Request with a short description of what you added or changed

For code contributions (components, config), see [CONTRIBUTING.md](CONTRIBUTING.md).

---

## License

MIT — see [LICENSE](LICENSE) for details.

---

## Maintainer

Built and maintained by jotel-dev.
Part of the [Stellar Wave Program](https://drips.network/wave) on Drips.
