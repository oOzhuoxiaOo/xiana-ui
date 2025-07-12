<template>
    <div class="tw-flex tw-gap-3 tw-flex-wrap tw-w-full">
        <Button variant="default">
            <span>default</span>
        </Button>
        <Button variant="destructive">
            <span>destructive</span>
        </Button>
        <Button variant="ghost">
            <span>ghost</span>
        </Button>
        <Button variant="link">
            <span>link</span>
        </Button>
        <Button variant="outline">
            <span>outline</span>
        </Button>
        <Button variant="secondary">
            <span>secondary</span>
        </Button>
    </div>
</template>

<script setup>
import Button from '@/components/ui/button/Button.vue'
</script>