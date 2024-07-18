const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'WeMC食用级指南',
  tagline: '将WeMC放入锅中大火爆炒',
  url: 'https://wemc.us.kg',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'YSYANDYSYANDYSY', // Usually your GitHub org/user name.
  projectName: 'wemc', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
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
        title: 'WeMC食用级指南',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '其他文档',
            items: [
              {
                label: 'WeMC官方文档',
                href: 'https://eman.beebox.cc/puba/egCdYAChk',
              },
            ],
          },
          {
            title: '资源列表',
            items: [
              {
                label: 'WeMC第三方监控站',
                href: 'https://status.wemc.us.kg/',
              },
              {
                label: '插件宝库',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: '模组宝库',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: '项目贡献者信息',
            items: [
              {
                label: '贡献者',
                to: '/docs/writer',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} YSYError.`, // Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
