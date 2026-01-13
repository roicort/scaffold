// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://roicort.github.io",
  base: "/scaffold",
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "Space Grotesk",
        cssVariable: "--font-main",
    }]
    }
});
