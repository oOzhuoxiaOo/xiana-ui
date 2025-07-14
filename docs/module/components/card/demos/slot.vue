<template>
    <XCard>
        <template #title>
            <div>Card Title</div>
            
        </template>
        <template #footer>
            <Button>我是按钮</Button>
        </template>
        <template #default>
            <img class="tw-w-40 "
                src="https://github.com/oOzhuoxiaOo/PicGo/blob/main/pixiv/col/59260474_p0.jpg?raw=true" alt="">
        </template>
    </XCard>
</template>

<script setup>
import XCard from '@/components/ui/card/XCard.vue'
import Button from '@/components/ui/button/Button.vue'

</script>