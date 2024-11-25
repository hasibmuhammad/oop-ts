// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        "dashed-border": "dash 1.5s linear infinite",
      },
      keyframes: {
        dash: {
          "0%": { "stroke-dasharray": "0, 100" },
          "100%": { "stroke-dasharray": "100, 0" },
        },
      },
    },
  },
}
