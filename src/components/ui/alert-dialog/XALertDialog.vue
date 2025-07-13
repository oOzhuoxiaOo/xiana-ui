<template>
    <div class="tw-flex tw-gap-3 tw-flex-wrap tw-w-full">
        <AlertDialog v-model:open="open">
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        <div class="tw-flex tw-items-center tw-gap-3">
                            <CheckCircleIcon v-if="type === 'success'" class="tw-w-8 tw-h-8 tw-text-green-500" />
                            <ExclamationTriangleIcon v-if="type === 'warning'"
                                class="tw-w-8 tw-h-8 tw-text-yellow-500" />
                            <ExclamationCircleIcon v-if="type === 'error'" class="tw-w-8 tw-h-8 tw-text-red-500" />
                            {{ title }}
                        </div>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {{ description }}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel v-if="cancelText">
                        {{ cancelText }}
                    </AlertDialogCancel>
                    <Button :loading="loading" @click="handleConfirm">{{ confirmText }}</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from './index';
import Button from '../button/Button.vue';
import { CheckCircleIcon, ExclamationTriangleIcon, ExclamationCircleIcon } from '@heroicons/vue/24/solid'

import type { XAlertDialogProps } from './index.d';

const props = withDefaults(defineProps<XAlertDialogProps>(), {
    title: '',
    description: '',
    cancelText: '',
    confirmText: '确定',
    type: 'default'
})
const open = defineModel<boolean>('open', { required: true });
const loading = ref(false);


const handleConfirm = async () => {
    let canClose = true;
    if (props.onConfirm) {
        loading.value = true;
        const result = await props.onConfirm();
        canClose = !!result
        loading.value = false;
    }
    if (canClose) {
        open.value = false;
    }
}
</script>