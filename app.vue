<script setup>
const { isLoading } = useLoading();
const route = useRoute();

// 設定 seo link canonical
const { VITE_APP_BASEURL } = import.meta.env;
watchEffect(() => {
  useHead({
    link: [
      {
        rel: "canonical",
        href: `${VITE_APP_BASEURL}${route.path}`,
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
  background-color: #fffffffa;
}
.op-dark {
  background-color: #18181bfa;
}
</style>
