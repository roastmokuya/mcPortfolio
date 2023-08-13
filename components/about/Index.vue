<script setup lang="ts">
const { isOpen, openFn } = useIsOpen();
const { indexSeo } = useIndexSeo();

// index fixed pinia
const { fixedFn } = useIsFixedStore();

// seo 多國語系
const { t } = useI18n();
watch(isOpen, (newVal) => {
  if (newVal) {
    useSeoMeta({
      title: `${t("indexTitle")} - ${t("about")}`,
      description: t("aboutDescription"),
      ogTitle: `${t("indexTitle")} - ${t("about")}`,
      ogDescription: t("aboutDescription"),
      ogSiteName: `${t("indexTitle")} - ${t("about")}`,
    });
  } else {
    useSeoMeta(indexSeo);
  }
});
</script>

<template>
  <div>
    <CubeBtn
      class="justify-end rotate-45 -top-[5rem] -right-[5rem] active:-top-[4.5rem] active:-right-[4.5rem] md:-top-[10.5rem] md:-right-[10.5rem] md:active:-top-[10rem] md:active:-right-[10rem] lg:hover:-top-[10rem] lg:hover:-right-[10rem]"
      :class="[
        isOpen
          ? 'z-50 bg-amber-500 dark:bg-yellow-400 text-white dark:text-zinc-950 border-none'
          : 'z-[1]',
      ]"
      @click.stop="openFn(), fixedFn()"
    >
      <template #iconTop>
        <IconUpArrow v-show="isOpen" />
      </template>
      {{ $t("about") }}
    </CubeBtn>
    <Content
      v-if="isOpen"
      :class="[
        isOpen
          ? 'translate-x-0 translate-y-0 visible opacity-100'
          : 'translate-x-full -translate-y-full invisible opacity-0',
      ]"
    >
      <template #content>
        <AboutInnerContent />
      </template>
    </Content>
  </div>
</template>

<style lang="scss" scoped></style>
