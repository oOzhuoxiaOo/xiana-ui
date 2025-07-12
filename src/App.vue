<script setup lang="ts">
import { onMounted } from 'vue';

import Toaster from '@/components/ui/toast/Toaster.vue'

import { useToast } from './components/ui/toast/use-toast';
import Button from './components/ui/button/Button.vue';

const { toast } = useToast()

const handleClick = () => {
  toast({
    title: 'Hello',
    description: 'Hello',
  })
}

onMounted(() => {
})

</script>

<template>
  <Toaster />

  <div class="tw-flex tw-flex-col tw-gap-10">
    <h1 class="test">123</h1>
    <Button @click="handleClick" variant="default" class=" test w-44 h-10" loading>
      <span>Click me</span>
    </Button>
    <Button variant="destructive" class="w-44 h-10" loading>
      <span>Click me</span>
    </Button>
    <Button variant="ghost" class="w-44 h-10" loading>
      <span>Click me</span>
    </Button>
    <Button variant="link" class="w-44 h-10" loading>
      <span>Click me</span>
    </Button>
    <Button variant="outline" class="w-44 h-10" loading>
      <span>Click me</span>
    </Button>
    <Button variant="secondary" class="w-44 h-10" loading>
      <span>Click me</span>
    </Button>
  </div>

</template>

<style scoped lang="scss">
.test {
  border: var(--test);

  :deep(h2) {

    font-size: 50px;

    h3 {
      font-size: 100px;
    }

  }
}
</style>
