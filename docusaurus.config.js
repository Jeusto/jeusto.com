// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Jeusto - Arhun Saday",
  tagline: "Full stack developer & computer science student.",
  url: "https://jeusto.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 90,
        max: 1000,
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          blogSidebarCount: 0,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Jeusto",
        logo: {
          alt: "Site logo",
          src: "img/logo.svg",
          srcDark: "img/logo-white.svg",
          height: "45px",
          width: "45px",
        },
        items: [
          { to: "/projects", label: "Projects", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Connect",
            items: [
              {
                label: "Email: arhunsad@gmail.com",
                href: "mailto:arhunsad@gmail.com",
              },
              {
                label: "Github: @Jeusto",
                href: "https://github.com/Jeusto/",
              },
              {
                label: "LinkedIn: @asaday",
                href: "https://www.linkedin.com/in/asaday/en",
              },
              {
                label: "Twitter @Jeustoo",
                href: "https://twitter.com/Jeustoo",
              },
            ],
          },
          {
            title: "Discover",
            items: [
              {
                label: "About me",
                to: "/",
              },
              {
                label: "Projects",
                to: "/projects",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Blog feed",
            items: [
              {
                label: "RSS",
                to: "/blog/rss.xml",
              },
              {
                label: "Atom",
                to: "/blog/atom.xml",
              },
            ],
          },
        ],
      },
      prism: {
        theme: require("prism-react-renderer/themes/github"),
        darkTheme: require("prism-react-renderer/themes/vsDark"),
        magicComments: [
          {
            className: "theme-code-block-highlighted-line",
            line: "highlight-next-line",
            block: { start: "highlight-start", end: "highlight-end" },
          },
          {
            className: "code-block-error-line",
            line: "This will error",
          },
        ],
      },
    }),
};

module.exports = config;
