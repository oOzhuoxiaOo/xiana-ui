import path from 'path'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XIANA-UI",
  description: "custom ui ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/module/components/button/button.md' }
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/module/components/button/button.md' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../src'),
        '@docs': path.resolve(__dirname, '../../docs'),
      },
    },
  },
  base: '/xiana-ui/'
})
