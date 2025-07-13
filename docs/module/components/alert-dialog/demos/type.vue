<template>
    <div class="tw-flex tw-gap-3">
        <Button @click="handleOpen('success')">成功</Button>
        <Button @click="handleOpen('warning')">警告</Button>
        <Button @click="handleOpen('error')">错误</Button>
    </div>
</template>

<script setup lang="ts">
import { openModal } from '@/components/ui/alert-dialog/useXAlertDialog';
import Button from '@/components/ui/button/Button.vue';


const handleOpen = (type: 'success' | 'warning' | 'error') => {
    openModal({
        title: '提示',
        description: '这是一个提示',
        cancelText: '取消',
        type: type,
        onConfirm: () => {
            return true
        }
    })
}


</script>