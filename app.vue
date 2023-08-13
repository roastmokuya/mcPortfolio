<script setup>
const { isLoading } = useLoading();

// 設定 seo link canonical
const route = useRoute();
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
  background-color: #ffffffe8;
}
.op-dark {
  background-color: #18181be8;
}
</style>
