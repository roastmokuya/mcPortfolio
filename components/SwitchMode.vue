<script setup lang="ts">
const switchValue = inject<any>("switchValue");
const { locale } = useI18n();

const emits = defineEmits<{
  changeMode: [];
}>();

const changeModeFn = () => {
  emits("changeMode");
};
</script>

<template>
  <button
    class="swatchButton"
    type="button"
    :aria-abel="[locale === 'zh-TW' ? '切換主題' : 'Change Theme']"
    @click="changeModeFn"
  >
    <span class="sr-only">
      {{ switchValue ? $t("disDark") : $t("opDark") }}
    </span>
    <IconSun />
    <IconMoon class="ml-2" />

    <span class="switch" :class="{ 'translate-x-[2rem]': switchValue }">
      <IconSun
        v-show="!switchValue"
        class="text-white"
        :class="[!switchValue ? 'scale-100 opacity-100' : 'scale-0 opacity-0']"
      />
      <IconMoon
        v-show="switchValue"
        class="text-slate-700"
        :class="[switchValue ? 'scale-100 opacity-100' : 'scale-0 opacity-0']"
      />
    </span>
  </button>
</template>

<style lang="scss" scoped></style>
