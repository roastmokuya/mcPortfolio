<script setup lang="ts">
definePageMeta({
  layout: "project-layout",
});

interface IData {
  appData: AppData;
}
interface AppData {
  intro: INormal<string[]>;
  goal: Goal;
  coreFunction: Goal;
  analyze: INormal<string>;
  challenge: INormal<string>;
  role: INormal<string>;
  designProcess: IDesignProcess[];
  persona: Persona;
  flowChart: INormal<string>;
  wireframe: INormal<string>;
  uiDesign: UiDesign;
  prototype: Prototype;
}
interface INormal<T> {
  title: string;
  enTitle: string;
  subTitle: string;
  subEnTitle: string;
  description: T;
  enDescription: string;
  link: string;
  img: string;
}
interface Prototype extends Partial<INormal<string>> {
  demo: Demo[];
}
interface Demo extends Partial<INormal<string>> {
  videoUrl: string;
}
interface UiDesign extends Partial<INormal<string[]>> {
  imgs: string[];
  enImgs: string[];
}
interface Persona extends Partial<INormal<string>> {
  say: string[];
  enSay: string[];
}
interface IDesignProcess extends Partial<INormal<string>> {
  iconPath: string;
}
interface IObjective extends Partial<INormal<string>> {
  color: string;
}
interface Goal extends Partial<INormal<string>> {
  objective: IObjective[];
}

const { data } = await useFetch<IData>("/api/appData");
const appData = data.value?.appData as AppData;

// seo 多國語系
const { locale, t } = useI18n();
const { VITE_APP_BASEURL } = import.meta.env;
watchEffect(() => {
  useSeoMeta({
    title: `${t("indexTitle")} - ${t("workAppTitle")}`,
    description: t("workAppDescription"),
    author: t("name"),
    ogTitle: `${t("indexTitle")} - ${t("workAppTitle")}`,
    ogDescription: t("workAppDescription"),
    ogSiteName: `${t("indexTitle")} - ${t("workAppTitle")}`,
    ogType: "website",
    ogUrl: `${VITE_APP_BASEURL}/appDesign`,
    ogImage:
      "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1691049741309.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=EtKmtjJLUjEJGmk3RzjkW74OASQAm4R%2B6k%2Fedf8p%2FS0XnsLnLMAwsOuyh0LHatMyz8FBy63sQzu%2BigmeQsYwOpuOdeu%2FsWyuooDdH9wdajzL5zJj65jJ4UjJ5tp%2F2ZO%2FiP3tYNO5MzKkh%2BstI1uHz%2BGCYd7SwQasfBMdROjCaA6lU3vuEMi2LFFu4zIA20j4MgyMjnpuL0UZZ0lTnpz%2FbMuWY1YtwqLev4xuX5oKSNkBb37JY3hZIVluf9skaSmLvdhDx%2B5lafVM8ijvCyJq9xgpukw9f8Ipj9N3S%2BRMDXV1T2S9R%2FCzbnGT%2F9jF0tBu9YsLEzB3mkHmbGqKulcJ9w%3D%3D",
  });
});
</script>

<template>
  <NuxtLayout name="project-layout">
    <div class="px-4">
      <div
        class="container max-w-xl lg:max-w-4xl"
        :class="[
          locale === 'zh-TW'
            ? 'font-noto text-justify'
            : 'font-poppins text-left',
        ]"
      >
        <div class="mb-10">
          <h1 class="text-3xl font-bold mt-10 mb-5">
            {{ $t("workAppTitle") }}
          </h1>
          <div class="text-zinc-600 dark:text-zinc-400">
            <template v-if="locale === 'zh-TW'">
              <p
                v-for="item in appData.intro.description"
                :key="item"
                class="mb-3"
              >
                {{ item }}
              </p>
            </template>
            <template v-else>
              <p
                v-for="item in appData.intro.enDescription"
                :key="item"
                class="mb-3"
              >
                {{ item }}
              </p>
            </template>
          </div>
        </div>
        <div class="mb-10">
          <h2 class="text-2xl font-medium mb-1">{{ $t("question") }}</h2>
          <p class="text-zinc-600 dark:text-zinc-400">
            {{ $t("questionDescription") }}
          </p>
        </div>
        <ul>
          <li>
            <h2 class="text-2xl font-medium mb-1">
              {{
                locale === "zh-TW" ? appData.goal.title : appData.goal.enTitle
              }}
            </h2>
            <p class="text-zinc-600 dark:text-zinc-400">
              {{
                locale === "zh-TW"
                  ? appData.goal.description
                  : appData.goal.enDescription
              }}
            </p>
            <div class="grid sm:grid-cols-3 gap-4 my-10">
              <div
                v-for="item in appData.goal.objective"
                :key="item.title"
                class="text-center flex flex-col items-center max-w-xs md:max-w-full mx-auto py-5"
              >
                <svg
                  class="rounded-full"
                  width="160"
                  height="160"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="100%" height="100%" :fill="item.color"></rect>
                  <text
                    class="text-xl font-medium"
                    x="50%"
                    y="50%"
                    fill="#fff"
                    dominant-baseline="middle"
                    text-anchor="middle"
                  >
                    {{ locale === "zh-TW" ? item.title : item.enTitle }}
                  </text>
                </svg>
                <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-3">
                  {{
                    locale === "zh-TW" ? item.description : item.enDescription
                  }}
                </p>
              </div>
            </div>
          </li>
          <li>
            <h2 class="text-2xl font-medium mb-1">
              {{
                locale === "zh-TW"
                  ? appData.coreFunction.title
                  : appData.coreFunction.enTitle
              }}
            </h2>
            <div class="grid lg:grid-cols-3 gap-4 my-10">
              <div
                v-for="item in appData.coreFunction.objective"
                :key="item.title"
                class="flex flex-col items-center relative bg-zinc-100 dark:bg-zinc-800 rounded-xl p-8"
              >
                <span
                  class="absolute w-8 h-8 border-orange-400 border-2 border-e-0 border-b-0 top-0 left-0 rounded-tl-xl"
                />
                <div>
                  <h5 class="text-lg font-medium mb-1 lg:mb-2">
                    {{ locale === "zh-TW" ? item.title : item.enTitle }}
                  </h5>
                  <p class="text-sm text-zinc-600 dark:text-zinc-400">
                    {{
                      locale === "zh-TW" ? item.description : item.enDescription
                    }}
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <h2 class="text-2xl font-medium mb-1">
              {{
                locale === "zh-TW"
                  ? appData.analyze.title
                  : appData.analyze.enTitle
              }}
            </h2>
            <div
              class="grid sm:grid-cols-2 gap-4 max-w-sm mx-auto sm:max-w-full my-10"
            >
              <EChartAgePie class="my-5" />
              <EChartGenderPie class="my-5" />
            </div>
          </li>
          <li>
            <div class="mb-10">
              <h2 class="text-2xl font-medium mb-1">
                {{
                  locale === "zh-TW"
                    ? appData.challenge.title
                    : appData.challenge.enTitle
                }}
              </h2>
              <p class="text-zinc-600 dark:text-zinc-400">
                {{
                  locale === "zh-TW"
                    ? appData.challenge.description
                    : appData.challenge.enDescription
                }}
              </p>
            </div>
          </li>
          <li>
            <div class="mb-10">
              <h2 class="text-2xl font-medium mb-1">
                {{
                  locale === "zh-TW" ? appData.role.title : appData.role.enTitle
                }}
              </h2>
              <p class="text-zinc-600 dark:text-zinc-400">
                {{
                  locale === "zh-TW"
                    ? appData.role.description
                    : appData.role.enDescription
                }}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="text-xs text-center tracking-widest py-10">・・・</div>
      <div class="py-20">
        <div class="container">
          <div class="text-center">
            <strong
              class="text-2xl font-bold"
              :class="[
                locale === 'zh-TW'
                  ? 'font-noto text-justify'
                  : 'font-poppins text-left',
              ]"
            >
              {{ locale === "zh-TW" ? "設計過程" : "DESIGN PROCESS" }}
            </strong>
          </div>
        </div>
      </div>
      <div
        class="container max-w-xl lg:max-w-4xl"
        :class="[
          locale === 'zh-TW'
            ? 'font-noto text-justify'
            : 'font-poppins text-left',
        ]"
      >
        <!-- 設計過程 -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          <div
            v-for="item in appData.designProcess"
            :key="item.title"
            class="flex flex-col items-center text-center border rounded-xl p-4"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto w-14 mb-5"
                x="0px"
                y="0px"
                viewBox="0 0 511.2 511.2"
                fill="#fb923c"
                xml:space="preserve"
              >
                <path :d="item.iconPath" />
              </svg>
              <h5 class="text-lg font-medium mb-3">
                {{ locale === "zh-TW" ? item.title : item.enTitle }}
              </h5>
              <p class="text-sm text-zinc-600 dark:text-zinc-400">
                {{ locale === "zh-TW" ? item.description : item.enDescription }}
              </p>
            </div>
          </div>
        </div>
        <div class="text-xs text-center tracking-widest py-10">・・・</div>
        <!-- 人物誌 -->
        <div class="grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h2 class="text-2xl font-bold mb-1">
              {{
                locale === "zh-TW"
                  ? appData.persona.title
                  : appData.persona.enTitle
              }}
            </h2>
            <h3
              class="text-xl font-medium text-zinc-700 dark:text-zinc-300 mb-3"
            >
              {{
                locale === "zh-TW"
                  ? appData.persona.subTitle
                  : appData.persona.subEnTitle
              }}
            </h3>
            <p class="text-zinc-600 dark:text-zinc-400 mb-5">
              {{
                locale === "zh-TW"
                  ? appData.persona.description
                  : appData.persona.enDescription
              }}
            </p>
            <ul class="text-sm text-zinc-500 pl-6">
              <template v-if="locale === 'zh-TW'">
                <li
                  v-for="item in appData.persona.say"
                  :key="item"
                  class="list-disc mb-2"
                >
                  {{ item }}
                </li>
              </template>
              <template v-else>
                <li
                  v-for="item in appData.persona.enSay"
                  :key="item"
                  class="list-disc mb-2"
                >
                  {{ item }}
                </li>
              </template>
            </ul>
          </div>
          <NuxtImg
            :src="`/images/mbTool/${appData.persona.img}`"
            :alt="
              locale === 'zh-TW'
                ? appData.persona.title
                : appData.persona.enTitle
            "
            loading="lazy"
            format="webp"
            quality="30"
            densities="x1 x2"
            class="max-w-sm mx-auto lg:max-w-full lg:order-first"
          />
        </div>
        <div class="text-xs text-center tracking-widest py-10">・・・</div>
        <!-- 流程圖 -->
        <div class="mb-20">
          <div class="mb-10">
            <h2 class="text-2xl font-bold mb-1">
              {{
                locale === "zh-TW"
                  ? appData.flowChart.title
                  : appData.flowChart.enTitle
              }}
            </h2>
            <h3
              class="text-xl font-medium text-zinc-700 dark:text-zinc-300 mb-3"
            >
              {{
                locale === "zh-TW"
                  ? appData.flowChart.subTitle
                  : appData.flowChart.subEnTitle
              }}
            </h3>
            <p class="text-zinc-600 dark:text-zinc-400 mb-5">
              {{
                locale === "zh-TW"
                  ? appData.flowChart.description
                  : appData.flowChart.enDescription
              }}
            </p>
            <NuxtLink
              :to="appData.flowChart.link"
              target="_blank"
              rel="noreferrer"
              class="text-orange-400 underline flex items-center"
            >
              <IconTriangle class="rotate-0 mr-2" />
              {{
                locale === "zh-TW"
                  ? "Whimsical Flow Chart 連結"
                  : "Whimsical Flow Chart Link"
              }}
            </NuxtLink>
          </div>
          <NuxtImg
            :src="`/images/mbTool/${appData.flowChart.img}`"
            :alt="
              locale === 'zh-TW'
                ? appData.flowChart.title
                : appData.flowChart.enTitle
            "
            loading="lazy"
            format="webp"
            quality="30"
            densities="x1 x2"
            class="w-full md:order-first"
          />
        </div>
        <div class="text-xs text-center tracking-widest py-10">・・・</div>
        <!-- 框線圖 -->
        <div class="grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h2 class="text-2xl font-bold mb-1">
              {{
                locale === "zh-TW"
                  ? appData.wireframe.title
                  : appData.wireframe.enTitle
              }}
            </h2>
            <h3
              class="text-xl font-medium text-zinc-700 dark:text-zinc-300 mb-3"
            >
              {{
                locale === "zh-TW"
                  ? appData.wireframe.subTitle
                  : appData.wireframe.subEnTitle
              }}
            </h3>
            <p class="text-zinc-600 dark:text-zinc-400 mb-5">
              {{
                locale === "zh-TW"
                  ? appData.wireframe.description
                  : appData.wireframe.enDescription
              }}
            </p>
            <NuxtLink
              :to="appData.wireframe.link"
              target="_blank"
              rel="noreferrer"
              class="text-orange-400 underline flex items-center"
            >
              <IconTriangle class="rotate-0 mr-2" />
              {{
                locale === "zh-TW"
                  ? "Figma Wireframes 連結"
                  : "Figma Wireframes Link"
              }}
            </NuxtLink>
          </div>
          <NuxtImg
            :src="`/images/mbTool/${appData.wireframe.img}`"
            :alt="
              locale === 'zh-TW'
                ? appData.wireframe.title
                : appData.wireframe.enTitle
            "
            loading="lazy"
            format="webp"
            quality="30"
            densities="x1 x2"
            class="w-full"
          />
        </div>
        <div class="text-xs text-center tracking-widest py-10">・・・</div>
        <!-- 設計規範 -->
        <div class="text-center mb-20">
          <h2 class="text-2xl font-bold mb-5">
            {{ locale === "zh-TW" ? "設計規範" : "DESIGN GUIDELINE" }}
          </h2>
          <NuxtImg
            src="/images/mbTool/design-guideline.jpg"
            :alt="locale === 'zh-TW' ? '設計規範' : 'DESIGN GUIDELINE'"
            loading="lazy"
            format="webp"
            quality="30"
            densities="x1 x2"
            class="w-full rounded-2xl"
          />
        </div>
        <div class="text-xs text-center tracking-widest py-10">・・・</div>
        <!-- 介面設計 -->
        <div class="mb-20">
          <div class="grid lg:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 class="text-2xl font-bold mb-1">
                {{
                  locale === "zh-TW"
                    ? appData.uiDesign.title
                    : appData.uiDesign.enTitle
                }}
              </h2>
              <h3
                class="text-xl font-medium text-zinc-700 dark:text-zinc-300 mb-3"
              >
                {{
                  locale === "zh-TW"
                    ? appData.uiDesign.subTitle
                    : appData.uiDesign.subEnTitle
                }}
              </h3>
              <div class="text-zinc-600 dark:text-zinc-400 mb-5">
                <template v-if="locale === 'zh-TW'">
                  <p
                    v-for="item in appData.uiDesign.description"
                    :key="item"
                    class="mb-3"
                  >
                    {{ item }}
                  </p>
                </template>
                <template v-else>
                  <p
                    v-for="item in appData.uiDesign.enDescription"
                    :key="item"
                    class="mb-3"
                  >
                    {{ item }}
                  </p>
                </template>
              </div>
            </div>
            <div class="mockup-phone border-8 border-zinc-700 lg:order-first">
              <div class="ui-pic">
                <NuxtImg
                  :src="`/images/mbTool/${appData.uiDesign.img}`"
                  :alt="
                    locale === 'zh-TW'
                      ? appData.uiDesign.title
                      : appData.uiDesign.enTitle
                  "
                  loading="lazy"
                  format="webp"
                  quality="30"
                  densities="x1 x2"
                  class="w-full"
                />
              </div>
            </div>
          </div>
          <ul>
            <template v-if="locale === 'zh-TW'">
              <li
                v-for="(item, index) in appData.uiDesign.imgs"
                :key="`${item}_${index}`"
                class="mb-5"
              >
                <NuxtImg
                  :src="`/images/mbTool/${item}`"
                  :alt="`${appData.uiDesign.title} ${index + 1}`"
                  loading="lazy"
                  format="webp"
                  quality="30"
                  densities="x1 x2"
                  class="w-full rounded-2xl"
                />
              </li>
            </template>
            <template v-else>
              <li
                v-for="(item, index) in appData.uiDesign.enImgs"
                :key="`${item}_${index}`"
                class="mb-5"
              >
                <NuxtImg
                  :src="`/images/mbTool/${item}`"
                  :alt="`${appData.uiDesign.enTitle} ${index + 1}`"
                  loading="lazy"
                  format="webp"
                  quality="30"
                  densities="x1 x2"
                  class="w-full rounded-2xl"
                />
              </li>
            </template>
          </ul>
        </div>
        <div class="text-xs text-center tracking-widest py-10">・・・</div>
        <!-- 原型 -->
        <div class="mb-20">
          <div class="mb-20">
            <h2 class="text-2xl font-bold mb-1">
              {{
                locale === "zh-TW"
                  ? appData.prototype.title
                  : appData.prototype.enTitle
              }}
            </h2>
            <h3
              class="text-xl font-medium text-zinc-700 dark:text-zinc-300 mb-3"
            >
              {{
                locale === "zh-TW"
                  ? appData.prototype.subTitle
                  : appData.prototype.subEnTitle
              }}
            </h3>
          </div>
          <div
            v-for="item in appData.prototype.demo"
            :key="item.title"
            class="prototype_video"
          >
            <div class="grid lg:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h4 class="text-xl font-medium mb-1">
                  {{ locale === "zh-TW" ? item.title : item.enTitle }}
                </h4>
                <p class="text-zinc-600 dark:text-zinc-400">
                  {{
                    locale === "zh-TW" ? item.description : item.enDescription
                  }}
                </p>
              </div>
              <div class="mockup-phone border-8 border-zinc-700 lg:order-first">
                <figure class="ui-pic overflow-hidden">
                  <video
                    width="280"
                    controls
                    playsinline
                    preload="true"
                    :poster="item.img"
                  >
                    <source :src="item.videoUrl" type="video/mp4" />
                    <p>您的瀏覽器不支持播放該視頻！</p>
                  </video>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div class="text-xs text-center tracking-widest py-10">・・・</div>

        <div class="text-center py-5 mb-10">
          <NuxtLink
            to="/webDesign"
            class="sm:text-zinc-300 sm:hover:text-zinc-700 sm:dark:text-zinc-700 sm:dark:hover:text-zinc-300"
          >
            <p class="text-xl">
              {{ locale === "zh-TW" ? "點擊前往" : "Click here to proceed" }}
            </p>
            <span class="text-3xl font-bold underline">
              {{ $t("workWebTitle") }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.mockup-phone {
  position: relative;
  margin: auto;
  text-align: center;
  width: 100%;
  max-width: 296px;
  height: 620px;
  border-radius: 40px;
  overflow: hidden;
  &:before,
  &:after {
    position: absolute;
    content: "";
    border-radius: 1rem;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  &:before {
    width: 80px;
    height: 26px;
    background-color: #27272a;
    top: 6px;
    z-index: 1;
  }
  &:after {
    width: 12px;
    height: 12px;
    background-color: #3f3f46;
    top: 13px;
    margin-right: 39%;
    z-index: 2;
  }
}
.ui-pic {
  position: absolute;
  width: 100%;
  max-width: 290px;
  height: 100%;
  top: 0px;
  left: 0px;
  overflow: scroll;
  border-radius: 32px;
}

.prototype_video:nth-child(3) {
  .mockup-phone {
    order: 1;
  }
}
</style>
