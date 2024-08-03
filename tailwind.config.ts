import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "zoom-in": {
          "0%": { opacity: "0.5", transform: "scale(0.75)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "zoom-out": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0.5", transform: "scale(0.75)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-out",
        "fade-out": "fade-out 0.2s ease-out",
        "zoom-in": "zoom-in 0.2s ease-out",
        "zoom-out": "zoom-out 0.2s ease-in",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} as Config;
