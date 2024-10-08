// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github
const darkCodeTheme = require('prism-react-renderer').themes.dracula

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SwiftGift',
  tagline: 'Giving has never been easier',
  url: 'https://swiftest.no',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'torland-klev',
  projectName: 'swiftgift-landing-page',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/torland-klev/swiftgift-landing-page/tree/main',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/torland-klev/swiftgift-landing-page/tree/main',
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
        title: 'SwiftGift',
        logo: {
          alt: 'SwiftGift Logo',
          src: 'img/swift-gift-logo-small.png',
        } /*
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://api.swiftgift.no/swagger',
            label: 'OpenAPI',
            position: 'right',
          },
        ],*/,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contact',
            items: [
              {
                label: 'Email',
                href: 'mailto:klevhenrik@gmail.com',
              },
            ],
          },
          {
            title: 'Components',
            items: [
              {
                label: 'REST-API',
                href: 'https://api.swiftgift.no/',
              },
              {
                label: 'Swagger',
                href: 'https://api.swiftgift.no/swagger',
              },
              {
                label: 'Docker Hub',
                href: 'https://hub.docker.com/layers/henrikklev/swiftgift-api/latest/images/sha256-ba5bb86015087e8f28f13eaa2c1a79c64a1f562c8df46b02ff81df3c2cc27b76?context=repo',
              },
            ],
          },
          {
            title: 'Code',
            items: [
              {
                label: 'API',
                href: 'https://github.com/torland-klev/swiftgift-api',
              },
              {
                label: 'Flutter App',
                href: 'https://github.com/torland-klev/swiftgift-app',
              },
              {
                label: 'Landing Page',
                href: 'https://github.com/torland-klev/swiftgift-landing-page',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Klev`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
