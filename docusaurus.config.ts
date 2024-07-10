import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Redear',
  tagline: '学习 & 记录 & 分享',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://greyhao.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/redear-blog/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'greyhao', // Usually your GitHub org/user name.
  projectName: 'redear-blog', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    announcementBar: {
      content: "如果网站中的内容对你有帮助，那就太好了～",
      backgroundColor: "rgb(250, 251, 252)",
    },
    navbar: {
      title: "Redear的博客",
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.jpg',
      // },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: '全部',
        },
        { to: '/blog', label: '文章', position: 'right' },
        {
          href: 'https://github.com/greyhao',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // footer: {
    //   // style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Tutorial',
    //           to: '/docs/intro',
    //         },
    //       ],
    //     },
    //     {
    //       title: '联系我',
    //       items: [
    //         {
    //           label: 'Twitter',
    //           href: 'https://x.com/redear_dev',
    //         },
    //         {
    //           label: 'XLog',
    //           href: 'https://redear.xlog.app/',
    //         },
    //       ],
    //     },
    //     // {
    //     //   title: 'More',
    //     //   items: [
    //     //     {
    //     //       label: 'Blog',
    //     //       to: '/blog',
    //     //     },
    //     //     {
    //     //       label: 'GitHub',
    //     //       href: 'https://github.com/greyhao',
    //     //     },
    //     //   ],
    //     // },
    //   ],
    //   copyright: `BY REDEAR_DEV`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
