<script setup lang="ts">
const { locale } = useI18n();

const swiper = useSwiper();
const isBeginning = ref(true);
const isEnd = ref(false);

watchEffect(() => {
  isBeginning.value = swiper.value.isBeginning;
  isEnd.value = swiper.value.isEnd;
});
</script>

<template>
  <div class="absolute right-0 bottom-0 z-10">
    <button
      class="border border-zinc-700 dark:border-zinc-400 sm:hover:text-white sm:hover:bg-zinc-900 dark:sm:hover:text-zinc-700 dark:sm:hover:bg-zinc-50 transition-colors p-3 rounded-lg mr-2 btn-disabled"
      :disabled="isBeginning"
      :aria-abel="[locale === 'zh-TW' ? '上一頁' : 'Previous Page']"
      @click="swiper.slidePrev()"
    >
      <IconLeft />
    </button>
    <button
      class="border border-zinc-700 dark:border-zinc-400 sm:hover:text-white sm:hover:bg-zinc-900 dark:sm:hover:text-zinc-700 dark:sm:hover:bg-zinc-50 transition-colors p-3 rounded-lg btn-disabled"
      :disabled="isEnd"
      :aria-abel="[locale === 'zh-TW' ? '下一頁' : 'Next Page']"
      @click="swiper.slideNext()"
    >
      <IconRight />
    </button>
  </div>
</template>
