<script setup>
const { isLoading } = useLoading();
const route = useRoute();

// 設定 seo link canonical
// const { VITE_APP_BASEURL } = import.meta.env;
const config = useRuntimeConfig();
watchEffect(() => {
  useHead({
    link: [
      {
        rel: "canonical",
        href: `${config.public.baseUrl}${route.path}`,
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
