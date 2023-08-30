<script setup>
const year = ref(null);
year.value = new Date().getFullYear();
</script>

<template>
  <div class="absolute w-screen text-center bottom-1 p-3">
    <small
      class="text-zinc-500 dark:text-zinc-400 text-xs font-poppins tracking-wide"
    >
      &copy; {{ year }} Meng Che WU.
      <span class="hidden md:inline">
        All Rights Reserved. | Design & Code by Meng Che WU.
      </span>
    </small>
  </div>
</template>

<style lang="scss" scoped></style>
