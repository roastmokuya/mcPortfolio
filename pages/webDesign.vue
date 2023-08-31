<script setup lang="ts">
definePageMeta({
  layout: "project-layout",
});

// 定義 res.data
interface IData {
  webData?: IwebData[];
  actionsData?: IActionsData[];
}

interface baseData {
  id: number;
  title: string;
  enTitle: string;
  description?: string;
  enDescription?: string;
  imgs: string[];
  alts: string[];
  enAlts: string[];
}
// 定義 res.data.webData
interface IwebData extends baseData {
  painPoints: string[];
  enPainPoints: string[];
  solves: string[];
  enSolves: string[];
}
// 定義 res.data.actionsData
interface IActionsData extends baseData {
  constructors: string[];
  enConstructors: string[];
}

const webData = ref<IwebData[] | null>([]);
const actionsData = ref<IActionsData[] | null>([]);
onMounted(() => {
  // 一定要使用 nextTick，不然重整後 res.data 會是 null
  nextTick(async () => {
    const [{ data: web }, { data: actions }] = await Promise.all([
      useFetch<IData>("./api/webData"),
      useFetch<IData>("./api/actionsData"),
    ]);
    webData.value = web.value?.webData as IwebData[];
    actionsData.value = actions.value?.actionsData as IActionsData[];
  });
});

// seo 多國語系
const { locale, t } = useI18n();
const { VITE_APP_BASEURL } = import.meta.env;
watchEffect(() => {
  useSeoMeta({
    title: `${t("indexTitle")} - ${t("workWebTitle")}`,
    description: t("workWebDescription"),
    author: t("name"),
    ogTitle: `${t("indexTitle")} - ${t("workWebTitle")}`,
    ogDescription: t("workWebDescription"),
    ogSiteName: `${t("indexTitle")} - ${t("workWebTitle")}`,
    ogType: "website",
    ogUrl: `${VITE_APP_BASEURL}/webDesign`,
    ogImage:
      "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1691049235157.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ImaCZu0NKU1linhceC3atePNXuAevTvZuDZIoQ1vf0pjQZSJQOW2V6IIKvUBlIKyhjHW%2F71ozJC%2Brea03ChrP3uw%2FWUoRRyE4dwq1WD9zgA%2FGJwSnO8bvUPkhmwqsyLs6YUComTfyTE2zJ8ycymw2i9HYrSgZSZ1EeAxQ8Iq1Hqykh54tWNmDdazQwKN7tUm7M6kchROVhRc92fxQ7UteP1%2BHSWjxksCmCxkmZC%2FQCowfsq38ler%2FCL9XAbweNVOM99%2FKH55xUF8gy9BHDOWBB9Ol%2FLaD6rxrBx55y18YIAp1jfVXSg1GfhJ9syWgXj8lMcjyZkx9AdSMAN2wlj%2BRQ%3D%3D",
  });
});
</script>

<template>
  <NuxtLayout name="project-layout">
    <div
      class="container max-w-xl lg:max-w-4xl px-4"
      :class="[
        locale === 'zh-TW'
          ? 'font-noto text-justify'
          : 'font-poppins text-left',
      ]"
    >
      <h1 class="text-3xl font-bold mt-10 mb-5">
        {{ $t("workWebTitle") }}
      </h1>
      <ul class="my-10">
        <li v-for="item in webData" :key="item.id">
          <p class="text-2xl font-medium mb-3">
            {{ locale === "zh-TW" ? item.title : item.enTitle }}
          </p>
          <div>
            <h2 class="text-zinc-600 dark:text-zinc-400">
              {{ locale === "zh-TW" ? item.description : item.enDescription }}
            </h2>
            <div class="my-5">
              <p class="text-lg font-medium">{{ $t("painPoint") }}</p>
              <ul class="list-disc pl-6 text-zinc-600 dark:text-zinc-400">
                <template v-if="locale === 'zh-TW'">
                  <li
                    v-for="painPoint in item.painPoints"
                    :key="painPoint"
                    class="my-2"
                  >
                    {{ painPoint }}
                  </li>
                </template>
                <template v-else>
                  <li
                    v-for="enPainPoint in item.enPainPoints"
                    :key="enPainPoint"
                    class="my-2"
                  >
                    {{ enPainPoint }}
                  </li>
                </template>
              </ul>
            </div>
            <div class="my-5">
              <p class="text-lg font-medium">{{ $t("solution") }}</p>
              <ul class="list-disc pl-6 text-zinc-600 dark:text-zinc-400">
                <template v-if="locale === 'zh-TW'">
                  <li v-for="solve in item.solves" :key="solve" class="my-2">
                    {{ solve }}
                  </li>
                </template>
                <template v-else>
                  <li
                    v-for="enSolve in item.enSolves"
                    :key="enSolve"
                    class="my-2"
                  >
                    {{ enSolve }}
                  </li>
                </template>
              </ul>
            </div>
            <div class="text-center">
              <ul
                class="sm:flex justify-center items-center py-4 sm:gap-3 md:gap-4"
              >
                <li v-for="(img, index) in item.imgs" :key="img" class="mb-3">
                  <NuxtImg
                    :src="`/images/iauntyRedesign/${img}`"
                    :alt="
                      locale === 'zh-TW' ? item.alts[index] : item.enAlts[index]
                    "
                    loading="lazy"
                    format="webp"
                    quality="30"
                    densities="x1 x2"
                    class="flex-1 shadow rounded-2xl w-full"
                  />
                </li>
              </ul>
              <div
                class="flex justify-center items-center text-zinc-600 dark:text-zinc-400"
              >
                <IconTriangle
                  class="mr-1"
                  :class="[locale === 'zh-TW' ? ' mt-[3px]' : 'mt-0']"
                />
                <small v-if="locale === 'zh-TW'" class="text-sm">
                  <span v-for="alt in item.alts" :key="alt" class="imgText">
                    {{ alt }}
                    <span class="px-2">VS.</span>
                  </span>
                </small>
                <small v-else class="text-sm">
                  <span
                    v-for="enAlt in item.enAlts"
                    :key="enAlt"
                    class="imgText"
                  >
                    {{ enAlt }}
                    <span class="px-2">VS.</span>
                  </span>
                </small>
              </div>
            </div>
          </div>
          <div class="text-xs text-center tracking-widest py-10">・・・</div>
        </li>
      </ul>
      <!-- 活動設計 -->
      <ul class="my-10">
        <li v-for="item in actionsData" :key="item.id">
          <p class="text-2xl font-medium mb-3">
            {{ locale === "zh-TW" ? item.title : item.enTitle }}
          </p>
          <div>
            <h2 class="text-zinc-600 dark:text-zinc-400">
              {{ locale === "zh-TW" ? item.description : item.enDescription }}
            </h2>
            <div class="my-5">
              <p class="text-lg font-medium">
                {{ locale === "zh-TW" ? "設計概念：" : "Concept of design:" }}
              </p>
              <ul class="list-disc pl-4 text-zinc-600 dark:text-zinc-400">
                <template v-if="locale === 'zh-TW'">
                  <li
                    v-for="constructor in item.constructors"
                    :key="constructor"
                    class="my-2"
                  >
                    {{ constructor }}
                  </li>
                </template>
                <template v-else>
                  <li
                    v-for="enConstructor in item.enConstructors"
                    :key="enConstructor"
                    class="my-2"
                  >
                    {{ enConstructor }}
                  </li>
                </template>
              </ul>
            </div>
            <div class="text-center">
              <ul
                class="sm:flex justify-center items-center py-4 sm:gap-3 md:gap-4"
              >
                <li v-for="(img, index) in item.imgs" :key="img" class="mb-3">
                  <NuxtImg
                    :src="`/images/iauntyRedesign/${img}`"
                    :alt="
                      locale === 'zh-TW' ? item.alts[index] : item.enAlts[index]
                    "
                    loading="lazy"
                    format="webp"
                    quality="30"
                    densities="x1 x2"
                    class="flex-1 shadow rounded-2xl w-full"
                  />
                </li>
              </ul>
              <div
                class="flex justify-center items-center text-zinc-600 dark:text-zinc-400"
              >
                <IconTriangle
                  class="mr-1"
                  :class="[locale === 'zh-TW' ? ' mt-[3px]' : 'mt-0']"
                />
                <small v-if="locale === 'zh-TW'" class="text-sm">
                  <span v-for="alt in item.alts" :key="alt" class="imgText">
                    {{ alt }}
                    <span class="px-2">&</span>
                  </span>
                </small>
                <small v-else class="text-sm">
                  <span
                    v-for="enAlt in item.enAlts"
                    :key="enAlt"
                    class="imgText"
                  >
                    {{ enAlt }}
                    <span class="px-2">&</span>
                  </span>
                </small>
              </div>
            </div>
          </div>
          <div class="text-xs text-center tracking-widest py-10">・・・</div>
        </li>
      </ul>
      <div class="text-center py-5 mb-10">
        <NuxtLink
          to="/appDesign"
          class="sm:text-zinc-300 sm:hover:text-zinc-700 sm:dark:text-zinc-700 sm:dark:hover:text-zinc-300"
        >
          <p class="text-xl">
            {{ locale === "zh-TW" ? "點擊前往" : "Click here to proceed" }}
          </p>
          <span class="text-3xl font-bold underline">
            {{ $t("workAppTitle") }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
// 圖片比較文字最後一個 VS.要消失
.imgText:last-child {
  span {
    display: none;
  }
}
</style>
