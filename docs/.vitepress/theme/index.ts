import DefaultTheme from 'vitepress/theme'
import '../../../src/assets/docs.css'
// import 'vitepress-demo-preview/dist/style.css'

// 你有其他全局样式也可以在这里引入

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        // 给 <body> 添加 class(解决样式冲突)
        if (typeof window !== 'undefined') {
            document.documentElement.classList.add('d-box', 'tw-dark')
        }
    }

}
