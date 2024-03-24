import { defineConfig } from 'tsup'

export const tsup = defineConfig([
  {
    splitting: true,
    clean: true,
    dts: true,
    entry: [
      'src/plugin.ts',
    ],
    format: [
      'esm',
      'cjs',
    ],
    external: [
      'tsup',
      'fast-json-stable-stringify',
      'pretty-bytes',
      'upath',
      'webpack-sources',
      'workbox-build',
      'webpack',
    ],
  },
  {
    platform: 'browser',
    minify: true,
    splitting: true,
    clean: true,
    dts: true,
    entry: [
      'src/client.ts',
    ],
    target: 'es6',
    format: [
      'esm',
      'cjs',
    ],
    external: [
      'workbox-core',
      'workbox-precaching',
      'workbox-routing',
    ],
  },
])
