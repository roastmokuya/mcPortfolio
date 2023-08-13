import { defineStore } from "pinia";

export const useIsFixedStore = defineStore("isFixedStore", () => {
  const isFixed = ref(false);

  const fixedFn = () => {
    isFixed.value = !isFixed.value;
  };

  return { isFixed, fixedFn };
});
