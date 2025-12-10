import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This config runs in Node.js (not in the browser)
const config: Config = {
  title: 'Physical AI & Humanoid Robotics — Essentials',
  tagline: 'A comprehensive guide to building intelligent physical systems',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // ✅ GitHub Pages deployment config (FIXED)
  url: 'https://muskansirajkhan.github.io',
  baseUrl: '/-Hackathon-Physical-AI-Humanoid-Robotics-/',

  organizationName: 'muskansirajkhan',
  projectName: '-Hackathon-Physical-AI-Humanoid-Robotics-',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      ur: {
        label: 'اردو (Urdu)',
        direction: 'rtl',
        htmlLang: 'ur-PK',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',

          // ✅ FIXED edit URL
          editUrl:
            'https://github.com/muskansirajkhan/-Hackathon-Physical-AI-Humanoid-Robotics-/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Physical AI Textbook',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'textbookSidebar',
          position: 'left',
          label: 'Chapters',
        },
        {
          href: 'https://github.com/muskansirajkhan',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Textbook',
          items: [
            {
              label: 'Chapter 1: Introduction',
              to: '/docs/chapter-1-introduction-to-physical-ai',
            },
            {
              label: 'Chapter 6: Capstone',
              to: '/docs/chapter-6-capstone-ai-robot-pipeline',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'ROS 2 Docs',
              href: 'https://docs.ros.org/',
            },
            {
              label: 'Gazebo Simulator',
              href: 'https://gazebosim.org/',
            },
            {
              label: 'NVIDIA Isaac Sim',
              href: 'https://developer.nvidia.com/isaac-sim',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/muskansirajkhan',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Muskan Siraj Khan.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'typescript', 'yaml', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;


