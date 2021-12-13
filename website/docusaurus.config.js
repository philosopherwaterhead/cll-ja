// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Complete Lojban Language',
  tagline: '日本語抄訳プロジェクト',
  url: 'https://ponjbogri.github.io',
  baseUrl: '/cll-ja/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lojban.org', // Usually your GitHub org/user name.
  projectName: 'cll-ja', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ponjbogri/cll-ja',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'The Complete Lojban Language 日本語抄訳プロジェクト',
        logo: {
          alt: 'Lojban Logo',
          src: 'img/lojban.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'all-index/document_index',
            position: 'left',
            label: 'ドキュメント一覧',
          },
          {
            href: 'https://mw.lojban.org/index.php?title=Lojban',
            label: 'lojban.org',
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
                label: 'ドキュメント一覧',
                to: '/docs/all-index/document_index',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ponjbogri/cll-ja',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} cll-ja, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
