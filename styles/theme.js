import { theme as chakraTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// Function to calculate fluid font size
const fluidType = (minFont, maxFont) => {
  let XX = 768 / 100;
  let YY = (100 * (maxFont - minFont)) / (1920 - 768);
  let ZZ = minFont / 16;
  return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`;
};

const fonts = {
  body: "Inter",
  heading: "Abhaya Libre",
  code: "Jetbrains Mono, monospace",
};
const sizes = {
  sizes: {
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
};
const fontSizes = {
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
};
const styles = {
  global: (props) => ({
    html: {
      scrollBehavior: "smooth",
      fontSize: "16px",
    },
    body: {
      color: mode("gray.900", "gray.100")(props),
      bg: mode("gray.100", "gray.900")(props),
    },
  }),
};

// Regroup and extend theme
const config = {
  useSystemColorMode: true,
  disableTransitionOnChange: false,
};

const overrides = extendTheme({
  ...chakraTheme,
  config,
  fonts,
  fontSizes,
  styles,
  colors: {
    // gray: {
    //   50: "#F9FAFB",
    //   100: "#F3F4F6",
    //   200: "#E5E7EB",
    //   300: "#D1D5DB",
    //   400: "#9CA3AF",
    //   500: "#6B7280",
    //   600: "#4B5563",
    //   700: "#374151",
    //   800: "#1F2937",
    //   900: "#111827",
    // },
    gray: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D4D4D4",
      400: "#A3A3A3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
  },
  components: {
    Tag: {
      variants: {},
    },
    Link: {
      variants: {
        navigation: {
          fontWeight: "bold",
          paddingX: "5",
          "&:hover": {
            textDecoration: "none",
          },
        },
      },
    },
    Button: {
      variants: {
        ghost: (props) => ({
          "&:hover": {
            bg: mode("gray.200", "gray.800")(props),
          },
        }),
        ghost2: (props) => ({
          "&:hover": {
            bg: mode("gray.200", "gray.700")(props),
          },
        }),
      },
    },
  },
});

export default extendTheme(overrides);
