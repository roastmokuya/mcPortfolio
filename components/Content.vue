<script setup lang="ts">
const switchValue = inject<any>("switchValue");
</script>

<template>
  <div
    class="absolute w-screen h-screen overflow-scroll top-0 left-0 flex flex-col items-center transition-all duration-300 z-40"
    :class="[switchValue ? 'op-dark dark:text-white' : 'op-white']"
  >
    <div class="container px-4">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
