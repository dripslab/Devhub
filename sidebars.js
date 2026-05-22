// @ts-check

const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/create-keypair',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: false,
      items: ['core-concepts/accounts', 'glossary'],
    },
    {
      type: 'category',
      label: 'Soroban',
      collapsed: false,
      items: ['soroban/hello-world-testnet'],
    },
  ],
};

module.exports = sidebars;
