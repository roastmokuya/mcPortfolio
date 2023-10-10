<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <div>
    <article
      class="max-w-full prose prose-base prose-zinc dark:prose-invert leading-loose mb-10"
      :class="locale === 'zh-TW' ? 'text-justify' : 'text-left'"
    >
      <div class="flex items-center">
        <h2>{{ locale === "zh-TW" ? "我的故事" : "My Career Story" }}</h2>
        <NuxtImg
          src="/images/about/it-help-2021.png"
          alt="locale === 'zh-TW' ? '鐵人練成' : 'Iron man Challenge'"
          loading="lazy"
          format="webp"
          quality="60"
          densities="x1 x2"
          class="w-16 h-auto ml-2 my-0"
        />
        <NuxtImg
          src="/images/about/it-help-2023.png"
          alt="locale === 'zh-TW' ? '鐵人練成' : 'Iron man Challenge'"
          loading="lazy"
          format="webp"
          quality="60"
          densities="x1 x2"
          class="w-16 h-auto ml-2 my-0"
        />
      </div>
      <template v-if="locale === 'zh-TW'">
        <p>
          我是一位熱愛前端技術的網頁及 UI
          設計師。在過去的工作中，負責設計並切版製作出原型，專注於打造優雅且功能豐富的用戶界面，也為前公司帶來不少的價值。因疫情而失去了動力，所以離職後決定按下暫停鍵，讓自己長時間休息外，也想擴展舒適圈，充分利用這段時間學習了前端相關技術，諸如：Typescript、Vue
          3、Nuxt 3、Vite 等 CSR 和 SSR 前端框架，並能串接 Restful API。也接觸了
          TailwindCSS 3、Naive UI、Element Plus 等前端 UI 框架，並將其運用於
          Side Projects 中，以創造出美觀且易於使用的網站。期間參與了 2 屆的 IT
          邦幫忙鐵人賽 －
          <NuxtLink
            to="https://ithelp.ithome.com.tw/users/20141250/ironman/4497"
            external
            target="_blank"
            rel="noreferrer"
            class="font-bold underline text-orange-500 hover:text-orange-400"
          >
            <strong>「初見 TailwindCSS 系列」</strong>
          </NuxtLink>
          、
          <NuxtLink
            to="https://ithelp.ithome.com.tw/users/20141250/ironman/6550"
            external
            target="_blank"
            rel="noreferrer"
            class="font-bold underline text-orange-500 hover:text-orange-400"
          >
            <strong>「用不到 30 天學會基本 TypeScript 系列」</strong>
          </NuxtLink>
          ，皆完成鐵人鍊成。
        </p>
        <p>
          我的經歷和學習使我相信自己已準備好擔任前端工程師的職位。雖然有著看似不短的的空窗期，但這並不是讓我停滯不前的原因，而是激發我不斷地學習並成長的動力。我堅信，前端工程師不僅需要熟練的技術外，更需要不斷地追求創新和提升的精神。對於新職位，我渴望挑戰自己，並展現在這段期間所積累的技能。我的目標是在新職位上持續學習和成長，為團隊帶來價值並貢獻我的專業知識。相信我的創造力、細膩的設計思維和對技術的熱情，將成為團隊的寶貴資產。
        </p>
      </template>
      <template v-else>
        <p>
          I am a web and UI designer with a strong passion for frontend
          development. In my previous roles, I was responsible for designing and
          prototyping user interfaces, with a focus on creating elegant and
          feature-rich experiences. I contributed significantly to my former
          company's success through my design work.<br /><br />

          Due to the impact of the COVID-19, I lost motivation and decided to
          take a break from my career. During this time, I not only rested but
          also expanded my skillset. I dedicated considerable time to learning
          various frontend development, including TypeScript, Vue 3, Nuxt 3,
          Vite, and both client-side rendering (CSR) and server-side rendering
          (SSR) frontend frameworks. I also gained proficiency in integrating
          with RESTful APIs. Additionally, I explored frontend UI frameworks
          such as TailwindCSS 3, Naive UI, and Element Plus, applying them to
          side projects to create visually appealing and user-friendly
          websites.<br /><br />

          During this period, I participated in two editions of the IT-help
          Ironman Contest with the following series:
          <NuxtLink
            to="https://ithelp.ithome.com.tw/users/20141250/ironman/4497"
            external
            target="_blank"
            rel="noreferrer"
            class="font-bold tracking-wider underline text-orange-500 hover:text-orange-400"
          >
            <strong>"First Time to See TailwindCSS"</strong>
          </NuxtLink>
          and
          <NuxtLink
            to="https://ithelp.ithome.com.tw/users/20141250/ironman/6550"
            external
            target="_blank"
            rel="noreferrer"
            class="font-bold tracking-wider underline text-orange-500 hover:text-orange-400"
          >
            <strong>"Mastering Basic TypeScript in Under 30 Days"</strong>
          </NuxtLink>
          , successfully completing both challenges.
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
      </template>
    </article>
  </div>
</template>

<style lang="scss" scoped></style>
