import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

library.add(faGithubAlt);

// 在 Nuxt.config.ts 引入 fontAwesome 的 css
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
