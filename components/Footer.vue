<script setup>
const year = ref(null);
year.value = new Date().getFullYear();
</script>

<template>
  <div class="absolute w-screen text-center bottom-1 p-3">
    <small class="text-zinc-400 text-xs font-poppins tracking-wide">
      &copy; {{ year }} WILL WU.
      <span class="hidden sm:inline">
        All Rights Reserved. | Design & Code by WILL WU.
      </span>
    </small>
  </div>
</template>

<style lang="scss" scoped></style>
