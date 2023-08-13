<script setup lang="ts">
const { locale } = useI18n();
const route = useRoute();
const linkPath = ref("");
linkPath.value = route.path === "/webDesign" ? "/appDesign" : "/webDesign";
</script>

<template>
  <nav
    class="bg-white dark:bg-zinc-900 p-4 sticky top-0 border-b dark:border-zinc-600 z-40"
  >
    <div class="container text-sm md:text-base">
      <div class="flex justify-between items-center w-full">
        <NuxtLink
          to="/"
          class="inline-flex items-center md:hover:text-zinc-500"
        >
          <IconLeft class="mr-2" />
          {{ $t("back") }}
        </NuxtLink>
        <NuxtLink
          :to="linkPath"
          class="inline-flex items-center md:hover:text-zinc-500"
        >
          <template v-if="locale === 'zh-TW'">
            {{ linkPath === "/webDesign" ? "官網迭代設計" : "母嬰工具 App" }}
          </template>
          <template v-else>
            {{ linkPath === "/webDesign" ? "Web design" : "App design" }}
          </template>
          <IconRight class="ml-2" />
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
