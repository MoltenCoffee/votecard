import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { minify } from "html-minifier";
import { minify as minifyJS } from "uglify-js";

await mkdir("dist", { recursive: true });

const html = await readFile("src/index.html", "utf-8");
await writeFile(
  "dist/index.html",
  minify(html, {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    collapseBooleanAttributes: true,
  })
);

const js = await readFile("src/index.js", "utf-8");
await writeFile(
  "dist/index.js",
  minifyJS(js).code
);
