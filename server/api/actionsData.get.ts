export default defineEventHandler(() => {
  const actionsData = [
    {
      id: 1,
      title: "來回機票活動主視覺",
      enTitle: "Round-trip flight ticket event main visual",
      description:
        "為獎勵辛苦的服務者，以及吸引更多優秀的服務提供者，訂出做滿服務天數及送來回機票活動。",
      enDescription:
        "To reward hardworking service providers and attract more excellent service providers, we have introduced a promotion where they can earn round-trip flight tickets by achieving a certain number of service days.",
      constructors: [
        "主視覺以地區意象作為基底，因亞洲區故將地點使用書法字體呈現做為視覺焦點。",
        "首爾的爾字改變為站在入口處歡迎的感覺。",
      ],
      enConstructors: [
        "The main visual is based on regional imagery, with a focus on Asian destinations presented in calligraphy font to create a visual centerpiece.",
      ],
      imgs: ["activate-1.jpg", "activate-2.jpg"],
      alts: ["韓國", "日本"],
      enAlts: ["Korea", "Japan"],
    },
    {
      id: 2,
      title: "購物金活動主視覺",
      enTitle: "Shopping Credit Event Main Visual",
      description:
        "為吸引用戶加入官方 Line 帳號，並和 Line Bot 互動，推出答題送購物金活動。",
      enDescription:
        "To attract users to join our official Line account and engage with our Line Bot, we are launching a quiz contest where participants can win shopping credits.",
      constructors: ["因推出 Line 機器人，主視覺使用 AI 的科技感。"],
      enConstructors: [
        "To highlight the introduction of our Line Bot, the main visual will feature a futuristic and tech-savvy design to emphasize the AI technology aspect.",
      ],
      imgs: ["money-1.jpg", "money-2.jpg"],
      alts: ["主視覺", "活動頁面"],
      enAlts: ["Main Visual", "Event Page"],
    },
    {
      id: 3,
      title: "泌乳業者合作主視覺",
      enTitle: "Collaboration Visual with Breastfeeding Industry",
      description: "宣捷幹細胞生技股份有限公司旗下的泌乳團隊，增加曝光及通路。",
      enDescription:
        "Exposure and Channel Expansion for Lactation Team under Meribank Co., Ltd.",
      constructors: [
        "基底使用女性風格，主視覺即呈現泌乳插畫。",
        "用小圖示方式描繪宣媽媽主要的六大泌乳期間服務。",
      ],
      enConstructors: [
        "The base design will have a feminine style, and the main visual will feature an illustration of breastfeeding.",
        "Illustrate the six main breastfeeding Meribank services of Mommy using small icons.",
      ],
      imgs: ["meri-1.jpg", "meri-2.jpg"],
      alts: ["主視覺", "宣導頁面"],
      enAlts: ["Main Visual", "Event Page"],
    },
  ];

  return { actionsData };
});
