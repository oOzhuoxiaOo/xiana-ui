<template>
    <div class="tw-flex tw-gap-3">
        <Button variant="default" size="xs">
            <span>xs</span>
        </Button>
        <Button variant="default" size="sm">
            <span>sm</span>
        </Button>
        <Button variant="default">
            <span>default</span>
        </Button>
        <Button variant="default" size="lg">
            <span>lg</span>
        </Button>
        <Button variant="default" size="icon">
            <UserRound class="tw-w-4 tw-h-4" />
        </Button>
    </div>
</template>

<script setup>
import Button from '@/components/ui/button/Button.vue'
import { UserRound } from 'lucide-vue-next';
</script>