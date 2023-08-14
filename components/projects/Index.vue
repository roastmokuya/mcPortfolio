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
      title: `${t("indexTitle")} - ${t("projectItem")} & ${t("workItem")}`,
      description: t("projectsDescription"),
      ogTitle: `${t("indexTitle")} - ${t("projectItem")} & ${t("workItem")}`,
      ogDescription: t("projectsDescription"),
      ogSiteName: `${t("indexTitle")} - ${t("projectItem")} & ${t("workItem")}`,
    });
  } else {
    useSeoMeta(indexSeo);
  }
});
</script>

<template>
  <div>
    <CubeBtn
      class="justify-end -rotate-45 -top-[5rem] -left-[5rem] active:-top-[4.5rem] active:-left-[4.5rem] md:-top-[10.5rem] md:-left-[10.5rem] md:active:-top-[10rem] md:active:-left-[10rem] lg:hover:-top-[10rem] lg:hover:-left-[10rem]"
      :class="[
        isOpen
          ? 'z-50 bg-amber-500 dark:bg-yellow-400 text-white dark:text-zinc-950 border-none'
          : 'z-[1] ',
      ]"
      @click.stop="openFn(), fixedFn()"
    >
      <template #iconTop>
        <IconUpArrow v-show="isOpen" />
      </template>
      {{ $t("projects") }}
    </CubeBtn>
    <Content v-show="isOpen">
      <template #content>
        <ProjectsInnerContent class="py-10 mt-4 lg:mt-24" />
      </template>
    </Content>
  </div>
</template>

<style lang="scss" scoped></style>
