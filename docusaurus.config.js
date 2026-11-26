import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Débora Gracio | Technical Writer',
  tagline: 'Making complex technology easier to understand.',
  favicon: 'img/favicon.svg',
  url: 'https://deboragracio.github.io',
  baseUrl: '/',
  organizationName: 'deboragracio',
  projectName: 'deboragracio.github.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'work',
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/social-card.svg',
    navbar: {
      title: 'Débora Gracio',
      logo: {
        alt: 'DG monogram',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/about', label: 'About', position: 'right'},
        {to: '/work', label: 'Selected work', position: 'right'},
        {to: '/samples', label: 'Writing samples', position: 'right'},
        {
          href: 'https://github.com/deboragracio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Explore',
          items: [
            {label: 'About', to: '/about'},
            {label: 'Selected work', to: '/work'},
            {label: 'Writing samples', to: '/samples'},
          ],
        },
        {
          title: 'Connect',
          items: [
            {label: 'LinkedIn', href: 'https://www.linkedin.com/in/debora-gracio/'},
            {label: 'GitHub', href: 'https://github.com/deboragracio'},
            {label: 'Email', href: 'mailto:gracio.debora@gmail.com'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Débora Gracio. Portfolio content is original unless otherwise noted.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;