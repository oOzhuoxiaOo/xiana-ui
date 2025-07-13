<template>
    <div class="tw-flex tw-gap-3">
        <Button @click="handleOpen">异步操作</Button>
    </div>
</template>

<script setup lang="ts">
import { openModal } from '@/components/ui/alert-dialog/useXAlertDialog';
import Button from '@/components/ui/button/Button.vue';


const handleOpen = (type: 'success' | 'warning' | 'error') => {
    openModal({
        title: '提示异步',
        description: '这是一个提示操作内容展示',
        cancelText: '取消',
        type: type,
        onConfirm: () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true)
                }, 2000)
            })
        }
    })
}


</script>