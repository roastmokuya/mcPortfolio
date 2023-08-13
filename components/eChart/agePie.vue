<script setup lang="ts">
import VChart from "vue-echarts";

const { t } = useI18n();

// 文字顏色
const colorMode = useColorMode();
const textColor = ref("");
textColor.value = colorMode.preference === "light" ? "#3f3f46" : "#e4e4e7";

const option = ref({
  color: ["#B16EEC", "#7B7BE8", "#FFb619"],
  title: {
    text: t("userAge"),
    left: "center",
    textStyle: {
      fontSize: "16px",
      color: textColor.value,
    },
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "horizontal",
    bottom: "bottom",
    textStyle: {
      color: textColor.value,
    },
  },
  series: [
    {
      name: t("age"),
      type: "pie",
      radius: "50%",
      label: {
        color: textColor.value,
      },
      data: [
        { value: 38, name: t("25up") },
        { value: 42, name: t("36up") },
        { value: 20, name: t("56up") },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
});
</script>

<template>
  <div>
    <ClientOnly>
      <VChart class="chart w-full" :option="option" autoresize />
    </ClientOnly>
  </div>
</template>

<style type="scss" scoped>
.chart {
  height: 400px;
}
</style>
