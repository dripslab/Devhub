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
  ],
};

module.exports = sidebars;
