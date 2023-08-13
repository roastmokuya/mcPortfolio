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
      img: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla/1662989569183.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DroHRFKqgyZ02tAFgmphsnrqYinKOO7daRgloGyyeCe0Zd%2B5b2G7%2FQBrhMp%2F3pooiMYV1NRXdnmMWB%2BX4B10pxoM29miRBjvw9GmINUBYsrPIbTqDZG117VpKiS7Q7t1D75ooODqUqKkXeyAVCKRhEfU5FN%2B5msiLfSHOhmWBdGDEAr592F2XZGyGe8LoOWAqwphcyv76h3SIJiQFo2rTC6mH5npJDgM8vpnHEUNE2Apq9PLVWHn%2FrePwtV0nGkPBEUoNwZFdbz76yalDJUzf%2FO63pwereK0YK4nAwMl6oCT54lveTSTojK8HD7jE4szqlNlWK4aKbU3AuavuZESVg%3D%3D",

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
      img: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla/1662986376789.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pBc8bPYzFi%2B%2FGhRKhypQ2ivcpvhsHiniYox7evH4i7LOrN98JmuVnUM835saUGbsevMSD%2B4i1bgU5uE9F059aHqy%2FHHJhJhaA1bnvK7n7vy6w1R%2FWI2EuC%2FR0VhqqSHIpEOyMWGjoFZcnj7sg57ziCFBzed9rVh%2BxRsgTHjhBR3ER9ZRRoyNEYsHt7Iy3NAg9ocA2BGZVJBDb7YjCMvyY5rpW2vVztQ%2Bbb2iawEtWpw9oXns8lmyESzh2W2nSeeMXfR7BwKtUhrjRcsDglvXN%2Bja2My483FrEtWQHGqGPWr40ntT6h1AkqM84XYcZTXUGkhOx1HD0jRinnxFZZmjFw%3D%3D",
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
