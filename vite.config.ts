import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
import {libInjectCss} from 'vite-plugin-lib-inject-css';

import {glob} from 'glob';

import { extname, relative, resolve } from 'path'
import {fileURLToPath} from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ exclude: ['src/**/*.stories.tsx']}),
    libInjectCss()
  ],
  assetsInclude: ['/sb-preview/runtime.js'],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      input: Object.fromEntries(
      glob.sync('src/**/*.{ts,tsx}', {
        ignore: [
          'src/vite-env.d.ts',
          'src/**/*.stories.tsx'
        ]
      }).map(file => [
        relative(
          'src',
          file.slice(0, file.length - extname(file).length)
        ),
        fileURLToPath(new URL(file, import.meta.url))
      ])
    ),
    output: {
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
      assetFileNames: 'assets/[name][extname]',
      chunkFileNames: '[name].js',
      entryFileNames: '[name].js',
    },
    },
  },
})
