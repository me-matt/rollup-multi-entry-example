import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import multiEntry from "rollup-plugin-multi-entry";

import pkg from "./package.json";

export default {
  input: {
    include: ["src/**/*.js"],
    exclude: ["src/**/*.story.js", "src/test.js", "src/**/*.test.js"]
  },
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    babel({
      exclude: "node_modules/**",
      plugins: ["external-helpers"]
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: "src"
      }
    }),
    multiEntry()
  ]
};
