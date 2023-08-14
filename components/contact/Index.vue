<script setup lang="ts">
// composables
const { isOpen, openFn } = useIsOpen();
const { indexSeo } = useIndexSeo();

// index fixed pinia
const { fixedFn } = useIsFixedStore();

// seo 多國語系
const { t } = useI18n();
watch(isOpen, (newVal) => {
  if (newVal) {
    useSeoMeta({
      title: `${t("indexTitle")} - ${t("contact")}`,
      description: t("contactDescription"),
      ogTitle: `${t("indexTitle")} - ${t("contact")}`,
      ogDescription: t("contactDescription"),
      ogSiteName: `${t("indexTitle")} - ${t("contact")}`,
    });
  } else {
    useSeoMeta(indexSeo);
  }
});
</script>

<template>
  <div>
    <CubeBtn
      class="justify-start rotate-45 -bottom-[5rem] -left-[5rem] active:-bottom-[4.5rem] active:-left-[4.5rem] md:-bottom-[10.5rem] md:-left-[10.5rem] md:active:-bottom-[10rem] md:active:-left-[10rem] lg:hover:-bottom-[10rem] lg:hover:-left-[10rem]"
      :class="[
        isOpen
          ? 'z-50 bg-amber-500 dark:bg-yellow-400 text-white dark:text-zinc-950 border-none'
          : 'z-[1]',
      ]"
      @click.stop="openFn(), fixedFn()"
    >
      {{ $t("contact") }}
      <template #iconDown>
        <IconDownArrow v-show="isOpen" />
      </template>
    </CubeBtn>
    <Content v-show="isOpen">
      <template #content>
        <ContactInnerContent />
      </template>
    </Content>
  </div>
</template>

<style lang="scss" scoped></style>
