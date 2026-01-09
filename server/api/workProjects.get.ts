export default defineEventHandler(() => {
  const workProjects = [
    {
      id: "1",
      title: "官網迭代設計",
      enTitle: "Official Website Design",
      description:
        "主要負責網站頁面規劃、設計，並執行網頁切版、JQuery 的動態顯示和 JavaScript 的應用。",
      enDescription:
        "Responsible for website page planning and design, executing web page layout, implementing dynamic displays using jQuery, and applying JavaScript functionalities.",
      url: "/webDesign",
      img: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla/1662989569183.jpg",
      year: "2018-2021",
      skills: [
        "Photoshop",
        "Illustrator",
        "HTML 5",
        "CSS 3",
        "Bootstrap 4",
        "JavaScript",
        "JQuery",
        "RWD",
        "Chart.js",
      ],
    },
    {
      id: "2",
      title: "母嬰工具 App 設計",
      enTitle: "Maternal and Infant App Design",
      description:
        "當時只在初步研究設計階段，並未完善，暫時由我一人主導並設計，尚未和工程團隊溝通討論。",
      enDescription:
        "At that time, It was in the preliminary research and design. I was leading and designing it on my own temporarily, and there had been no discussion with the development team yet.",
      url: "/appDesign",
      img: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla/1662986376789.jpg",
      year: "2020-2021",
      skills: [
        "Illustrator",
        "Figma",
        "Whimsical",
        "User Story",
        "Functional Map",
        "Flow Chart",
        "Wireframe",
        "Prototype",
      ],
    },
  ];

  return { workProjects };
});
