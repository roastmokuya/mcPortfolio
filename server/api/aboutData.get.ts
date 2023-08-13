export default defineEventHandler(() => {
  const aboutData = {
    intro: {
      name: "孟哲",
      enName: "Meng Che",
      description:
        "一心一意且頗具競爭力，心思細膩、認真、負責是我對工作的態度。能團隊合作亦能獨立開發，並時刻要求自己要不斷地學習，目前正在強化自身的前端技能，拓展舒適圈，渴望能在設計和程式上不斷地成長進步 ，並隨時能和公司策略目標保持一致。",
      enDescription:
        "Dedicated and highly competitive, I approach work with attentiveness, diligence, and a strong sense of responsibility. I am adept at both team collaboration and independent development, and I continuously strive to learn and improve. Currently, I am focusing on enhancing my frontend skills and expanding my comfort zone. I have a strong desire to grow and progress in both design and programming and align myself with the strategic goals of the company.",
      experience: "3 年以上前端設計的工作經驗",
      enExperience: "3+ years of experience working in startup.",
      svgCircle: [
        {
          path: `M256.2,492.9L256.2,492.9c-126,0-228.1-102.1-228.1-228.1v0c0-126,102.1-228.1,228.1-228.1h0
          c126,0,228.1,102.1,228.1,228.1v0C484.4,390.7,382.2,492.9,256.2,492.9z`,
          fill: "#EE7521",
          depth: 20,
        },
        {
          path: `M171.6,915L171.6,915c-93,0-168.4-75.4-168.4-168.4v0c0-93,75.4-168.4,168.4-168.4h0
          c93,0,168.4,75.4,168.4,168.4v0C340,839.6,264.6,915,171.6,915z`,
          fill: "#ACB4BB",
          depth: 40,
        },
        {
          path: `M475.9,708.1L475.9,708.1c-102.8,0-186.1-83.3-186.1-186.1v0c0-102.8,83.3-186.1,186.1-186.1h0
          C578.7,335.9,662,419.2,662,522v0C662,624.7,578.7,708.1,475.9,708.1z`,
          fill: "#373838",
          depth: 80,
        },
      ],
    },
    can: {
      do: [
        "品牌識別",
        "UI 設計",
        "視覺設計",
        "設計系統",
        "原型製作",
        "網頁設計",
        "網頁開發",
        "響應式網頁",
        "自適應式網頁",
      ],
      enDo: [
        "Brand Identity",
        "User Interface Design",
        "Visual Design",
        "Design Systems",
        "Prototype",
        "Web Design",
        "Web Development",
        "RWD",
        "AWD",
      ],
    },
    soft: [
      {
        title: "團隊合作",
        enTitle: "Team Work",
        description:
          "在團隊中尊重他人意見，以中立的角度討論事情，共同創造價值，一起達成目標。",
        enDescription:
          "Respecting others' opinions within the team, discussing matters from a neutral perspective, and collaboratively creating value are essential for achieving our goals together.",
      },
      {
        title: "跨部門溝通",
        enTitle: "Cross-departmental Communication",
        description:
          "因自身懂設計也可寫前端程式，所以能更加有效地和跨部門相關領域人員溝通。",
        enDescription:
          "Due to my background in both design and front-end programming, I am able to communicate effectively with cross-departmental teams in related fields.",
      },
      {
        title: "解決問題",
        enTitle: "Solving Problems",
        description:
          "在過去新創團隊的成長下，能更加快速地發現問題，並和團隊溝通執行解決方案。",
        enDescription:
          " Due to the growth of the startup team in the past, I have developed the ability to quickly identify issues and effectively communicate and execute solutions with the team.",
      },
      {
        title: "持續學習",
        enTitle: "Continuous Learning",
        description:
          "在設計和前端不斷地快速演變下，依舊持續的精進自身能力，提醒自己不進則退。",
        enDescription:
          "Amidst the rapid evolution of design and front-end development, I persistently refine my skills, reminding myself that standing still is akin to moving backward.",
      },
    ],
  };

  return { aboutData };
});
