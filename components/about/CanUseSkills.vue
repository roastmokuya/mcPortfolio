<script setup lang="ts">
const { locale } = useI18n();

interface IData {
  skillsData: ISkill[];
}

interface ISkill {
  id: number;
  title: string;
  logo: string;
}

const { data } = await useFetch<IData>("/api/skillsData");
const skillsData = data.value?.skillsData as ISkill[];
</script>

<template>
  <div
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-1 sm:gap-4"
  >
    <div
      v-for="item in skillsData"
      class="flex justify-start items-center py-4"
    >
      <NuxtImg
        :key="item.id"
        :src="item.logo"
        :alt="item.title"
        loading="lazy"
        format="webp"
        quality="60"
        densities="x1 x2"
        class="w-8 h-8 sm:w-10 sm:h-10"
      />
      <h5 class="font-medium font-poppins text-sm sm:text-base ml-2">
        {{ item.title }}
      </h5>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
