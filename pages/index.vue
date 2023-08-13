<script setup lang="ts">
import { storeToRefs } from "pinia";

// pinia 打開選單後首頁固定
const { isFixed } = storeToRefs(useIsFixedStore());

const colorMode = useColorMode();
const switchValue = ref(false);
// 傳 switchValue.value 會無法響應式
provide("switchValue", switchValue);

// 重整判斷當前模式
watchEffect(() => {
  switchValue.value = colorMode.preference === "dark" ? true : false;
});

// 切換模式
const changeModeFn = () => {
  switchValue.value = !switchValue.value;
  colorMode.preference = switchValue.value ? "dark" : "light";
};

const { locale, setLocaleCookie, t } = useI18n();
// 傳 locale.value 會無法響應式
provide("switchLang", locale);

// 語系儲存到 cookie
watch(locale, (newVal) => {
  setLocaleCookie(newVal);
});

// 切換語系
const changeLangFn = () => {
  locale.value = locale.value === "zh-TW" ? "en-US" : "zh-TW";
};

// seo 多國語系
const { VITE_APP_BASEURL } = import.meta.env;
watchEffect(() => {
  useSeoMeta({
    title: t("indexTitle"),
    description: t("indexDescription"),
    author: t("name"),
    ogTitle: t("indexTitle"),
    ogDescription: t("indexDescription"),
    ogSiteName: t("indexTitle"),
    ogType: "website",
    ogUrl: VITE_APP_BASEURL,
    ogImage:
      "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1691715529997.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hX3o5PVAg53pi1kosjjBapWYPePTSigA6V8bvTGZk6lUh6cIODui2IWWbi2emN2JrkH15wrolEpycHfCgH1N9TkxwrifHdwEVYmG2RnJTCUXby7DdAjTrZEbofSL1bUIZfiOX%2Ba7u%2FFzXkQeICZ6PrUbFwBSNmJQv%2Bi5qrFUL2bsyokTJTDbfJ04dSrVrz5ri19KdEoaoCKMHC89kJPW2MSCFsLHBsfqBgoAbJrpA91QMIjzTPJpIiaWHnfEt2g8RY8chldM9livoAdFdmfkBPLkaY7Xk3%2B1YP6ZQU%2B2VQYYzB8gehUpZcmTRHg5R2cUjc%2BkEOtEuznMVPjnGIJC2w%3D%3D",
  });
});
</script>

<template>
  <div>
    <div
      class="flex flex-col justify-center items-center w-screen min-h-screen py-10"
      :class="[
        locale === 'zh-TW' ? 'font-noto' : 'font-poppins',
        isFixed ? 'fixed' : 'relative',
      ]"
    >
      <div class="text-center relative z-[1]">
        <p
          class="text-sm sm:text-base font-medium text-zinc-800 dark:text-white"
        >
          {{ $t("hi") }}
        </p>
        <div
          class="before:block before:absolute before:-inset-1 before:-skew-y-3 px-6 sm:py-2 before:bg-yellow-400 before:rounded-md relative inline-block font-bold my-4"
        >
          <h1
            class="relative text-zinc-900"
            :class="[
              locale === 'zh-TW'
                ? 'text-[44px] sm:text-5xl tracking-widest'
                : 'text-[32px] sm:text-4xl tracking-normal',
            ]"
          >
            {{ $t("name") }}
          </h1>
        </div>
        <h2
          class="text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-200"
        >
          \ {{ $t("position") }} /
        </h2>
      </div>
      <div class="mt-5 mb-20">
        <HeadSVGHead class="z-[1]" />
        <Blob class="hidden md:block z-0" />
      </div>
      <div class="flex pb-10">
        <SwitchMode @change-mode="changeModeFn" />
        <SwitchLang @change-lang="changeLangFn" />
      </div>
      <Footer />
    </div>

    <About />
    <Projects />
    <Contact />
    <Resume />
  </div>
</template>

<style lang="scss" scoped></style>
