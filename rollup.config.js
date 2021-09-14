import commonJs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import path from 'path'

export default {
  input: "src/index.ts",
  output: [{
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    commonJs(),
    typescript({
      tsconfig: path.resolve(__dirname, "tsconfig.json"),
    }),
  ],
};