import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import {resolve} from "path";
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "harweb",
      formats: ['es'],
      fileName: (format) => `harweb.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue',
        /primevue\/.+/
      ],
      output: {
        exports: 'named',
        globals: {
          'vue': 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
