// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: process.env.NAME === "Arhun" ? "Arhun Saday" : "Jeusto",
  tagline: "Software Engineer",
  url: process.env.NAME === "Arhun" ? "https://arhun.fr" : "https://jeusto.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  customFields: {
    name: process.env.NAME || "Jeusto",
  },

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
          blogSidebarCount: "ALL",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Arhun Saday.`,
          },
          editUrl: "https://github.com/jeusto/jeusto.com/edit/master/",
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
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      image: "img/meta-image.png",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: process.env.NAME === "Arhun" ? "Arhun Saday" : "Jeusto",
        logo: {
          alt: "Site logo",
          src: "img/logo.svg",
          srcDark: "img/logo-white.svg",
          height: "45px",
          width: "45px",
        },
        items: [
          { to: "/projects", label: "Projects", position: "left" },
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
                label:
                  "Email: " +
                  (process.env.NAME === "Arhun"
                    ? "contact@arhun.fr"
                    : "contact@jeusto.com"),
                href:
                  "mailto:" +
                  (process.env.NAME === "Arhun"
                    ? "contact@arhun.fr"
                    : "contact@jeusto.com"),
              },

              {
                label: "LinkedIn: @asaday",
                href: "https://www.linkedin.com/in/asaday/",
              },
              {
                label: "Github: @Jeusto",
                href: "https://github.com/Jeusto/",
              },
              {
                label: "Twitter @Jeustoo",
                href: "https://twitter.com/Jeustoo",
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
