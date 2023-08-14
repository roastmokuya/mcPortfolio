<script setup lang="ts">
import { LottieAnimation } from "lottie-web-vue";
import GiraffeJSON from "~/assets/lottie/giraffe.json";
</script>

<template>
  <ClientOnly>
    <div
      class="max-w-[160px] mx-auto h-screen flex flex-col justify-center items-center"
    >
      <LottieAnimation
        :animation-data="GiraffeJSON"
        :auto-play="true"
        :loop="true"
        :speed="1"
      />
      <p class="tracking-wider font-poppins font-medium">{{ $t("loading") }}</p>
    </div>
  </ClientOnly>
</template>

<style lang="scss" scoped></style>
