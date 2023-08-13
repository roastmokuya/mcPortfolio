import { use } from "echarts/core";

import { CanvasRenderer } from "echarts/renderers";
import { LabelLayout } from "echarts/features";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";

export default defineNuxtPlugin(() => {
  use([
    CanvasRenderer,
    LabelLayout,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  ]);
});
