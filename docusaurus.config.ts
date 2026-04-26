import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '中文系考试Wiki',
  tagline: '致力于成为一个面向中文系考试的知识站',
  favicon: 'img/logo-mini.png',

  url: 'https://wissen-ws.github.io',
  baseUrl: '/ChineseLitNotes',

  organizationName: 'wissen-ws',
  projectName: 'ChineseLitNotes',

  // Giscus：https://giscus.app/zh-CN — 在仓库启用 Discussions 后生成配置，将 repoId、categoryId 填入下方
  customFields: {
    giscus: {
      repo: 'wissen-ws/ChineseLitNotes',
      repoId: 'R_kgDOMqEUTw',
      category: 'General',
      categoryId: 'DIC_kwDOMqEUT84C6maf',
      theme: 'fro',
    },
  },

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
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/background-image.jpeg',
    navbar: {
      title: '首页',
      logo: {
        alt: '中文系考试Wiki Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'Sidebar1',
          position: 'left',
          label: '现代文学',
        },
        {
          type: 'docSidebar',
          sidebarId: 'Sidebar2',
          position: 'left',
          label: '当代文学',
        },
        {
          type: 'docSidebar',
          sidebarId: 'Sidebar3',
          position: 'left',
          label: '现代汉语',
        },
        {
          type: 'docSidebar',
          sidebarId: 'Sidebar4',
          position: 'left',
          label: '公文写作',
        },
        {
          type: 'docSidebar',
          sidebarId: 'Sidebar5',
          position: 'left',
          label: '唐宋文学',
        },
        {
          type: 'docSidebar',
          sidebarId: 'Sidebar6',
          position: 'left',
          label: '关于我们',
        },
        {
          href: 'https://github.com/wissen-ws/ChineseLitNotes',
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
