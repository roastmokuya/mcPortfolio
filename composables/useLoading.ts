export const useLoading = () => {
  const isLoading = ref(true);

  setTimeout(() => {
    isLoading.value = false;
  }, 500);

  return { isLoading };
};
