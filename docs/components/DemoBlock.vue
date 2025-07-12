<template>
    <div
        class="tw-rounded-xl tw-border tw-border-gray-200 dark:tw-border-gray-700 tw-bg-[#f5f6fa] dark:tw-bg-[#232326] tw-shadow-md tw-mb-10 tw-overflow-hidden tw-max-w-2xl tw-mx-auto">
        <!-- Mac 风格窗口栏 -->
        <div
            class="tw-flex tw-items-center tw-h-8 tw-px-4 tw-bg-[#e0e1e6] dark:tw-bg-[#232326] tw-border-b tw-border-gray-200 dark:tw-border-gray-700">
            <span class="tw-flex tw-items-center tw-gap-2">
                <span
                    class="tw-w-3 tw-h-3 tw-rounded-full tw-bg-[#ff5f56] tw-border tw-border-[#e0443e] tw-shadow-sm"></span>
                <span
                    class="tw-w-3 tw-h-3 tw-rounded-full tw-bg-[#ffbd2e] tw-border tw-border-[#dea123] tw-shadow-sm"></span>
                <span
                    class="tw-w-3 tw-h-3 tw-rounded-full tw-bg-[#27c93f] tw-border tw-border-[#13a10e] tw-shadow-sm"></span>
            </span>
        </div>
        <!-- 预览区 -->
        <div class="tw-p-8 tw-bg-white dark:tw-bg-[#232326] tw-min-h-[64px]" ref="previewRef">
            <slot />
        </div>
        <!-- 操作区 -->
        <div
            class="tw-flex tw-items-center tw-justify-between tw-px-4 tw-py-2 tw-bg-[#f5f6fa] dark:tw-bg-[#232326] tw-border-t tw-border-gray-200 dark:tw-border-gray-700">
            <div class="tw-text-xs tw-text-gray-400 tw-select-none">组件预览</div>
            <div class="tw-flex tw-gap-2">
                <!-- 展开/收起代码图标按钮 -->
                <button @click="toggleCode"
                    class="tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center tw-rounded-md tw-transition tw-bg-transparent tw-hover:tw-bg-gray-200 dark:tw-hover:tw-bg-gray-700 tw-text-gray-600 dark:tw-text-gray-200 tw-border tw-border-transparent tw-hover:tw-border-gray-300 dark:tw-hover:tw-border-gray-600"
                    :aria-label="showCode ? '收起代码' : '展开代码'">
                    <svg v-if="!showCode" class="tw-w-5 tw-h-5" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14m7-7H5" />
                    </svg>
                    <svg v-else class="tw-w-5 tw-h-5" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5" />
                    </svg>
                </button>
                <!-- 复制代码图标按钮 -->
                <button @click="copyCode"
                    class="tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center tw-rounded-md tw-transition tw-bg-transparent tw-hover:tw-bg-blue-100 dark:tw-hover:tw-bg-blue-900 tw-text-blue-600 dark:tw-text-blue-300 tw-border tw-border-transparent tw-hover:tw-border-blue-200 dark:tw-hover:tw-border-blue-700"
                    aria-label="复制代码">
                    <svg class="tw-w-5 tw-h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" stroke-width="2"
                            fill="none" />
                        <rect x="3" y="3" width="13" height="13" rx="2" ry="2" stroke="currentColor" stroke-width="2"
                            fill="none" />
                    </svg>
                </button>
            </div>
        </div>
        <!-- 代码区 -->
        <transition name="demo-fade-slide">
            <div v-show="showCode" class="tw-overflow-hidden">

                <div v-html="highlightedCode" class="tw-shiki-custom"></div>

            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { createHighlighter } from 'shiki'


const props = defineProps<{ code: string, language?: string }>()
const showCode = ref(false)
const toggleCode = () => (showCode.value = !showCode.value)

const highlightedCode = ref('')

const formatAndHighlight = async () => {
    const code = props.code
    const lang = props.language || 'vue'
    try {
        const highlighter = await createHighlighter({
            themes: ['github-dark', 'github-light'],
            langs: [lang]
        })
        highlightedCode.value = highlighter.codeToHtml(code, {
            themes: {
                light: 'github-light',
                dark: 'github-dark'
            },
            defaultColor: 'dark', // 关键点
            lang
        })
    } catch (e) {
        console.log("e", e)
        highlightedCode.value = code
    }
}

watch(
    () => [props.language, showCode.value],
    () => {
        if (showCode.value) formatAndHighlight()
    },
    { immediate: true }
)

const copyCode = async () => {
    try {
        await navigator.clipboard.writeText(props.code)
        alert('代码已复制！')
    } catch {
        alert('复制失败！')
    }
}
</script>

<style scoped lang="scss">
.demo-fade-slide-enter-active,
.demo-fade-slide-leave-active {
    transition: opacity 0.4s cubic-bezier(.4, 0, .2, 1), max-height 0.4s cubic-bezier(.4, 0, .2, 1), padding 0.4s cubic-bezier(.4, 0, .2, 1);
}

.demo-fade-slide-enter-from,
.demo-fade-slide-leave-to {
    opacity: 0;
    max-height: 0;
    padding-top: 0;
    padding-bottom: 0;
}

.demo-fade-slide-enter-to,
.demo-fade-slide-leave-from {
    opacity: 1;
    max-height: 24rem;
}

/* DemoBlock.vue style 区域 */
.tw-shiki-custom {
    :deep(.shiki) {
        padding: 1.5rem;
    }



}
</style>
