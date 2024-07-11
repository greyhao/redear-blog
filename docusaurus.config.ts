import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Redear',
  tagline: '学习 & 记录 & 分享',
  favicon: 'img/favicon.ico',

  url: 'https://greyhao.github.io',
  baseUrl: '/redear-blog/',

  organizationName: 'greyhao',
  projectName: 'redear-blog',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    announcementBar: {
      content: "如果网站中的内容对你有帮助，那就太好了～",
      backgroundColor: "rgb(250, 251, 252)",
    },
    navbar: {
      title: "Redear的博客",
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
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
