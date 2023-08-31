<script setup lang="ts">
const { locale } = useI18n();

interface IData {
  partners: IPartner[];
}

interface IPartner {
  id: number;
  title: string;
  enTitle: string;
  logo: string;
}

const { data } = await useFetch<IData>("/api/partnerData");
const partners = data.value?.partners as IPartner[];
</script>

<template>
  <div
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
  >
    <NuxtImg
      v-for="item in partners"
      :key="item.id"
      :src="item.logo"
      :alt="locale === 'zh-TW' ? item.title : item.enTitle"
      loading="lazy"
      format="webp"
      quality="60"
      densities="x1 x2"
    />
  </div>
</template>

<style lang="scss" scoped></style>
