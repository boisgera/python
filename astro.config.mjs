import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  /* ℹ️ GitHub pages config */
  // base: "/python", 
  // site: "https://boisgera.github.io/python", 
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "github-dark" },
    }),
  ],
});
