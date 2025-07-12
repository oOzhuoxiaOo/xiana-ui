---
title: Button
description: 这里是描述
---

<script setup>
import Button from '@/components/ui/button/Button.vue'
import DemoBlock from '@docs/components/DemoBlock.vue'


import ButtonDemoBase from './demos/base.vue'
import ButtonDemoBaseStr from './demos/base.vue?raw'


import ButtonDemoLoading from './demos/loading.vue'
import ButtonDemoLoadingStr from './demos/loading.vue?raw'


import ButtonDemoSize from './demos/size.vue'
import ButtonDemoSizeStr from './demos/size.vue?raw'

</script>

# Button 按钮

## 变体

<ClientOnly>
    <DemoBlock :code="ButtonDemoBaseStr">
        <ButtonDemoBase />
    </DemoBlock>
</ClientOnly>

## loading

<ClientOnly>
    <DemoBlock :code="ButtonDemoLoadingStr">
        <ButtonDemoLoading />
    </DemoBlock>
</ClientOnly>

## size

<ClientOnly>
    <DemoBlock :code="ButtonDemoSizeStr">
        <ButtonDemoSize />
    </DemoBlock>
</ClientOnly>

## Props

| 属性    | 类型                                                                          | 默认值   | 说明             |
| ------- | ----------------------------------------------------------------------------- | -------- | ---------------- |
| variant | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | default  | 按钮视觉变体     |
| size    | `'xs' \| 'sm' \| 'default' \| 'lg' \| 'icon'`                                 | default  | 按钮尺寸         |
| loading | boolean                                                                       | false    | 是否显示加载状态 |
| as      | string                                                                        | 'button' | 渲染的 HTML 元素 |
| class   | `string \| object \| array`                                                   | -        | 自定义 CSS 类名  |
