<script setup lang="ts">
import fontawesomeClient from "plugins/fontawesome.client";

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

const props = defineProps<{
  isOpen: Boolean;
}>();

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
                <p class="text-3xl md:text-5xl font-bold">Hi, I am</p>
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
    <template v-if="locale === 'zh-TW'">
      <article
        class="max-w-full prose prose-base prose-zinc dark:prose-invert mb-10 text-justify"
      >
        <h2>我的故事</h2>
        <p>
          我是一位熱愛前端技術的網頁及 UI
          設計師。在過去的工作中，負責設計並切版製作出原型，專注於打造優雅且功能豐富的用戶界面，也為前公司帶來不少的價值。因疫情而失去了動力，所以離職後決定按下暫停鍵，讓自己長時間休息外，也想擴展舒適圈，充分利用這段時間學習了前端相關技術，諸如：Typescript、Vue
          3、Nuxt 3、Vite 等 CSR 和 SSR 前端框架，並能串接 Restful API。也接觸了
          TailwindCSS 3、Naive UI、Element Plus 等前端 UI 框架，並將其運用於
          Side Projects 中，以創造出美觀且易於使用的網站。期間參與過第 13 屆 IT
          邦幫忙鐵人賽自我挑戰組 －
          <NuxtLink
            to="https://ithelp.ithome.com.tw/users/20141250/ironman/4497"
            external
            target="_blank"
            rel="noreferrer"
            class="font-bold underline text-orange-500 hover:text-orange-400"
          >
            「初見 TailwindCSS 系列」
          </NuxtLink>
          ，完成鐵人鍊成。
        </p>
        <p>
          我的經歷和學習使我相信自己已準備好擔任前端工程師的職位。雖然有著看似不短的的空窗期，但這並不是讓我停滯不前的原因，而是激發我不斷地學習並成長的動力。我堅信，前端工程師不僅需要熟練的技術外，更需要不斷地追求創新和提升的精神。對於新職位，我渴望挑戰自己，並展現在這段期間所積累的技能。我的目標是在新職位上持續學習和成長，為團隊帶來價值並貢獻我的專業知識。相信我的創造力、細膩的設計思維和對技術的熱情，將成為團隊的寶貴資產。
        </p>
      </article>
    </template>
    <template v-else>
      <article
        class="max-w-full prose prose-base prose-zinc dark:prose-invert mb-10"
      >
        <h2>My Career Story</h2>
        <p>
          I am a web and UI designer with a passion for frontend development. In
          my previous roles, I have been responsible for designing and
          implementing prototypes, focusing on creating elegant and feature-rich
          user interfaces that brought substantial value to my former company.
          While the pandemic led to a loss of motivation and a temporary
          departure from the workforce, I made the decision to take a pause and
          utilize this time for self-improvement. During this period, I
          diligently acquired expertise in various front-end skills, including
          Typescript, Vue 3, Nuxt 3, Vite for both CSR and SSR frameworks and so
          on, enabling me to seamlessly integrate with Restful APIs. I also
          familiarized myself with frontend UI frameworks such as TailwindCSS 3,
          Naive UI, and Element Plus, applying them to Side Projects to create
          visually appealing and user-friendly websites. Moreover, I actively
          participated in the 13th IThelp Ironman Challenge's self-improvement
          category, successfully completing the
          <NuxtLink
            to="https://ithelp.ithome.com.tw/users/20141250/ironman/4497"
            external
            target="_blank"
            rel="noreferrer"
            class="font-bold tracking-wider underline text-orange-500 hover:text-orange-400"
          >
            "First time to see TailwindCSS".
          </NuxtLink>
        </p>
        <p>
          My experiences and continuous learning have instilled in me the
          confidence to take on the role of a frontend developer. Despite what
          may appear as a significant career break, it has not hindered my
          progress; instead, it has fueled my motivation to continually learn
          and evolve. I firmly believe that a frontend developer requires not
          only technical proficiency but also an unwavering commitment to
          innovation and enhancement. As I embrace new opportunities, I am eager
          to challenge myself and showcase the skills I have cultivated during
          this period. My aspiration is to continue learning and growing in my
          new role, contributing value to the team and sharing my expertise. I
          am convinced that my creativity, meticulous design thinking, and
          fervor for technology will serve as invaluable assets to any team.
        </p>
      </article>
    </template>
    <div class="mb-20">
      <h2 class="text-2xl font-bold mb-10">
        {{ locale === "zh-TW" ? "里程碑" : "Milestone" }}
      </h2>
      <AboutAwardSwiper v-if="props.isOpen" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
