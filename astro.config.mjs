import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  base: "",
  site: "https://boisgera.github.io/python/", // "http://localhost:3000",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "github-dark" },
    }),
  ],
});
