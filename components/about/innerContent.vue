<script setup lang="ts">
interface IData {
  aboutData: IAboutData;
}
interface IAboutData {
  intro: Intro;
  can: ICan;
  soft: ISoft[];
}
interface Intro {
  name: string;
  enName: string;
  description: string;
  enDescription: string;
  experience: string;
  enExperience: string;
  svgCircle: ISvg[];
}
interface ISoft {
  title: string;
  enTitle: string;
  description: string;
  enDescription: string;
}
interface ICan {
  do: string[];
  enDo: string[];
}
interface ISvg {
  path: string;
  fill: string;
  depth: number;
}

const { locale } = useI18n();

const { data } = await useFetch<IData>("/api/aboutData");
const aboutData = data.value?.aboutData as IAboutData;
</script>

<template>
  <KinesisContainer :class="locale === 'zh-TW' ? 'font-noto' : 'font-poppins'">
    <div class="relative pt-24 max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row justify-between items-center">
        <div class="sm:flex justify-between items-end w-full lg:w-3/4">
          <div class="text-center sm:text-left sm:mb-40">
            <KinesisElement :strength="0">
              <template v-if="locale === 'zh-TW'">
                <h2 class="text-5xl xl:text-6xl font-bold tracking-wider mb-3">
                  {{ `我是${aboutData?.intro.name}` }}
                  <span class="hidden sm:inline">，</span>
                </h2>
              </template>
              <template v-else>
                <p class="text-2xl sm:text-3xl md:text-5xl font-bold">
                  Hi, I am
                </p>
                <h2 class="text-4xl md:text-6xl font-bold mb-5">
                  {{ `${aboutData?.intro.enName}.` }}
                </h2>
              </template>
            </KinesisElement>
            <KinesisElement :strength="0">
              <div>
                <h3
                  class="text-lg font-medium md:text-2xl text-zinc-600 dark:text-zinc-400"
                >
                  {{ $t("position") }}
                </h3>
                <p class="text-sm text-zinc-500">
                  {{
                    locale === "zh-TW"
                      ? aboutData?.intro.experience
                      : aboutData?.intro.enExperience
                  }}
                </p>
              </div>
            </KinesisElement>
          </div>
          <div
            class="relative max-w-xs mx-auto md:max-w-sm lg:max-w-md xl:max-w-xl"
          >
            <KinesisElement
              v-for="item in aboutData?.intro.svgCircle"
              :key="item"
              :strength="item.depth"
              class="absolute top-0 left-0 w-full z-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 705 950">
                <path :fill="item.fill" :d="item.path" />
              </svg>
            </KinesisElement>
            <KinesisElement :strength="5">
              <NuxtImg
                src="/images/about/me-big.png"
                :alt="
                  locale === 'zh-TW'
                    ? aboutData?.intro.name
                    : aboutData?.intro.name
                "
                loading="lazy"
                format="webp"
                quality="60"
                densities="x1 x2"
                preload
                class="relative bottom-0"
              />
            </KinesisElement>
          </div>
        </div>
        <KinesisElement
          :strength="0"
          class="text-lg text-zinc-500 dark:text-zinc-400 max-w-md sm:max-w-full lg:w-1/4 mt-4"
        >
          <template v-if="locale === 'zh-TW'">
            <blockquote class="tracking-widest leading-8 text-justify">
              <b class="text-4xl">&ldquo;</b>
              {{ aboutData?.intro.description }}
            </blockquote>
          </template>
          <template v-else>
            <blockquote class="lg:text-right">
              <b class="text-4xl">&ldquo;</b>
              {{ aboutData?.intro.enDescription }}
            </blockquote>
          </template>
        </KinesisElement>
      </div>
    </div>
  </KinesisContainer>
  <div
    class="max-w-md sm:max-w-full md:max-w-4xl mx-auto"
    :class="locale === 'zh-TW' ? 'font-noto' : 'font-poppins'"
  >
    <div class="grid sm:grid-cols-2 gap-4 my-10">
      <div
        v-for="item in aboutData?.soft"
        :key="item.title"
        class="flex flex-col items-center relative bg-zinc-100 dark:bg-zinc-800 rounded-xl p-8"
      >
        <span
          class="absolute w-8 h-8 border-orange-400 border-2 border-e-0 border-b-0 top-0 left-0 rounded-tl-xl"
        />
        <div>
          <h3 class="text-lg font-medium mb-1 md:mb-2">
            {{ locale === "zh-TW" ? item.title : item.enTitle }}
          </h3>
          <p class="text-sm text-zinc-600 dark:text-zinc-400">
            {{ locale === "zh-TW" ? item.description : item.enDescription }}
          </p>
        </div>
      </div>
    </div>
    <div class="mb-10">
      <h2 class="text-2xl font-bold mb-10">
        {{ locale === "zh-TW" ? "合作夥伴" : "Partner" }}
      </h2>
      <AboutPartner />
    </div>
    <AboutMyStory />
    <div class="mb-10">
      <h2 class="text-2xl font-bold mb-10">
        {{ locale === "zh-TW" ? "會使用" : "I Can Use" }}
      </h2>
      <AboutCanUseSkills />
    </div>
    <div class="mb-20">
      <h2 class="text-2xl font-bold mb-10">
        {{ locale === "zh-TW" ? "里程碑" : "Milestone" }}
      </h2>
      <AboutAwardSwiper />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
