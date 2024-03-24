import { defineConfig } from 'tsup'

export const tsup = defineConfig([
  {
    splitting: true,
    clean: true,
    dts: true,
    entry: [
      'src/*.ts',
    ],
    format: [
      'esm',
      'cjs',
    ],
    external: [
      'tsup',
      'html-webpack-plugin',
    ],
  },
  {
    platform: 'browser',
    minify: true,
    splitting: false,
    clean: false,
    dts: false,
    entry: [
      'src/client/*.ts',
    ],
    target: 'es6',
    format: [
      'iife',
    ],
    external: [
    ],
    outDir: 'dist/client',
  },
])
