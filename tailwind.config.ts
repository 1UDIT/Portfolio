import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class", "dark"],
  
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config