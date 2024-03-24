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
      'workbox-webpack-plugin',
    ],
  },
])
