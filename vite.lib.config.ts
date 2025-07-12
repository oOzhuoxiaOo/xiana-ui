import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true,
            rollupTypes: true,
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'XianaUI',
            fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
        },
        rollupOptions: {
            external: [
                'vue',
                'vue/compiler-sfc',
                '@vue/runtime-core',
                'tailwindcss',
                'class-variance-authority',
                'clsx',
                'tailwind-merge',
                'lucide-vue-next',
                'reka-ui',
            ],
            output: {
                globals: {
                    vue: 'Vue',
                    'class-variance-authority': 'cva',
                    clsx: 'clsx',
                    'tailwind-merge': 'twMerge',
                    'lucide-vue-next': 'LucideVueNext',
                    'reka-ui': 'RekaUI',
                },
            },
        },
        cssCodeSplit: false,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
}) 