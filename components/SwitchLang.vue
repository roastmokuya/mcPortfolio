<script setup lang="ts">
const switchLang = inject<any>("switchLang");

const emits = defineEmits<{
  changeLang: [];
}>();

const changeLangFn = () => {
  emits("changeLang");
};
</script>

<template>
  <button class="swatchButton" type="button" @click="changeLangFn">
    <span class="sr-only">
      {{
        switchLang === "zh-TW"
          ? "切換為英文語系"
          : "Switch to the Chinese language"
      }}
    </span>
    <span class="font-noto font-bold">中</span>
    <span class="font-poppins font-medium ml-4">EN</span>
    <span
      class="switch"
      :class="{ 'translate-x-[1.7rem]': switchLang === 'en-US' }"
    >
      <span
        v-show="switchLang === 'zh-TW'"
        class="font-noto font-bold transition duration-500 transform text-white dark:text-slate-950"
        :class="[
          switchLang === 'zh-TW'
            ? 'scale-100 opacity-100'
            : 'scale-0 opacity-0',
        ]"
      >
        中
      </span>
      <span
        v-show="switchLang === 'en-US'"
        class="font-poppins font-medium transition duration-500 transform text-white dark:text-slate-950"
        :class="[
          switchLang === 'en-US'
            ? 'scale-100 opacity-100'
            : 'scale-0 opacity-0',
        ]"
      >
        EN
      </span>
    </span>
  </button>
</template>

<style lang="scss" scoped></style>
