export const useIndexSeo = () => {
  const { t } = useI18n();
  const indexSeo = ref({
    title: t("indexTitle"),
    description: t("indexDescription"),
    ogTitle: t("indexTitle"),
    ogDescription: t("indexDescription"),
    ogSiteName: t("indexTitle"),
  });

  return { indexSeo };
};
