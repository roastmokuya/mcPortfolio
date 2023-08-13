<script setup lang="ts">
const { locale } = useI18n();

// const { VITE_APP_API } = import.meta.env;
// const { data } = await useFetch<IProject[]>(`${VITE_APP_API}/personals`);

// 定義 res.data
interface IData {
  sideProjects: IProject[] | null;
  workProjects: IProject[] | null;
}
// 定義 res.data.sideProjects 和 res.data.workProjects
interface IProject {
  id: string;
  title: string;
  enTitle: string;
  description: string;
  enDescription: string;
  url: string;
  github?: string;
  img: string;
  year: string;
  skills: string[];
}

const sideProjects = ref<IProject[] | null>([]);
const workProjects = ref<IProject[] | null>([]);
onMounted(() => {
  // 一定要使用 nextTick，不然重整後 res.data 會是 null
  nextTick(async () => {
    // 使用 Promise all 確保全部取得資料後再執行
    const [{ data: side }, { data: work }] = await Promise.all([
      useFetch<Partial<IData>>(`./api/sideProjects`),
      useFetch<Partial<IData>>(`./api/workProjects`),
    ]);
    sideProjects.value = side.value?.sideProjects as IProject[];
    workProjects.value = work.value?.workProjects as IProject[];
  });
});
</script>

<template>
  <div
    class="flex flex-col justify-center items-center min-h-screen mx-auto max-w-sm md:max-w-2xl"
    :class="[locale === 'zh-TW' ? 'font-noto' : 'font-poppins']"
  >
    <!-- Side projects -->
    <section class="my-8">
      <div class="text-center my-5">
        <h2 class="text-3xl font-bold mb-3">
          {{ $t("projectItem") }}
        </h2>
      </div>
      <ul class="flex flex-col">
        <li v-for="item in sideProjects" :key="item.id" class="mb-4">
          <div
            class="project block md:flex bg-white border border-zinc-400 dark:bg-zinc-900 rounded-2xl overflow-hidden"
          >
            <div class="md:w-72 md:border-r border-zinc-400 overflow-hidden">
              <NuxtLink :to="item.url" target="_blank" rel="noreferrer">
                <NuxtImg
                  :src="item.img"
                  :alt="locale === 'zh-TW' ? item.title : item.enTitle"
                  loading="lazy"
                  format="webp"
                  quality="100"
                  densities="x1 x2"
                  class="w-full h-full object-cover transition-transform duration-500"
                />
              </NuxtLink>
            </div>
            <div class="flex-1">
              <div class="p-4">
                <h3 class="text-xl font-bold mb-2">
                  {{ locale === "zh-TW" ? item.title : item.enTitle }}
                </h3>
                <ul class="flex flex-wrap">
                  <li v-for="skill in item.skills" :key="skill" class="mb-2">
                    <span
                      class="bg-zinc-100 text-zinc-800 text-xs font-poppins font-medium mr-2 px-2.5 py-1 rounded dark:bg-zinc-800 dark:text-zinc-400 whitespace-nowrap"
                    >
                      {{ skill }}
                    </span>
                  </li>
                </ul>
                <p class="text-sm text-zinc-700 dark:text-zinc-300 mt-4">
                  {{
                    locale === "zh-TW" ? item.description : item.enDescription
                  }}
                </p>
              </div>
              <div
                class="flex justify-between items-center text-center border-t border-zinc-400"
              >
                <NuxtLink
                  :to="item.github"
                  external
                  target="_blank"
                  rel="noreferrer"
                  class="border-r border-zinc-400 flex-1 py-3 text-zinc-600 hover:text-white dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-500 transition-colors"
                  :aria-abel="[
                    locale === 'zh-TW' ? '連結到 Github' : 'Link to Github',
                  ]"
                >
                  <font-awesome-icon icon="fa-brands fa-github-alt" size="lg" />
                  <span class="font-medium font-poppins ml-1"> GitHub </span>
                </NuxtLink>
                <NuxtLink
                  :to="item.url"
                  external
                  target="_blank"
                  rel="noreferrer"
                  class="flex-1 font-medium py-3 text-zinc-600 hover:text-white dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-500 transition-colors inline-flex justify-center items-center"
                  :aria-abel="[
                    locale === 'zh-TW' ? '連結到網站' : 'Link to Website',
                  ]"
                >
                  <span class="font-medium mr-1">
                    {{ $t("demo") }}
                  </span>
                  <IconLinkOut />
                </NuxtLink>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <!-- Work Projects -->
    <section class="my-8">
      <div class="text-center my-5">
        <h2 class="text-3xl font-bold mb-3">
          {{ $t("workItem") }}
        </h2>
        <p class="text-zinc-500 dark:text-zinc-400">
          {{ $t("workNotice") }}
        </p>
      </div>
      <ul class="flex flex-col">
        <li v-for="item in workProjects" :key="item.id" class="mb-4">
          <div
            class="project block md:flex bg-white border border-zinc-400 dark:bg-zinc-900 rounded-2xl overflow-hidden"
          >
            <div class="md:w-72 md:border-r border-zinc-400 overflow-hidden">
              <NuxtLink :to="item.url">
                <NuxtImg
                  :src="item.img"
                  :alt="locale === 'zh-TW' ? item.title : item.enTitle"
                  loading="lazy"
                  format="webp"
                  quality="100"
                  densities="x1 x2"
                  class="w-full h-full object-cover transition-transform duration-500"
                  style="object-position: 78% 50%"
                />
              </NuxtLink>
            </div>
            <div class="flex-1">
              <div class="p-4">
                <h3 class="text-xl font-bold mb-2">
                  {{ locale === "zh-TW" ? item.title : item.enTitle }}
                </h3>
                <ul class="flex flex-wrap">
                  <li v-for="skill in item.skills" :key="skill" class="mb-2">
                    <span
                      class="bg-zinc-100 text-zinc-800 text-xs font-poppins font-medium mr-2 px-2.5 py-1 rounded dark:bg-zinc-800 dark:text-zinc-400 whitespace-nowrap"
                    >
                      {{ skill }}
                    </span>
                  </li>
                </ul>
                <p class="text-sm text-zinc-700 dark:text-zinc-300 mt-4">
                  {{
                    locale === "zh-TW" ? item.description : item.enDescription
                  }}
                </p>
              </div>
              <div
                class="flex justify-between items-center text-center border-t border-zinc-400"
              >
                <NuxtLink
                  :to="item.url"
                  class="flex-1 font-medium py-3 text-zinc-600 hover:text-white dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-500 transition-colors inline-flex justify-center items-center"
                  :aria-abel="[
                    locale === 'zh-TW' ? '查看詳情' : 'Watch detail',
                  ]"
                >
                  <span class="font-medium mr-1">
                    {{ $t("entry") }}
                  </span>
                  <IconRight />
                </NuxtLink>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.project {
  &:hover {
    img {
      transform: scale(1.3);
    }
  }
}
</style>
