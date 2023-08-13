<script setup lang="ts">
import VChart from "vue-echarts";

const { t } = useI18n();

// 文字顏色
const colorMode = useColorMode();
const textColor = ref("");
textColor.value = colorMode.preference === "light" ? "#3f3f46" : "#e4e4e7";

const option = ref({
  color: ["#69BAFF", "#FF7F97"],
  title: {
    text: t("userGender"),
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
      name: t("gender"),
      type: "pie",
      radius: "50%",
      label: {
        color: textColor.value,
      },
      data: [
        { value: 15, name: t("male") },
        { value: 85, name: t("female") },
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
