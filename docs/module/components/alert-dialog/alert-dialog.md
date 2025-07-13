---
title: XAlertDialog
description: 这里是描述
---

<script setup>
import Button from '@/components/ui/button/Button.vue'
import DemoBlock from '@docs/components/DemoBlock.vue'


import AlertDialogDemoBase from './demos/base.vue'
import AlertDialogDemoBaseStr from './demos/base.vue?raw'


import AlertDialogDemoType from './demos/type.vue'
import AlertDialogDemoTypeStr from './demos/type.vue?raw'


import ButtonDemoPromise from './demos/promise.vue'
import ButtonDemoPromiseStr from './demos/promise.vue?raw'

</script>

# XAlertDialog

## 基本使用语法

<ClientOnly>
    <DemoBlock :code="AlertDialogDemoBaseStr">
        <AlertDialogDemoBase />
    </DemoBlock>
</ClientOnly>

## 警告对话框种类

<ClientOnly>
    <DemoBlock :code="AlertDialogDemoTypeStr">
        <AlertDialogDemoType />
    </DemoBlock>
</ClientOnly>

## 异步确认

<ClientOnly>
    <DemoBlock :code="ButtonDemoPromiseStr">
        <ButtonDemoPromise />
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
