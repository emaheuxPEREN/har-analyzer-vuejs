import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '',
  plugins: [
    vue()
  ],
  /*build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "HarAnalyzerVue",
      //fileName: (format) => `${name}.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue',
        'primevue',
        'primevue/config',
        '@primeuix/themes',
      ],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          primevue: 'PrimeVue',
          'primevue/config': 'PrimeVueConfig',
        },
      },
    },
  },*/
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    dedupe: ['vue', /primevue\/.+/],
  },
})
