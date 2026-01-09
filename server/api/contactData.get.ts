export default defineEventHandler(() => {
  const config = useRuntimeConfig();
  const contactData = {
    tel: config.apiTel,
    email: config.apiEmail,
  };

  return { contactData };
});
