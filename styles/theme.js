import "@fontsource/abhaya-libre";
import "@fontsource/abhaya-libre/400.css";
import "@fontsource/abhaya-libre/500.css";
import "@fontsource/abhaya-libre/600.css";
import "@fontsource/abhaya-libre/700.css";
import "@fontsource/abhaya-libre/800.css";
import "@fontsource/inter";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "@fontsource/jetbrains-mono";
import { theme as chakraTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const fonts = {
  body: `"Inter", sans-serif`,
  heading: `"Abhaya Libre", serif`,
  code: "Jetbrains Mono, monospace",
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
      overflowY: "scroll",
    },
  }),
};
const colors = {
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
    850: "#1D1D1D",
    900: "#171717",
  },
};

const components = {
  Link: {
    baseStyle: {
      "&:hover": {
        textDecoration: "none",
      },
    },
    variants: {
      navigation: {
        paddingX: "5",
      },
    },
  },
  Button: {
    baseStyle: {
      fontWeight: "500",
    },
    variants: {
      solid: (props) => ({
        bg: mode("gray.100", "gray.800")(props),
        "&:hover": {
          bg: mode("gray.200", "gray.700")(props),
        },
      }),
      ghost: (props) => ({
        "&:hover": {
          bg: mode("gray.200", "gray.800")(props),
        },
      }),
      cardGhost: (props) => ({
        "&:hover": {
          bg: mode("gray.200", "gray.800")(props),
        },
      }),
    },
  },
};

const config = {
  initialColorMode: "system",
  disableTransitionOnChange: false,
};

const overrides = extendTheme({
  ...chakraTheme,
  config,
  fonts,
  fontSizes,
  styles,
  colors,
  components,
});

export default extendTheme(overrides);
