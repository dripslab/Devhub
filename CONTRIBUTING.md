# Contributing to devhub

Thanks for helping make Stellar easier to learn. devhub welcomes fixes, new guides, examples, translations, and improvements to the docs site.

## Local setup

1. Fork and clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Docusaurus dev server:

   ```bash
   npm start
   ```

4. Open `http://localhost:3000`.

## Writing docs

- Put beginner guides in `docs/getting-started/`.
- Put conceptual explainers in `docs/core-concepts/`.
- Use clear headings and short examples.
- Run code snippets against Stellar testnet before submitting.
- Link related pages instead of repeating long explanations.

## Before opening a pull request

Run a production build so broken links and MDX errors are caught early:

```bash
npm run build
```

Then open a pull request with a short summary of what changed and any commands you ran.
