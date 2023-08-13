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
      class="max-w-md mx-auto flex flex-col justify-center h-screen px-4"
      :class="[locale === 'zh-TW' ? 'font-noto' : ' font-poppins']"
    >
      <div class="prose prose-zinc dark:prose-invert">
        <p class="font-poppins mb-0">404</p>
        <h1 class="font-bold text-4xl mb-5">
          {{ locale === "zh-TW" ? "頁面不存在" : "Page not found." }}
        </h1>
        <p class="text-lg tracking-wider m-0">
          {{
            locale === "zh-TW"
              ? "您尋找的這個頁面不存在或是已經被移除了。"
              : "The page you are looking for doesn't exist or has been moved."
          }}
        </p>
      </div>
      <div class="flex flex-col items-center w-full">
        <div class="w-24 -mb-5">
          <LottieAnimation
            :animation-data="CloudJSON"
            :auto-play="true"
            :loop="true"
            :speed="1"
          />
        </div>
        <NuxtLink
          to="/"
          class="p-2 text-lg border border-zinc-700 rounded-md hover:bg-amber-400 hover:border-amber-400 w-full text-center font-medium dark:border-zinc-400 dark:hover:text-zinc-700 dark:hover:bg-yellow-400 dark:hover:border-yellow-400"
        >
          {{ locale === "zh-TW" ? "回首頁" : "Back to home" }}
          <IconRight class="inline ml-1" />
        </NuxtLink>
      </div>
    </div>
  </ClientOnly>
</template>
