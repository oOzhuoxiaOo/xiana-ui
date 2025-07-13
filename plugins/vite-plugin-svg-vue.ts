import { Plugin } from 'vite'
import fs from 'fs/promises'
import { compileTemplate } from 'vue/compiler-sfc'

export default function svgVueLoader(): Plugin {
    return {
        name: 'vite-plugin-svg-vue',
        enforce: 'pre',
        async load(id) {
            if (!id.endsWith('.svg')) return
            const code = await fs.readFile(id, 'utf-8')
            console.log('code', code)
            // 只包一层 <template>
            const { code: v_code } = compileTemplate({
                id: JSON.stringify(id),
                source: code,
                filename: id,
                transformAssetUrls: false,
            })
            return `${v_code}\nexport default { render: render }`

        },
        async transform(code, id) {
            if (id.endsWith('.svg')) {
                console.log('transform', code)
                return
            }
        }
    }
}