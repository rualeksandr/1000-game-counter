<script setup lang="ts">
const first = ref(false)
const second = ref(false)
</script>

<template>
  <UModal v-model:open="first" title="First modal" :ui="{ footer: 'justify-end' }">
    

    <template #footer>
      <UButton label="Close" color="neutral" variant="outline" @click="first = false" />

      
    </template>

  </UModal>
</template>

