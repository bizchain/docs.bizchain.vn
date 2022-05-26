// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BizChain Docs',
  tagline: 'Doing it yourself brings great satisfaction.',
  url: 'https://docs.bizchain.vn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bizchain', // Usually your GitHub org/user name.
  projectName: 'docs.bizchain.vn', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/bizchain/docs.bizchain.vn/tree/main/',
        },
        blog: false,
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
        title: 'BizChain Docs',
        logo: {
          alt: 'BizChain Vietnam Logo',
          src: 'img/logo-bizchain-128.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tổng quan',
          },
          {
            type: 'doc',
            docId: 'faqs',
            position: 'left',
            label: 'Câu hỏi thường gặp',
          },
          {
            href: 'https://store.bizchain.vn',
            label: 'Cửa hàng',
            position: 'left',
          },
          {
            href: 'https://github.com/bizchain/docs.bizchain.vn',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'dropdown',
            label: 'Social',
            position: 'right',
            items: [
              {
                label: 'Zalo',
                href: 'https://zalo.me/bizchain',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/vBizChain',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/hongying.gao',
              },
              {
                label: 'Buy me a coffee',
                href: 'https://www.buymeacoffee.com/caoanh',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Thường được quan tâm',
        //     items: [
        //       {
        //         label: 'Bản quyền sản phẩm',
        //         to: '/docs/intro',
        //       },
        //       {
        //         label: 'Bản quyền sản phẩm',
        //         to: '/docs/intro',
        //       },
        //       {
        //         label: 'Bản quyền sản phẩm',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Discord',
        //         href: 'https://discord.com/'
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/vBizChain',
        //       }
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/bizchain',
        //       }
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} BizChain Vietnam. <a href="https://www.buymeacoffee.com/caoanh">Buy me a coffee</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
