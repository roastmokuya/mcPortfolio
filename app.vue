<script setup>
const { isLoading } = useLoading();
const route = useRoute();

// 設定 seo link canonical
const baseUrl = "https://portfolio-mengche.vercel.app/";
provide("baseUrl", baseUrl);
watchEffect(() => {
  useHead({
    link: [
      {
        rel: "canonical",
        href: `${baseUrl}${route.path}`,
      },
    ],
  });
});
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="#f59e0b" :height="4" :throttle="0" />
    <Loading v-if="isLoading" />
    <NuxtPage v-else />
  </div>
</template>

<style lang="scss">
.op-white {
  background-color: #ffffffe8;
}
.op-dark {
  background-color: #18181be8;
}
</style>
