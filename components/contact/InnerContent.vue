<script setup lang="ts">
import { title } from "process";

// 定義資料
interface IData {
  contactData: IContactData;
}
// 定義取得的內容
interface IContactData {
  tel: string;
  email: string;
}
interface ISetContactData {
  val: string;
  link: string;
  title: string;
  enTitle: string;
  showText: any;
  path: string;
}

const { data } = await useFetch<IData>("/api/contactData");
const { tel, email } = data.value?.contactData as IContactData;

const { locale, t } = useI18n();
const showTelText = ref(t("showTel"));
const showEmailText = ref(t("showEmail"));

const isShowTel = ref(false);
const isShowEmail = ref(false);

// showText 加入 .value 會導致 ref 無法正確渲染
const contactData: ISetContactData[] = [
  {
    val: "tel",
    link: `tel:${tel}`,
    title: "撥打手機",
    enTitle: "Call Me",
    showText: showTelText,
    path: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
  },
  {
    val: "email",
    link: `mailto:${email}`,
    title: "寄信給我",
    enTitle: "Sending Email",
    showText: showEmailText,
    path: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  },
];

// 不監聽 i18n 不起作用，更改語系無法渲染到畫面
watch(locale, () => {
  const textAry = [t("showTel"), t("showEmail")];
  contactData.forEach((item: ISetContactData, index: number) => {
    item.showText.value = textAry[index];
  });
});

// 更改顯示的文字
const showValFn = (val: string) => {
  if (val === "tel") {
    isShowTel.value = !isShowTel.value;
    showTelText.value = isShowTel.value ? t("hideTel") : t("showTel");
    // 信箱隱藏
    isShowEmail.value = false;
    showEmailText.value = t("showEmail");
  } else if (val === "email") {
    isShowEmail.value = !isShowEmail.value;
    showEmailText.value = isShowEmail.value ? t("hideEmail") : t("showEmail");
    // 手機號碼隱藏
    isShowTel.value = false;
    showTelText.value = t("showTel");
  }
};
</script>

<template>
  <div
    class="flex flex-col justify-center items-center min-h-screen mx-auto max-w-sm md:max-w-2xl"
    :class="[locale === 'zh-TW' ? 'font-noto' : 'font-poppins']"
  >
    <div class="mb-4">
      <div
        class="w-full max-w-sm p-4 bg-zinc-50 dark:bg-zinc-600 border border-zinc-400 rounded-2xl sm:p-6"
      >
        <h5
          class="mb-3 text-base font-semibold text-zinc-900 md:text-xl dark:text-white"
        >
          {{ $t("contactTitle") }}
        </h5>
        <p class="text-sm font-normal text-zinc-500 dark:text-zinc-300">
          {{ $t("contactNotice") }}
        </p>
        <ul class="mt-4 space-y-3">
          <li v-for="item in contactData" :key="item.val">
            <div class="flex justify-between btn group">
              <NuxtLink
                :to="item.link"
                external
                class="flex items-center flex-1 p-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-6 h-6"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    :d="item.path"
                  />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">
                  {{ locale === "zh-TW" ? item.title : item.enTitle }}
                </span>
              </NuxtLink>
              <span class="innerBtn" @click.stop="showValFn(item.val)">
                {{ item.showText.value }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <VueWriter
      v-if="isShowTel"
      :array="[tel]"
      :iterations="1"
      :typeSpeed="70"
      :caret="'cursor'"
      class="text-xl font-medium tracking-wider font-poppins"
    />
    <VueWriter
      v-if="isShowEmail"
      :array="[email]"
      :iterations="1"
      :typeSpeed="70"
      :caret="'cursor'"
      class="text-xl font-medium tracking-wider font-poppins"
    />
  </div>
</template>

<style lang="scss" scoped>
:deep(.is-typed span.cursor) {
  display: inline-block;
  width: 2px;
  margin-left: 1px;
  background-color: #64748b;
  animation: blink 1s infinite;
}

@keyframes blink {
  49% {
    background-color: #64748b;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
