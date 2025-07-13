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
          DEFAULT: config.lightBackground || "#232323",
        },
        night: {
          DEFAULT: config.darkBackground || "#232323",
        },
        "mesh-dark": "#232323",
        "mesh-blue": "#003BD2",
        "mesh-teal": "#27EED6",
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
      backgroundImage: {
        "mesh-gradient": "linear-gradient(to right, #232323, #232323)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
