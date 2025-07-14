import path from 'path'
import { defineConfig } from 'vitepress'
import svgVueLoader from '../../plugins/vite-plugin-svg-vue'
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
          { text: 'AlertDialog', link: '/module/components/alert-dialog/alert-dialog.md' },
          { text: 'Card', link: '/module/components/card/card.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    plugins: [
      svgVueLoader() as any,

    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../src'),
        '@docs': path.resolve(__dirname, '../../docs'),
      },
    },
  },

  vue: {
    // denylist 中的标签将不会被当作 Vue 组件解析
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === 'iconify-icon'
      }
    }

  },

  base: '/xiana-ui/'
})
