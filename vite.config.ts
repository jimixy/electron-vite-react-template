import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import twstyled from 'vite-plugin-twstyled'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'

export default defineConfig({
  plugins: [
    // commonjs(),
    twstyled(),
    // nodeResolve({ preferBuiltins: true, browser: true }),
    reactRefresh()
  ],
  base: './',
  root: resolve('./src/renderer'),
  build: {
    outDir: resolve('./dist'),
    emptyOutDir: true
  },
  resolve: {
    alias: [
      {
        find: '@/renderer',
        replacement: resolve(__dirname, 'src/renderer')
      },
      {
        find: '@/common',
        replacement: resolve(__dirname, 'src/common')
      }
    ]
  },
  optimizeDeps: {
    // exclude path and electron-window-state as we are using the node runtime inside the browser
    // and don't wont vite to complain. If you have any issues importing node packages and vite complains,
    // add them here
    // exclude: ['path']
  }
})
