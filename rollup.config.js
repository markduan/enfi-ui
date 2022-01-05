import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

import packageJSON from './package.json';

export default [
  {
    input: 'src/index.js',
    external: ['react', 'react-dom', 'lodash'],

    output: [
      {
        file: `dist/${packageJSON.name}@${packageJSON.version}/index.js`,
        format: 'system',
        sourcemap: 'inline',
      },
      {
        file: `dist/${packageJSON.name}@${packageJSON.version}/index.min.js`,
        format: 'system',
        sourcemap: false,
        plugins: [terser()],
      },
    ],

    plugins: [
      nodeResolve({
        extensions: [".js"],
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development')
      }),
      babel({
        presets: ["@babel/preset-react"],
      }),
      commonjs(),
      livereload({ watch: "dist" }),
    ]
  },
  {
    input: 'index.js',
    external: ['react', 'react-dom', 'lodash', /@ofa\/.*/],

    output: {
      file: 'dist/index.js',
      format: 'system',
      sourcemap: 'inline',
    },

    plugins: [
      nodeResolve({
        extensions: [".js"],
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development')
      }),
      babel({
        presets: ["@babel/preset-react"],
      }),
      commonjs(),
      serve({
        open: false,
        verbose: true,
        contentBase: ["", "public"],
        host: "localhost",
        port: 3000,
      }),
      livereload({ watch: "dist" }),
    ]
  }
]
