export default defineEventHandler(() => {
  const sideProjects = [
    {
      id: "1",
      title: "Bottigaemo",
      enTitle: "Bottigaemo",
      description:
        "使用 TailwindCSS 3 + Vite + Vue 3 Composition API + GSAP，並結合諸多效果，串接 RESTful API 製作而成的精品電商網站。",
      enDescription:
        "Exquisite E-commerce Website created using TailwindCSS 3 + Vite + Vue 3 Composition API + GSAP, and incorporating various effects, while also integrating with RESTful API.",
      url: "https://letcla0624.github.io/bottigaemo",
      github: "https://github.com/letcla0624/bottigaemo",
      img: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679572039730.jpg",
      year: "2023",
      skills: [
        "TailwindCSS 3",
        "i18n",
        "GSAP 3",
        "Pinia",
        "Vue 3 - Composition API",
        "Vite",
        "VeeValidate",
        "Vue Meta",
        "Vue I18n",
        "LottieFiles",
        "RWD",
      ],
    },
    {
      id: "2",
      title: "江戸前壽司",
      enTitle: "Edomae Zushi",
      description:
        "使用 Bootstrap 5 + Vue CLI + Vue 3 Options API，製作精緻中帶點可愛的壽司網站，並串接 RESTful API 來建構後台 CRUD 頁面。",
      enDescription:
        "Create an exquisite and slightly adorable sushi website using Bootstrap 5 + Vue CLI + Vue 3 Options API, and integrate RESTful API to build backend CRUD pages.",
      url: "https://letcla0624.github.io/edomaeZushi",
      github: "https://github.com/letcla0624/edomaeZushi",
      img: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla/1658061691919.jpg",
      year: "2022",
      skills: [
        "SCSS",
        "Bootstrap 5",
        "Vue 3 - Options API",
        "Vue CLI",
        "VeeValidate",
        "Vue Loading Overlay",
        "Mitt",
        "Leaflet",
        "RWD",
      ],
    },
    // {
    //   id: "3",
    //   title: "finedus 內容管理系統",
    //   enTitle: "finedus CMS",
    //   description:
    //     "使用 Element plus + Vite + Vue 3 Composition API + TypeScript，並串接 Mock API (Mock Data) 來建構後台 CRUD 頁面。",
    //   enDescription:
    //     "Constructed finedus Content Management System using Element plus + Vite + Vue 3 Composition API + TypeScript, and integrate them with a Mock API (Mock Data).",
    //   url: "https://letcla0624.github.io/finedus",
    //   github: "https://github.com/letcla0624/finedus",
    //   img: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1691325311693.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MDpBnz7HXaX9SjV6ttvp8zguyRrYj5%2F6x5q0kQLXJwIptOD%2BzGH1ULyNIlIdXj9f0%2BE3kMjdyo3w95xQNvKTsXzaz7ir9aBA4eDbzoDpdkWlZfsb%2FoLcnSTkZb3iqNhr1Iz5i0SdsUuoAbS%2Bj5%2Fr2I9kp5bRpM%2B1W%2F4%2FYZSLF7%2FoDFqqMT962nr3tGsOZCX3WrCHPbhNbCII9y3x9ltcK7mZo8F34Vaunx9kAp7vaY%2BxZhCbFLW4GlheXR%2Ft7pV1RRFtxswIB%2FEmE3xmaappN25u%2FlEhnyBs4rbVyR3jCBWtS9TdWLd5zyrTTPyCA9PUvIxMSi1i2J%2BJ2EMVInTfgg%3D%3D",
    //   year: "2023",
    //   skills: [
    //     "SCSS",
    //     "Element⁺",
    //     "Vue 3 - Composition API",
    //     "Vite",
    //     "Pinia",
    //     "TypeScript",
    //     "Vue Chart",
    //     "WangEditor 5",
    //   ],
    // },
  ];

  return { sideProjects };
});
