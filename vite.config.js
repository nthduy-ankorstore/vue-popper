import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { babel } from '@rollup/plugin-babel';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    vue(), 
    babel({
      babelHelpers: 'runtime',
      skipPreflightCheck: 'true',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', 'ts'],
    })
  ],
  optimizeDeps: {
    exclude: ['vue-demi']
  },
  build: {
    minify: 'esbuild',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.js'),
      name: 'VuePopper',
      fileName: 'vue-popper'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
