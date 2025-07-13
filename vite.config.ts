import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import svgVueLoader from './plugins/vite-plugin-svg-vue'

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'raw-loader',
      transform(code, id) {
        this.info("aaaaaaaaaaaaaaaaaaaaaa")
        if (id.includes('?raw')) {
          console.log("code", code)
          return {
            code: `export default ${JSON.stringify(code + "sdsadasddsad")}`,
            map: null
          }
        }
      },
      onLog(msg) {
        this.info("msg")
      }
    },
    // svgVueLoader()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@docs': path.resolve(__dirname, './docs'),
    },
  },
})