<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <div
    class="cubeBtn"
    :aria-label="
      locale === 'zh-TW' ? '點擊顯示或關閉' : 'Click to show or close'
    "
  >
    <slot name="iconTop" />
    <p
      class="text-sm md:text-xl font-bold py-2"
      :class="[locale === 'zh-TW' ? 'font-noto' : 'font-poppins']"
    >
      <slot />
    </p>
    <slot name="iconDown" />
  </div>
</template>

<style lang="scss" scoped></style>
