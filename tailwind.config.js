import { config } from "./lib/server/config";
import { FONTS_SANS, FONTS_SERIF } from "./consts";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./pages/**/*.js", "./components/**/*.js", "./layouts/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: config.lightBackground || "#ffffff",
        },
        night: {
          DEFAULT: config.darkBackground || "#111827",
        },
        "mesh-dark": "#050505",
      },
      fontFamily: {
        sans: FONTS_SANS,
        serif: FONTS_SERIF,
        monda: ["Monda", "sans-serif"],
        noEmoji: [
          '"IBM Plex Sans"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
