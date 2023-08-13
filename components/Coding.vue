<script setup lang="ts">
import { LottieAnimation } from "lottie-web-vue";
import CodingJSON from "~/assets/lottie/coding.json";

const anim = ref();
let action: any = ref();

onMounted(() => {
  action.value = setTimeout(() => {
    anim.value.play();
  }, 4000);
});

onUnmounted(() => {
  clearTimeout(action.value);
});
</script>

<template>
  <ClientOnly>
    <div class="w-28 sm:w-52 absolute left-0 top-1/2 -scale-x-100">
      <LottieAnimation
        :animation-data="CodingJSON"
        :auto-play="false"
        :loop="false"
        :speed="2"
        ref="anim"
      />
    </div>
  </ClientOnly>
</template>

<style lang="scss" scoped></style>
