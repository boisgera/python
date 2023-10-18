import * as fs from "fs";

var config = fs.readFileSync("astro.config.mjs", "utf8");
config = fs.readFileSync("astro.config.mjs", "utf8");
config = config.replace(new RegExp("// ", 'g'), "");  // uncomment
fs.writeFileSync("astro.config.mjs", config, "utf8");
