<template>
    <div>
        <Button @click="handleOpen">基本使用</Button>
    </div>
</template>

<script setup lang="ts">
import { openModal } from '@/components/ui/alert-dialog/useXAlertDialog';
import Button from '@/components/ui/button/Button.vue';

const handleOpen = () => {
    openModal({
        title: '提示',
        description: '这是一个提示',
        type: 'success',
        onConfirm: () => {
            return true
        }
    })
}


</script>