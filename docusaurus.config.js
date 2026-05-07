// @ts-check

const config = {
  title: 'devhub',
  tagline: 'Developer docs for building on Stellar',
  favicon: 'img/logo.svg',

  url: 'https://devhub.cryptex.dev',
  baseUrl: '/',

  organizationName: 'dripslab',
  projectName: 'Devhub',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/dripslab/Devhub/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/stellar-grid.svg',
      navbar: {
        title: 'devhub',
        logo: {
          alt: 'devhub logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/dripslab/Devhub',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Installation',
                to: '/docs/getting-started/installation',
              },
              {
                label: 'Create a Keypair',
                to: '/docs/getting-started/create-keypair',
              },
              {
                label: 'Accounts',
                to: '/docs/core-concepts/accounts',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stellar',
                href: 'https://stellar.org',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dripslab/Devhub',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} devhub contributors.`,
      },
      prism: {
        additionalLanguages: ['bash', 'javascript', 'json'],
      },
    }),
};

module.exports = config;
