<script setup lang="ts">
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const colorMode = useColorMode();
const { locale, t } = useI18n();
const resume = ref("");

watchEffect(() => {
  colorMode.value;
  resume.value =
    locale.value === "zh-TW" ? "mengche-resume-tw" : "mengche-resume-en";
});

// const { NUXT_APP_BASEURL, NUXT_RESUME_PASSWORD, NUXT_RESUME_TOKEN } =
//   import.meta.env;

const config = useRuntimeConfig();
// console.log(import.meta.env.MODE);
// console.log(import.meta.env.PROD);
console.log(config.public.baseUrl);
console.log(config.public);

const openPasswordFn = (): void => {
  if (!sessionStorage.getItem("token")) {
    Swal.fire({
      title: t("password"),
      input: "password",
      inputPlaceholder: t("password"),
      inputAttributes: {
        autocapitalize: "off",
        autocorrect: "off",
      },
      customClass: {
        popup: "poppins",
      },
      color: colorMode.value === "dark" ? "#fff" : "#545454",
      background: colorMode.value === "dark" ? "#212529" : "#fff",
      reverseButtons: true,
      showCancelButton: true,
      confirmButtonColor: "#f59e0b",
      cancelButtonColor: "transparent",
      confirmButtonText: t("confirm"),
      cancelButtonText: t("cancel"),
      showLoaderOnConfirm: true,
      preConfirm: (password) => {
        if (password !== config.public.resumePass) {
          Swal.showValidationMessage(t("passwordError"));
        } else {
          sessionStorage.setItem("token", config.public.resumeToken);
          openPDFHandler();
        }
      },
    });
  } else {
    openPDFHandler();
  }
};

const openPDFHandler = (): void => {
  navigateTo(`/resume/${resume.value}.pdf`, {
    open: {
      target: "_blank",
    },
  });
};
</script>

<template>
  <div
    class="fixed right-6 bottom-6 z-10"
    :class="[locale === 'zh-TW' ? 'font-noto' : 'font-poppins']"
  >
    <div class="absolute z-10 ml-1 mt-1">
      <div
        class="w-[72px] h-[72px] md:w-20 md:h-20 sm:hover:bg-zinc-900 sm:hover:text-white sm:hover:dark:bg-yellow-400 sm:hover:dark:text-zinc-900 duration-300 rounded-full flex flex-col justify-center items-center cursor-pointer"
        rel="noreferrer"
        :aria-label="
          locale === 'zh-TW' ? '點擊顯示履歷表' : 'Click to watch my resume'
        "
        @click.stop="openPasswordFn()"
      >
        <IconDocument />
        <p class="font-bold text-sm sm:text-base">
          {{ $t("resume") }}
        </p>
      </div>
    </div>
    <div
      class="w-20 h-20 md:w-[88px] md:h-[88px] text-xs font-medium rotate-180 spin-slow"
      :class="[
        locale === 'zh-TW' ? 'tracking-[0.55rem]' : 'tracking-[0.21rem]',
      ]"
    >
      <svg viewBox="0 0 100 100" class="overflow-visible">
        <path fill="none" d="M 0 50 a 50 50 0 1 1 0 1 z" id="circle" />
        <text class="fill-zinc-400">
          <textPath xlink:href="#circle">{{ $t("arcText") }}</textPath>
        </text>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.spin-slow {
  transform-origin: center;
  animation: spin 20s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>

<style>
:root {
  --yellow-dark: #f59e0b;
  --red: #f93232;
}
.swal2-title {
  font-size: 1.6rem;
}
.swal2-input {
  &:focus {
    border: 1px solid var(--yellow-dark);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06),
      0 0 0 2px rgba(250, 204, 21, 0.3);
  }
  &.swal2-inputerror {
    border-color: var(--red) !important;
  }
}
.swal2-confirm,
.swal2-cancel {
  &:focus {
    box-shadow: none !important;
  }
}
.swal2-cancel {
  color: #777 !important;
}
.swal2-validation-message {
  background: transparent;
  color: var(--red);
  font-weight: 500;
  &::before {
    background: var(--red);
  }
}
.swal2-popup {
  font-family: "Poppins", "'Noto Sans TC'", sans-serif;
}
</style>
