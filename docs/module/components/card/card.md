---
title: Card
description: 这里是描述
---

<script setup>
import DemoBlock from '@docs/components/DemoBlock.vue'


import CardDemoBase from './demos/base.vue'
import CardDemoBaseStr from './demos/base.vue?raw'
import CardSlotDemoBase from './demos/slot.vue'
import CardSlotDemoBaseStr from './demos/slot.vue?raw'



</script>

# Card

## 基础使用

<ClientOnly>
    <DemoBlock :code="CardDemoBaseStr">
        <CardDemoBase />
    </DemoBlock>
</ClientOnly>

## 通过插槽自定义元素结构

<ClientOnly>
    <DemoBlock :code="CardSlotDemoBaseStr">
        <CardSlotDemoBase />
    </DemoBlock>
</ClientOnly>
