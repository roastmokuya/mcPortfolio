<script setup lang="ts">
const { locale } = useI18n();
const resume = ref("");

watchEffect(() => {
  resume.value =
    locale.value === "zh-TW" ? "mengche-resume-tw" : "mengche-resume-en";
});
</script>

<template>
  <div
    class="fixed right-6 bottom-6 z-10"
    :class="[locale === 'zh-TW' ? 'font-noto' : 'font-poppins']"
  >
    <div class="absolute z-10 ml-1 mt-1">
      <NuxtLink
        :to="`/resume/${resume}.pdf`"
        external
        class="w-[72px] h-[72px] md:w-20 md:h-20 sm:hover:bg-zinc-900 sm:hover:text-white sm:hover:dark:bg-yellow-400 sm:hover:dark:text-zinc-900 duration-300 rounded-full flex flex-col justify-center items-center"
        target="_blank"
        rel="noreferrer"
        :aria-label="locale === 'zh-TW' ? '點擊顯示' : 'Click to watch'"
      >
        <IconDocument />
        <p class="font-bold text-sm sm:text-base">
          {{ $t("resume") }}
        </p>
      </NuxtLink>
    </div>

    <div
      class="w-20 h-20 md:w-[88px] md:h-[88px] text-xs font-medium rotate-180 spin-slow"
      :class="[
        locale === 'zh-TW' ? 'tracking-[0.55rem]' : 'tracking-[0.21rem]',
      ]"
    >
      <svg viewBox="0 0 100 100" class="overflow-visible">
        <path fill="none" d="M 0 50 a 50 50 0 1 1 0 1 z" id="circle" />
        <text class="fill-zinc-400">
          <textPath xlink:href="#circle">{{ $t("arcText") }}</textPath>
        </text>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.spin-slow {
  transform-origin: center;
  animation: spin 20s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
