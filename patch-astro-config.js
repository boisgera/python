import * as fs from "fs";

const patch = {
  base: "python",
  site: "https://boisgera.github.io",
};

const config = fs.readFileSync("astro.config.mjs", "utf8");

const pattern = /defineConfig\(\{(?:.|\n)*\}\);/g;

const patched = config.replace(pattern, function (match) {
  let text = match.substring(0, match.lastIndexOf("\n")); // remove last line
  text += "\n";
  for (let [key, value] of Object.entries(patch)) {
    text += "  " + key + ": " + JSON.stringify(value) + ",\n";
  }
  text += "});";
  return text;
});

fs.writeFileSync("astro.config.mjs", patched, "utf8");
