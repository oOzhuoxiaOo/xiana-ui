<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { type ButtonVariants, buttonVariants } from '.'
import { LoaderCircle } from 'lucide-vue-next'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class'],
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  loading: false
})
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="cn(buttonVariants({ variant, size }), props.class)">
    <LoaderCircle v-if="loading" class="tw-animate-spin" />
    <slot />
  </Primitive>
</template>

<style scoped>
.aaa {
  color: red;
}
</style>
