import path from 'node:path'
import { defineConfig } from '@rsbuild/core'
import { pluginSass } from '@rsbuild/plugin-sass'
import { pluginVue } from '@rsbuild/plugin-vue'
import { UnoCSSRspackPlugin } from '@unocss/webpack/rspack'
import { presetAttributify } from '@unocss/preset-attributify'
import presetWind3 from '@unocss/preset-wind3'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginSass({
      sassLoaderOptions: {
        sourceMap: true,
      },
    }),
  ],
  html: {
    template: './public/index.html',
  },
  source: {
    entry: {
      index: './src/main.ts',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  tools: {
    rspack: {
      plugins: [
        UnoCSSRspackPlugin({
          presets: [presetWind3(), presetAttributify()],
          transformers: [transformerVariantGroup()],
        }),
      ],
    },
  },
})
