export const useIsOpen = () => {
  const isOpen = ref(false);

  const openFn = () => {
    isOpen.value = !isOpen.value;
  };

  return { isOpen, openFn };
};
