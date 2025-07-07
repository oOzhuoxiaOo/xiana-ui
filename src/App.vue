<script setup lang="ts">
import { LoaderCircle, User } from 'lucide-vue-next';
import Button from './components/ui/button/Button.vue';



</script>

<template>
  <div>
    <Button variant="default" size="icon" class="w-10 h-10" disabled>
      <LoaderCircle :size="24" class="animate-spin" />
    </Button>
  </div>

</template>

<style scoped></style>
