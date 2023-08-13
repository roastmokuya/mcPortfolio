<script setup lang="ts">
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

import { Pagination } from "swiper/modules";

interface IData {
  awards: Award[];
}
interface Award {
  id: string;
  largeURL: string;
  thumbnailURL: string;
  width: number;
  height: number;
  alt: string;
  enAlt: string;
}

const { locale } = useI18n();

const { data } = await useFetch<IData>("/api/awardsData");
const awards = data.value?.awards as Award[];

let lightbox = new PhotoSwipeLightbox({
  gallery: "#galleryID",
  children: "a",
  pswpModule: () => import("photoswipe"),
});

onMounted(() => {
  lightbox.init();
});
onUnmounted(() => {
  lightbox.destroy();
  lightbox = null;
});
</script>

<template>
  <Swiper
    :slidesPerView="'auto'"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 16,
        slidesPerGroup: 2,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 16,
        slidesPerGroup: 3,
      },
    }"
    :pagination="{
      type: 'fraction',
    }"
    :grabCursor="true"
    :modules="[Pagination]"
    class="swiper"
    id="galleryID"
  >
    <SwiperSlide v-for="item in awards" :key="item.id" class="pb-20">
      <NuxtLink
        :to="item.largeURL"
        :data-pswp-width="item.width"
        :data-pswp-height="item.height"
        target="_blank"
        rel="noreferrer"
        class="d-block mb-5 pb-5"
      >
        <NuxtImg
          :src="item.thumbnailURL"
          :alt="locale === 'zh-TW' ? item.alt : item.enAlt"
          loading="lazy"
          format="webp"
          quality="30"
          densities="x1 x2"
          class="rounded-2xl w-full"
        />
      </NuxtLink>
    </SwiperSlide>
    <SwiperControls />
  </Swiper>
</template>

<style lang="scss">
.swiper-wrapper {
  align-items: center;
}
</style>
