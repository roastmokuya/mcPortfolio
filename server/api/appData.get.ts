export default defineEventHandler(() => {
  const appData = {
    intro: {
      description: [
        "本項目旨在開發一款母嬰工具App，提供全面的數據記錄功能，供父母紀錄寶寶的成長和生活習慣。該App將包括各方面寶寶日常生活的記錄，如餵食、睡眠、更換尿布和里程碑。同時，它還將提供數據分析，以圖表形式展示，幫助父母有效監測寶寶的健康和發展狀況。",
        "除了數據記錄和分析功能外，App還將整合電子商務平台，根據記錄的信息推薦相關產品。當父母需要特定的寶寶用品時，他們可以通過App方便地查找和直接購買。",
      ],
      enDescription: [
        "The project aims to develop a maternal and infant tools app that serves as a comprehensive data recording tool for parents to track their baby's growth and habits. The app will include features to record various aspects of the baby's daily life, such as feeding, sleeping, diaper changes, and milestones. It will also provide data analysis in the form of charts, enabling parents to monitor the baby's health and development effectively.",
        "In addition to the data recording and analysis functionalities, the app will integrate an e-commerce platform to recommend relevant products based on the recorded information. When parents need specific baby products, they can conveniently access and purchase them directly through the app.",
      ],
    },
    goal: {
      title: "1. 目標",
      enTitle: "1. GOAL",
      description:
        "因應月嫂反應，媽媽們都有各自好幾個的紀錄寶寶的軟體，每次去新服務就要學習使用新 app，希望公司能開發一套母嬰工具 app，能讓她們方便使用，並在當月嫂結束工作後，媽媽們還是會持續使用。",
      enDescription:
        "In response to the feedback from maternity nannies, mothers have multiple baby tracking apps, and each time they use a new service, they need to learn how to use a new app. They hope that the company can develop a maternal and infant tools app that is easy for them to use. Additionally, they would like the app to continue being useful even after the maternity nanny's service ends, so that mothers can continue using it.",
      objective: [
        {
          title: "簡單",
          enTitle: "Simple",
          description: "做一個方便紀錄的數據的工具，並推銷商品。",
          enDescription:
            "Create a user-friendly data recording tool and promote related products.",
          color: "#B16EEC",
        },
        {
          title: "實用",
          enTitle: "Practical",
          description: "將寶寶大部分需紀錄的項目囊括在裡面。",
          enDescription:
            "nclude most of the items that need to be recorded for the baby inside the tool.",
          color: "#fb923c",
        },
        {
          title: "精準",
          enTitle: "Accurate",
          description: "備註、數據分析圖表化，以利就醫時診斷。",
          enDescription:
            "Incorporate notes and visualize data analysis through charts to facilitate medical diagnosis during medical appointments.",
          color: "#ff8a98",
        },
      ],
    },
    coreFunction: {
      title: "2. 核心功能",
      enTitle: "2. CORE FUNCTIONS",
      description: "",
      enDescription: "",
      objective: [
        {
          title: "詳細備註",
          enTitle: "Detailed notation",
          description:
            "在感覺寶寶狀況改變時，能詳細備註吃、喝或哪些生活習慣改變，以利後續問題診斷。",
          enDescription:
            "In the event of any changes in the baby's condition, detailed notes are recorded regarding their eating, drinking, or any alterations in daily habits to facilitate subsequent issue diagnosis.",
        },
        {
          title: "數據分析",
          enTitle: "Data analysis",
          description:
            "透過每天的紀錄，能精準將寶寶習慣顯示於圖表，快速知道寶寶身體狀況是否產生問題。",
          enDescription:
            "By recording daily activities, the app can accurately display the baby's habits in a chart, allowing parents to quickly identify any potential issues with the baby's health.",
        },
        {
          title: "需求推薦",
          enTitle: "Recommendation of requirements",
          description:
            "相關紀錄的下會推薦相對應的商品，隨時曝光，當需要該商品時，以利用戶直接購買。",
          enDescription:
            "The app will recommend relevant products based on the recorded data and expose them at appropriate times. When users need a particular product, it will facilitate direct purchasing.",
        },
      ],
    },
    analyze: {
      title: "3. 用戶分析",
      enTitle: "3. USER ANALYZE",
      description: "",
      enDescription: "",
    },
    challenge: {
      title: "4. 挑戰",
      enTitle: "4. CHALLENGE",
      description:
        "結合諸多母嬰工具的項目並整合電商，並且能讓各年齡層都易上手且黏著度高。",
      enDescription:
        "Combine various maternal and infant tools' features, integrate e-commerce functionalities, and ensure the app is user-friendly and engaging for all age groups.",
    },
    role: {
      title: "5. 我的角色",
      enTitle: "5. MY ROLE",
      description:
        "作為主要的UX/UI設計師，我參與了項目的所有階段，從用戶研究和構想到草圖繪製、線框、視覺設計和原型設計。設計過程強調理解用戶洞察力和痛點，以提供無縫和直觀的使用體驗。",
      enDescription:
        "As the main UX/UI designer, I have been involved in all stages of the project, from user research and ideation to sketching, wireframing, visual design, and prototyping. The goal is to create a user-friendly and engaging app that appeals to users of all ages. The design process emphasizes understanding user insights and pain points to deliver a seamless and intuitive experience.",
    },
    designProcess: [
      {
        title: "研究",
        enTitle: "Research",
        description: "用戶洞察力分析並了解痛點。",
        enDescription: "Analyzed user insights and understood pain points.",
        iconPath: `M463.6,57.5C401.4-10,296.4-19.4,224.3,36.3c-38.4,29.7-62.1,68.5-68.9,116.6c-7.5,52.7,6.2,100,40.1,141.5
        c-11.5,11.4-22.7,22.7-34.1,33.9c-0.9,0.9-3.1,1.3-4.2,0.9c-22.4-8.9-41.4-3.8-58.1,13.1c-24.9,25.2-49.9,50.3-75.2,75.1
        C13.1,428,3.1,438.8,0,454.3v15c0.8,2.7,1.4,5.4,2.3,8.1c6.3,17.4,18.4,28.3,36.4,32.8c1.1,0.3,2.2,0.7,3.2,1.1h15
        c10.1-2.8,19.7-6.7,27.3-14.4c29.2-29.3,58.8-58.4,87.7-88c15-15.4,18.2-33.8,10.4-53.8c-1.2-3-0.5-4.4,1.5-6.4
        c10.2-10,20.3-20.2,30.4-30.3c0.9-0.9,1.9-1.7,2.8-2.4c75.7,62.9,184.3,52.8,247.4-16.3C527.1,230.9,526.8,126,463.6,57.5z
        M152.3,385.7c-1.1,1.6-2.6,3-4,4.4c-27.9,27.9-55.8,55.7-83.6,83.6c-5.6,5.6-11.9,8.9-20.1,6.7c-13.5-3.5-19-19-10.6-30.1
        c1-1.3,2.2-2.5,3.3-3.7c28.1-28.1,56.2-56.2,84.3-84.3c4.3-4.3,9-7.4,13.4-7.2c9.6,0.1,15.5,3.5,18.9,10.3
        C157.4,372.4,156.8,379.3,152.3,385.7z M332,327.6c-82,0-148.4-66.7-148.3-148.9c0.1-82,66.9-148.7,148.8-148.6
        c82,0.1,148.7,66.9,148.7,148.8C481.2,261.1,414.4,327.7,332,327.6z M420.8,111.6c-2-7.5-9-12.4-16.4-11.5
        c-7.5,0.9-13.1,7-13.1,15.1c-0.1,21.3,0,42.6,0,63.8h0c0,20.4,0,40.9,0,61.3c0,2.5,0.1,5,0.8,7.3c2.3,7.2,9.3,11.2,16.9,9.9
        c6.9-1.2,12.2-7.4,12.2-14.9c0.1-42.6,0-85.1,0-127.7C421.2,113.9,421.1,112.7,420.8,111.6z M306.2,130c-8.8,0.1-14.7,6.7-14.8,16.5
        c-0.1,15.8,0,31.6,0,47.4c0,15.8,0,31.6,0,47.4c0,10.1,6,16.6,15.1,16.5c8.8-0.1,14.8-6.6,14.9-16.4c0-31.6,0-63.2,0-94.7
        C321.4,136.6,315.2,129.9,306.2,130z M356.1,149.9c-8.8,0.1-14.8,6.6-14.8,16.5c-0.1,12.3,0,24.6,0,36.9c0,12.8-0.1,25.6,0,38.4
        c0.1,9.7,6.2,16.1,15.1,16.1c8.9-0.1,14.9-6.6,14.9-16.4c0-24.9,0-49.9,0-74.8C371.3,156.6,365.1,149.8,356.1,149.9z M256.3,179.9
        c-8.4,0.1-14.6,6.5-14.8,15.5c-0.1,7.8,0,15.6,0,23.4c0,8-0.1,15.9,0,23.9c0.2,8.9,6.5,15.1,15.1,15.1c8.5-0.1,14.8-6.5,14.9-15.4
        c0.1-15.6,0.1-31.2,0-46.8C271.4,186.4,264.9,179.8,256.3,179.9z`,
      },
      {
        title: "發想",
        enTitle: "Thinking",
        description: "收集想法、草稿和用戶流程。",
        enDescription: "Collected ideas, sketches, and user flows.",
        iconPath: `M296.4,10.5c-8.6-2.3-17.4-3.3-26.2-4.9H241c-1.2,0.3-2.5,0.7-3.7,0.9c-10,1.9-20.3,3-30.1,5.7C116,37,61,133.7,85.4,225.7
        c7.4,27.9,21.1,52.2,39.9,73.9c16.3,18.9,25.7,40.9,27.2,65.9c0.8,12.5,0.2,25,0.7,37.5c0.7,18.2,9.6,31.3,26,39.1
        c3,1.4,4.4,3.1,5.2,6.2c7.2,28.1,24.9,46.4,52.6,55c3.2,1,6.6,1.6,9.8,2.4h17.6c0.6-0.3,1.1-0.7,1.7-0.8c31.1-5.5,53.7-26.7,61-57
        c0.5-2.1,2.6-4.4,4.6-5.4c16.8-8.1,25.8-21.3,26.4-40c0.3-9.3-0.6-18.6,0.2-27.8c1.1-11.6,2.5-23.3,5.4-34.5
        c4.6-17.6,15.2-32.1,26.5-46.1c38.1-47,50.9-100.4,34.8-158.6C406.8,69.5,362.6,28.1,296.4,10.5z M256.6,476.1
        c-19.8,0.6-36.6-13.4-41.8-30h81.3C293,461.6,275.1,475.6,256.6,476.1z M328.5,403.7c-1,8.4-7.2,13-16.6,13c-27.2,0-54.3,0-81.5,0
        c-10.4,0-20.8,0-31.2,0c-10.9-0.1-16.7-6-16.8-17c0-3.9,0-7.8,0-12.1h146.3C328.7,393.1,329.2,398.5,328.5,403.7z M364.9,278.6
        c-16.8,19.9-28.3,42.2-33.5,67.8c-0.7,3.7-1.2,7.4-1.9,11.5H181.7c-2.2-16.7-6.7-32.4-14.1-47.4c-6.4-13.1-15.1-24.6-24.4-35.7
        c-64.3-77.3-34.1-194.6,60.1-230.2c48.3-18.2,94.7-11.7,137.1,17.8c30.5,21.2,49.9,50.5,57.8,86.7
        C408.8,197.7,396.8,240.9,364.9,278.6z M487,181.3c-8.3,0.5-16.6,0.1-24.8,0.1c-8.7,0.1-15,6.1-15.1,14.4
        c-0.1,8.6,6.2,14.8,15.1,14.9c8.3,0.1,16.6-0.4,24.8,0.1c8.9,0.5,15-2.8,18.6-10.8v-7.8C502,184,495.9,180.8,487,181.3z M34.3,128.4
        c6.6,6.4,15.4,6.5,21.3,0.5c6-6,5.9-14.7-0.5-21.3c-6.4-6.7-12.9-13.4-19.7-19.6c-2.9-2.6-6.8-4-8.9-5.2c-7.9,0.7-12.7,3.3-15.3,9
        c-2.8,6.2-1.4,11.8,3.2,16.6C20.8,115.2,27.5,121.8,34.3,128.4z M51.3,260.2c-6-2.7-11.6-1.6-16.2,2.8c-6.9,6.6-13.7,13.4-20.4,20.3
        c-6.4,6.6-6.5,15.3-0.5,21.3c5.9,6,14.7,5.9,21.3-0.5c6.7-6.4,13.4-12.9,19.6-19.7c2.6-2.9,4-6.8,5.3-9.1
        C59.6,267.6,57,262.8,51.3,260.2z M50.1,181.4c-10.1-0.1-20.1-0.1-30.2,0c-8,0.1-14.1,6.4-14.2,14.3c-0.1,8.2,6,14.7,14.1,14.9
        c5,0.1,10.1,0,15.1,0c5,0,10.1,0.1,15.1,0c8.2-0.2,14.3-6.6,14.2-14.8C64.1,187.9,58,181.6,50.1,181.4z M467.1,133.4
        c1.8-0.7,5.2-1.2,7.3-3.1c8.3-7.8,16.5-15.6,24.1-24.1c4.9-5.5,3.7-13.9-1.6-19c-5.3-5.1-13.5-6-19.1-1c-8.2,7.4-16,15.3-23.4,23.4
        c-4,4.4-4.3,10-1.5,15.5C455.6,130.4,460.1,132.8,467.1,133.4z M475.5,262.5c-5.7-5.3-13.9-4.9-19.5,0.2c-5.7,5.3-6.9,13.9-1.6,19.7
        c7.4,8.2,15.3,16,23.4,23.4c4.4,4,10.1,4.2,15.5,1.4c5.3-2.7,7.6-7.3,8.3-14.5c-1-2-1.9-5.7-4.1-8.2
        C490.5,277,483.1,269.6,475.5,262.5z M182.6,173.4c-8.6-0.1-14.8,6.2-14.9,15.1c0,2.8,0,13.6,0,16.3c0.1,8.7,6.1,15,14.4,15.1
        c8.6,0.1,14.8-6.2,14.9-15.1c0-2.8,0-13.6,0-16.3C196.9,179.8,190.9,173.5,182.6,173.4z M329.1,173.4c-8.6-0.1-14.8,6.2-14.9,15.1
        c0,2.8,0,13.6,0,16.3c0.1,8.7,6.1,15,14.4,15.1c8.6,0.1,14.8-6.2,14.9-15.1c0-2.8,0-13.6,0-16.3
        C343.4,179.8,337.4,173.5,329.1,173.4z M300.1,231.1c-6.3-4.1-14.8-2.3-18.9,4c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0-0.1,0.1-0.1
        c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1l-0.1,0.2c-0.2,0.3-0.4,0.6-0.7,0.9c-0.2,0.3-0.6,0.7-1,1
        c-0.4,0.4-0.8,0.7-1.2,1.1c-1.7,1.4-3.9,2.7-6.4,3.7c-4.9,2.2-10.7,3.6-16.7,4.3c-6.1,0.7-12.2,0.9-17.9,0c-1.5-0.2-2.8-0.5-4.2-0.9
        l-2-0.6c-0.7-0.2-1.3-0.5-2-0.7c-0.6-0.3-1.2-0.6-1.9-0.8c-0.6-0.3-1.2-0.6-1.7-1c-0.3-0.2-0.6-0.3-0.8-0.5l-0.8-0.6
        c-0.2-0.2-0.5-0.4-0.7-0.6l-0.3-0.3l-0.1-0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c-1.4-2.4-4.4-3.3-6.8-1.9c-2.4,1.4-3.3,4.4-1.9,6.8
        l0.3,0.6l0.3,0.4l0.5,0.7c0.3,0.5,0.7,0.9,1,1.4l1,1.2c0.4,0.4,0.7,0.8,1.1,1.1c0.7,0.8,1.5,1.4,2.3,2.1c0.8,0.6,1.6,1.3,2.4,1.8
        c0.8,0.5,1.7,1.1,2.5,1.6l2.6,1.5c1.7,0.8,3.5,1.7,5.3,2.4c7.2,2.8,14.6,4.2,22,4.9c7.4,0.7,15.1,0.6,23.1-0.9c4-0.8,8.1-2,12.3-3.9
        c1-0.5,2.1-1,3.1-1.6c1-0.6,2.1-1.2,3.1-1.9c1-0.7,2.1-1.5,3.1-2.4l0.8-0.7c0.3-0.2,0.5-0.5,0.8-0.8c0.3-0.3,0.5-0.6,0.9-0.9
        l0.5-0.6l0.3-0.3l0.5-0.6C308.2,243.7,306.4,235.2,300.1,231.1z`,
      },
      {
        title: "設計",
        enTitle: "Design",
        description: "打造品牌、信息和界面。",
        enDescription: "Crafted the brand, information, and interface.",
        iconPath: `M181.4,5.6c49,0,98,0,146.9,0c-0.3,0.6-0.7,1.1-0.8,1.7c-10.9,36.6-21.9,73.1-32.4,109.7c-1.9,6.6-1.2,14-1.7,21.4
        c11.9,0,22.6,0.1,33.4-0.1c1.5,0,3.2-1.4,4.3-2.6c14-15.7,27.9-31.5,41.9-47.2c2-2.3,2.6-4.2,1.9-7.4c-6-26.3,8.7-52.1,34.5-60.6
        c5.9-1.9,11.9-3.4,17.9-5c11.4-3,22.8-6,34.7-9.1c4.6,17.4,9.2,34.3,13.4,51.3c1.1,4.5,1.8,9.4,1.5,14c-1.5,23.3-14.9,40-37.3,47.4
        c-1.3,0.4-3,1.1-3.4,2.1c-2.1,5.5-3.9,11.2-5.9,17.1c3,0,34.8,0.2,37.1,0c20.4-1.6,38.5,13.1,38.4,38.2
        c-0.3,75.6-0.1,151.1-0.2,226.7c0,4.2-0.4,8.5-1.5,12.5c-4.3,15.9-17.2,25.5-33.9,25.5c-44.9,0.1-119.3,0-164.2,0
        c-1.9,0-3.8,0-5.9,0v35.3h14.2c8,0,14.5,6.5,14.5,14.4v0c0,8-6.5,14.4-14.5,14.4H196.5c-8,0-14.5-6.5-14.5-14.4v-0.3
        c0-8,6.5-14.4,14.5-14.4h14.1v-35c-2.4,0-4.3,0-6.2,0c-44.6,0-118.2,0-162.8,0c-8.3,0-15.7-2.1-22.3-7.2
        c-10-7.7-13.6-18.2-13.6-30.4c0-32.4,0-64.8,0-97.2c0-43.5,0-87,0-130.4c0-23.5,14.2-37.7,37.7-37.7c7.7,0,44.4,0,52.1,0
        c1.2,0,2.5-0.2,5-0.5c-1.3-7.9-1.9-15.5-3.8-22.8c-4-15-8.7-29.9-13.2-44.8c-6.5-21.6-13-43.2-19.6-64.8c22.2,0,44.4,0,66.6,0
        c7.5,1.9,15.3,3.1,22.5,5.7c9.7,3.6,18.9,8.3,28.5,12.6V5.6z M475.6,373.2c-127.5,0-312.8,0-440.1,0c0,9.9,0,19.7,0,29.4
        c0,8.9,0.6,9.5,9.3,9.5c120.9,0,300.4,0,421.3,0c1.6,0,3.6,0.5,4.8-0.2c1.8-1.1,4.4-3.1,4.4-4.8C475.8,396,475.6,384.8,475.6,373.2z
        M100.3,167.8c-8.9,0-47.1,0-56.2,0c-7.6,0-8.6,1-8.6,8.3c0,54.1,0,108.1,0,162.2c0,1.7,0,3.4,0,5.1c29.6,0,87.5,0,116.4,0
        c0-47.2,0-94.2,0-141.1C118.8,199,110.4,193.4,100.3,167.8z M388.9,220.3c-23.8,41.1-47.4,81.9-71.2,123.1c43.2,0,115.1,0,158,0
        c0-2.2,0-4.1,0-6c0-37.9,0-75.9,0-113.8c0-16.3,0-32.6,0-48.8c0-5.5-1.5-6.9-7-7c-5.1-0.1-39.7,0.2-44.7-0.1
        c-3.1-0.2-4.2,1.1-5.1,3.9c-2,6.5-4.3,12.9-6.4,19.4c-4,11.8-8,23.5-12.1,35.6C396.4,224.4,392.8,222.5,388.9,220.3z M104.3,35.1
        c-0.1,0.7-0.2,1-0.1,1.3c6.4,21.6,13,43.2,19.2,64.9c0.9,3.1,2.7,3.1,5.1,3.1c45.1,0,90.1,0,135.2,0c3.1,0,4.5-0.8,5.4-4
        c4.3-15.1,8.9-30.2,13.4-45.3c2-6.6,3.9-13.2,5.9-19.9c-25.9,0-51.1,0-77,0c0,14.7,0,29.1,0,43.7c-7,0-13.3-0.3-19.7,0.1
        c-4.6,0.3-6.9-1.1-8.5-5.6c-1.7-4.7-4-9.5-7.2-13.1C156.8,38.6,131.7,33.6,104.3,35.1z M263.7,133.9c-45.1,0-89.6,0-133.9,0
        c-0.2,0.5-0.5,0.8-0.5,1.1c-0.1,7-0.2,14-0.1,21c0.1,11.2,5.6,16.7,16.9,16.8c13.2,0,26.4,0,39.6,0c20.6,0,41.1,0,61.7,0
        c9,0,15.8-4.8,16.2-12.3C264.1,151.7,263.7,142.9,263.7,133.9z M249.7,343.7c10.2,0,19.5-0.2,28.7,0.1c3.8,0.1,5.8-1.2,7.6-4.4
        c24.8-43.1,49.8-86.2,74.7-129.3c0.9-1.5,1.6-3.1,2.4-4.8c-8.5-4.9-16.6-9.5-25-14.4C308.6,241.9,279.4,292.3,249.7,343.7z
        M182.5,202.2c0,47.4,0,94.3,0,141.2c9.6,0,18.8,0,28.2,0c0-47.2,0-94.1,0-141.2C201.2,202.2,192,202.2,182.5,202.2z M241.3,202.4
        c0,32,0,63.7,0,96.8c24.2-41.8,47.6-82.3,71.1-123c-3.4-2-7-3.1-8.8-5.4c-3.3-4.2-7.1-2.9-10.9-2.7
        C283,193.2,274.1,199.1,241.3,202.4z M347.3,162.1c12.4,7.1,24.3,14,36.5,21c7.4-22,14.6-43.3,21.9-64.9c-4.4-2.5-8.6-4.9-13-7.4
        C377.6,127.8,362.7,144.6,347.3,162.1z M440.7,42.7c-7.7,2.1-15,3.8-22.1,6c-12,3.8-18.2,15.7-14.7,27.4c3.2,10.9,15.2,17.8,26.1,15
        c12-3,19.2-14.3,16.5-26.4C445,57.5,442.8,50.4,440.7,42.7z M269.6,441.7c-9.8,0-19,0-28.4,0c0,11.7,0,23.1,0,34.6
        c9.6,0,19,0,28.4,0C269.6,464.6,269.6,453.3,269.6,441.7z`,
      },
      {
        title: "原型",
        enTitle: "Prototype",
        description: "獲取用戶反饋並進行迭代。",
        enDescription: "Obtained user feedback and conducted iterations.",
        iconPath: `M505.6,57.7c0-29.7-22.4-52.1-52.1-52.1c-19.1,0-38.2,0-57.3,0c-19.1,0-38.2,0-57.3,0c-14.5,0-27.7,5.3-37.3,14.8
        c-9.6,9.6-14.9,22.8-14.9,37.2c0,27.2,0,54.4,0,81.6l0,37.1c-1-0.1-1.9-0.1-2.9-0.1c-12.6,0-24.9,5.3-33.8,14.6
        c-9.4,9.8-14.3,22.8-13.7,36.8c0.7,19,0.5,38.4,0.3,57.2c-0.1,7-0.1,14.3-0.2,21.5c0,9.2-5,16.6-12.2,19c0,0,0-24.2,0-35.9
        c0-26.7,0-54.2,0-81.3c0-29.5-22.4-51.7-51.9-51.8c-18.4,0-36.8,0-55.2,0c-19.8,0-39.6,0-59.3,0c-30.3,0-52.3,22-52.3,52.4
        c0,81.5,0,163,0,244.6c0,30.3,22,52.4,52.3,52.4c17.6,0,35.2,0,52.8,0c20.2,0,40.5,0,60.7,0c14.9,0,28.4-5.3,38-14.8
        c9.6-9.6,14.9-23.1,14.9-38c0-22.4,0-44.8,0-67.1v-31.1c24.2-4.1,41.1-25,40.4-49.9c-0.5-17.8-0.4-36-0.3-53.6
        c0.1-7.6,0.1-15.4,0.1-23.1c0-15.7,7.3-23.4,22.3-23.4l0,30.8c0,22.5,0,45,0,67.5c0,14.4,5.3,27.6,14.9,37.2
        c9.6,9.6,22.8,14.8,37.3,14.8c19.1,0,38.2,0,57.3,0c19.1,0,38.2,0,57.3,0c29.7,0,52.1-22.4,52.1-52.1
        C505.6,222.8,505.6,140.3,505.6,57.7z M109.5,296.8c-1.4,0-2.9,0.1-4.3,0.2c-18.5,1.6-34.3,16-38.5,35c-4.8,22.3,8.3,44.3,30.4,51.3
        c4.2,1.3,8.5,2,12.9,2c17.8,0,34.1-11,40.6-27.5c1.1-2.7,1.6-2.9,4.2-2.9l0.4,0c5.7,0.1,38,0.1,40.9,0.1c0,0,0.1,99.5-0.3,102.7
        c-1.7,12-10.6,19.7-22.7,19.8c-21.5,0.1-41.1,0.2-59.8,0.2c-19.9,0-38.4-0.1-56.6-0.2c-13.1-0.1-22.8-9.9-23.1-23.4
        c0-2.3-0.1-237.7-0.1-237.7h0.1c-0.6-10.9,0.2-19.4,7.9-26.2c4.4-3.9,9.7-5.9,15.8-5.9c5.3,0,10.7,0,16,0v4.9
        c0,10.1,8.2,18.3,18.3,18.3h46.5c10.1,0,18.3-8.2,18.3-18.3v-4.9c5.6,0,11,0,16.3,0c12.4,0,21.5,8,23.2,20.4
        c0.4,3.2,0.3,6.6,0.2,10.2c0,0.5,0,112.2,0,112.2h-0.8c-3.7,0-36.2,0-41.7,0.1h-0.2c-1.5,0-1.5,0-2.1-1.6
        C144.6,307.8,128.6,296.8,109.5,296.8z M126.1,341c0,8.6-7.5,16.1-16.1,16.1h-0.2c-4.2-0.1-8.3-1.9-11.4-5.1
        c-3-3.1-4.7-7.2-4.6-11.3c0.2-8.6,7.6-15.9,16.1-15.9h0c4.1,0,8.2,1.8,11.3,4.9C124.4,332.8,126.1,337,126.1,341z M477,307
        c-1.7,12-10.6,19.8-22.7,19.8c-21.4,0.1-41,0.2-59.8,0.2c-19.9,0-38.4-0.1-56.6-0.2c-13.1-0.1-22.8-9.9-23.1-23.4
        c-0.1-2.7,0.2-98.6,0.2-98.6h63.4c-2.4,5.4-1.3,11.7,3.1,15.9c2.7,2.5,6.3,4,9.9,4c3.2,0,6.1-1.1,8.3-3.1c8-7.3,15.6-14.9,22.7-22.4
        c4.8-5.2,4.2-13.3-1.5-19.1c-5.6-5.6-12.1-12.1-19-18.7c-3.3-3.2-7.1-4.9-10.9-4.9c-3.3,0-6.5,1.3-9.2,3.8c-4.6,4.2-5.7,10.3-3.1,16
        h-63.5c0,0-0.5-112.4-0.5-113.3c0.4-5.2,0.8-10.1,2.1-14.6c2.5-8.5,11.3-14.5,21.3-14.5c5.6,0,11.1,0,16.4,0v4.9
        c0,10.1,8.2,18.3,18.3,18.3h46.5c10.1,0,18.3-8.2,18.3-18.3v-4.9c5.5,0,11,0,16.3,0.1c13,0,22.7,9.3,23.5,22.6
        C477.7,59,477.5,303.8,477,307z`,
      },
    ],
    persona: {
      title: "人物誌",
      enTitle: "PERSONA",
      subTitle: "依公司資料庫顯示，與公司有互動的 85% 用戶為女性。",
      subEnTitle:
        "According to the company's database, 85% of the users who interact with the company are female.",
      description:
        "開始這個項目時，我基於在線研究、月嫂及媽媽們的反饋了解，創建了三種用戶的角色。主要還是以媽媽人物為主軸，月嫂協助並教導客戶使用，畢竟此 app 最終目的是希望用戶長期紀錄寶寶之餘，還能購買所需要的商品。",
      enDescription:
        "When starting this project, I created three user roles based on online research and feedback from both mothers and caregivers. The primary focus is on the mother's role, with caregivers providing assistance and guidance to customers. After all, the ultimate goal of this app is not only to help users record their baby's growth but also to facilitate the purchase of necessary products.",
      img: "persona.png",
      say: [
        "身為一位阿嬤，我希望能為我的寶貝孫子買到合適且可愛的衣物，這樣拍照穿著我買的衣服很可愛。",
        "身為一位忙碌的媽媽，我希望點開 app，就能找到需要買的商品，這樣才不會佔用太多時間。",
        "身為一位媽媽，我希望孩子能健康成長，隨時記錄，也能方便觀察孩子成長過程。",
        "身為一位專業月嫂，希望 app 的數據能幫助我的專業，讓客戶在我協助下能放心坐月子。",
      ],
      enSay: [
        "As a grandma, I hope to find suitable and adorable clothes for my precious grandchild, so they can look cute while wearing the clothes I buy for them in photos.",
        "As a busy mom, I wish to open the app and quickly find the products I need to buy, so that it won't take up too much of my time.",
        "As a mom, I want my child to grow up healthy, and I need a convenient way to record and observe their growth journey.",
        "As a professional caregiver, I hope the app's data can support my expertise, ensuring that my clients can confidently rely on my assistance during the postpartum period.",
      ],
    },
    flowChart: {
      title: "流程圖",
      enTitle: "FLOW CHART",
      subTitle: "在進行用戶界面設計之前，確保完善了功能和用戶交互流程。",
      subEnTitle:
        "Before proceeding with user interface design, I ensured that the functionality and user interaction flow were thoroughly refined.",
      description:
        "以下功能流程圖描述了應用程序的內容策略和用戶流程，列出了用戶可能與之交互的潛在功能，以了解如何簡化他們的旅程，幫助用戶使用該產品實現最重要的目標，並讓開發人員知道可能有哪些項目，而哪些可能需要模組化。",
      enDescription:
        "The following flowchart illustrates the application's content strategy and user journey. It lists potential functionalities that users may interact with to understand how to streamline their experience, help them achieve their primary goals using the product, and provide developers with insights on potential features that may require modularization.",
      link: "https://whimsical.com/flow-chart-W2zyGEhsDC1YKBPwxUJeWC",
      img: "flow-chart.png",
    },
    wireframe: {
      title: "線框圖",
      enTitle: "WIREFRAME",
      subTitle: "在設計過程的開始，創建了用於測試目的的線框。",
      subEnTitle:
        "At the beginning of the design process, I created wireframes for testing purposes.",
      description:
        "為了敏捷開發，使用了 Figma 製作了低保真的線框稿，快速將畫面展現給開發人員觀看，讓他們更確定有哪些功能要開發，並對照 Flow Chart 看是否有哪些頁面有缺失或需要製作更精確的畫面。",
      enDescription:
        "For scrum development, I used Figma to create low-fidelity wireframes, allowing us to quickly showcase the screens to the developers. This helped them identify the required features and cross-reference them with the Flow Chart to check for any missing pages or the need for more accurate screen designs.",
      link: "https://www.figma.com/file/EXJyosCNspCNBYcXcUl6Qv/MBTool-Wireframes?type=design&node-id=202-5106&mode=design",
      img: "wireframe.png",
    },
    uiDesign: {
      title: "使用者介面設計",
      enTitle: "UI DESIGN",
      subTitle: "測試完可用性錯誤後，便開始在 Figma 中設計最終畫面。",
      subEnTitle:
        "After testing for usability issues, I proceeded to design the final screens in Figma.",
      description: [
        "因使用者以女性為主，色彩配色使用較為輕柔的粉色，區塊也已更為圓角的方式展現親和，左右滑動將可變更寶寶，當性別不同時，部分區塊顏色也將改變，以利使用者能更清楚現在紀錄的是哪位，而群組成員也可隨時觀看紀錄。",
        "而紀錄的數據也可顯示寶寶目前狀況，當寶寶身體不適亦可將數據給醫生當作診斷評估，底部也用演算法推薦當前的商品讓用戶能快速搜尋並購買合適的產品。",
      ],
      enDescription: [
        "The color scheme for the app is designed with a soft and gentle pink, catering to the predominantly female user base. The use of rounded corners in the interface creates a more welcoming and friendly feel. Users can swipe left or right to switch between different babies, and the color of certain elements will change to indicate the selected baby's gender, making it easy for users to identify which baby's records they are viewing.",
        "The recorded data can also display the current status of the baby. In case the baby is feeling unwell, the data can be shared with the doctor for diagnostic evaluation. Additionally, the app's bottom section utilizes algorithms to recommend relevant products to users, enabling them to quickly search and purchase suitable items.",
      ],
      link: "https://www.figma.com/file/EXJyosCNspCNBYcXcUl6Qv/MBTool-Wireframes?type=design&node-id=202-5106&mode=design",
      img: "ui.png",
      imgs: ["ui-1.jpg", "ui-2.jpg", "ui-3.jpg", "ui-4.jpg", "ui-5.jpg"],
      enImgs: ["ui-2.jpg", "ui-4.jpg"],
    },
    prototype: {
      title: "原型",
      enTitle: "PROTOTYPE",
      subTitle:
        "使用 Figma 製作了部分功能的原型，展示原型交互，模擬產品完整的體驗。",
      subEnTitle:
        "Using Figma, I created prototypes for some of the app's features to demonstrate interactive design and simulate the complete user experience of the product.",
      demo: [
        {
          title: "登入註冊及新增寶寶",
          enTitle: "The login, registration, and adding a new baby features.",
          description:
            "讓使用者快速使用第三方註冊登入，免去填寫資料的麻煩，並可立即加入寶寶基本資料。",
          enDescription:
            "Allowing users to quickly use third-party registration and login options eliminates the hassle of filling in personal information, enabling them to join and add basic baby information immediately.",
          img: "/video/poster/media-1.jpg",
          videoUrl: "/video/1.mp4",
        },
        {
          title: "紀錄寶寶及瀏覽歷史紀錄",
          enTitle:
            "The recording of baby activities and browsing the history log.",
          description:
            "新增寶寶紀錄及用數據圖表顯示寶寶正常狀態，出現異常狀態時可即時就醫並出示歷史紀錄給醫師觀看，讓醫師更能確診寶寶病因。",
          enDescription:
            "Adding baby records and displaying them with data charts helps show the baby's normal status. In case of any abnormal conditions, users can seek immediate medical attention and present the historical records to the doctors for a more accurate diagnosis of the baby's condition.",
          img: "/video/poster/media-2.jpg",
          videoUrl: "/video/2.mp4",
        },
        {
          title: "母嬰商品購物",
          enTitle: "Shopping for mother and baby products.",
          description:
            "在紀錄寶寶時，有缺少用品(如尿布、奶粉等)，可讓使用者能方便快速購買相關母嬰用品。",
          enDescription:
            "When recording baby activities, if there is a shortage of supplies such as diapers, formula, etc., users can easily and quickly purchase related baby products through the app.",
          img: "/video/poster/media-3.jpg",
          videoUrl: "/video/3.mp4",
        },
      ],
    },
  };

  return { appData };
});
