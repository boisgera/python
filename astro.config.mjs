import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  base: "",
  site: "http://localhost:3000",
  experimental: {
    assets: true,
    viewTransitions: true,
  },
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "github-dark" },
      // Links don't work as expected
      // remarkPlugins: [[remarkToc, { heading: "Table des matières" }]],
      //
    }),
  ],
});
