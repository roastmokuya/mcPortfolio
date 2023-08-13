<script setup lang="ts">
import { LottieAnimation } from "lottie-web-vue";
import CloudJSON from "~/assets/lottie/cloud.json";

const { locale } = useI18n();

const event = useRequestEvent();
setResponseStatus(event, 404);
</script>

<template>
  <ClientOnly>
    <div
      class="max-w-md mx-auto flex flex-col justify-center items-end h-screen px-4"
      :class="[locale === 'zh-TW' ? 'font-noto' : ' font-poppins']"
    >
      <div class="prose prose-zinc dark:prose-invert">
        <p class="font-poppins mb-0">404</p>
        <h1 class="font-medium text-4xl mb-5">
          {{ locale === "zh-TW" ? "頁面不存在。" : "Page not found." }}
        </h1>
        <p class="text-lg tracking-wider m-0">
          {{
            locale === "zh-TW"
              ? "您尋找的這個頁面不存在或是已經被移除了。"
              : "The page you are looking for doesn't exist or has been moved."
          }}
        </p>
      </div>
      <div class="w-24 -mb-4">
        <LottieAnimation
          :animation-data="CloudJSON"
          :auto-play="true"
          :loop="true"
          :speed="1"
        />
      </div>
    </div>
  </ClientOnly>
</template>
