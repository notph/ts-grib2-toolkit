import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.ts', // Entry point
  output: [
    {
      file: 'dist/ts-grib2-toolkit.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/ts-grib2-toolkit.esm.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [json(), typescript(), resolve(), commonjs()],
};
