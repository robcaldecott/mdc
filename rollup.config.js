// rollup.config.js
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import autoExternal from "rollup-plugin-auto-external";

export default {
  input: "index.js",
  output: {
    file: "bundle.js",
    format: "cjs"
  },
  plugins: [
    autoExternal(),
    resolve(),
    babel({
      plugins: ["external-helpers"],
      exclude: "node_modules/**" // only transpile our source code
    })
  ],
  external: id => id.includes("@material")
};
