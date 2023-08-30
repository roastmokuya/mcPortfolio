export default defineEventHandler(() => {
  const skillsData = [
    {
      id: 1,
      title: "HTML 5",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693373829430.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bdPLcE%2FCogWKU2028CuEXJdGPeiX8egLn3h8Xwqnlw12%2BAxpXaAGK6m1IBs89bajHq%2Fpk1nIhmJsI3umNtt4fOlQ%2BN7%2BEFbEehiMTH2Za4zl53EWJriWX0kI8%2F%2BpIuCOKawtTMIhFyO7VJM%2FPN4gyob%2FhVRG6M3TbEFP%2BvafeKZ3TEEd9c9EOFefpbrazp5%2B42eI3R4saz36rKk2ElGigLGeWHW%2B6pgHUqKWDJt0WZbwBsCSE3xh%2FCcFry%2FnITn6VDUI9HOWTJFB9g187HSHXKVEd7mZ9gsA6w47oTUD%2BuJ6b56uBauj06TKnO4f7lo6O6If5CQJ8svAdqVeKwFycw%3D%3D",
    },
    {
      id: 2,
      title: "CSS 3",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693373393980.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iF37n4LglAzhcmJiIjUUw7OHWC%2F5oINn3d5arJZGT4FVxeNu0Pfc8%2FqTIGF%2B%2FHndn99O078%2BceQ0whC6kJH7O6puO5701F8UA2vQdqFrmlT3E8DOzsz10V6Vfj7B0KsJMqiDYbCBlLtJdOqFrCMIXSsCg7wOvnTtDlPRyxHcP4eqG99vrG6Qu63yoyGmBB3BAEGpby%2FU631BPqhvYEgeSV33B1DSNQ8%2BebzwnHTnLgDjmEPByDMDEW74dhvllGNVBzkwHDuebSH5f1ptxsz%2BsytKDcWlA9%2FPD1KL5GxlpZGaWIfebLjifeE4KAXuC5UpiyJ4rrGDwuFTrS5lE2k9cg%3D%3D",
    },
    {
      id: 3,
      title: "SCSS",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693373971963.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HQ7OqxcWVNbH%2BMakoJZWIijijVXdXoPyx4i54%2FbbAsOCqog5BNM3Pi6XorYjSU3rUWoPEIPUQXRP%2BUCgpDiisrza7XAjfd8tSc%2BuG5mQBovBu7f2tvV3biOFOu8UURfSS9QvLHMEJ4KbdBex%2BSHzBYQtHZHaL46lpF8aGv87ippEd1UnUrgDJD54NMq3srHbI1KjxDDkfZPlXgtKw2qyM%2BpeSu6bz2qX%2FcOhRZBC%2FTF0s6vaQkpsScmP0QQA1R%2BpmMIwe8bsrrwL2C3Ygs32jLJjIPiFnYVbbOXcDkJees12G35JbURbsrv59LN8AQaVXgdYolOodVY%2FE%2FJn9VhWcQ%3D%3D",
    },
    {
      id: 4,
      title: "JQuery",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693373865564.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OjWPTEJJPtCz799elSWIcZOhloG5arbJzhFFeuQpT32n4WThwvh%2BX9rLJde%2FeVeXVSvaQiM6VjPj5wxSvv41YDoKFdEN0d0WlorFxFShE16QAOts7trTkcoI1Vdp31l1x2XdhJ8QFx8NhZJEf5dxxQ%2BjhQs1sXlCa4bmnp0TIY3%2Bpwhk%2BRvHmbh9Dqb0p9A8Cttx9wVRwg44EeflXUvN%2FeiJ%2FMivGHriwVkeHMzsz2K22LW65oxshWYpXIQTawUlKd0ER6E6NHpbwof3Vg%2B9Nigz6rEL1gpssWQb%2FqcIJB1R30EVg%2BnB6RpBv9iPH1nQGDIRP4gbyKXxzMX4eMEmsg%3D%3D",
    },
    {
      id: 5,
      title: "JavaScript",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693373890038.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ReLoq1SRBIKLa46SqsL2Mr2PT1IvTvjaplgFte0ItSF6rsU39IZYCFwGgop3jrh1tQeb28KSRPz9jr1%2FY%2ByyK3TQI7mpbf%2BifJAsS9IFVmV2uPDSg06i8B%2B%2BFrooM5jQ2K%2FQEzZfvhZIHNCyxVRkt6EYoVFpBArkUsL%2Bi2pqrnZMs07PuPUGDqgO17hccHUpUZ0AZTM0hKFDZ7FRkvB4mX0zmJVBsbNSLWdXFRGDhQV1ooy51E%2BaGByiVw9Qv06OqgYtQaJnrPdwn96VVWTu0fthxpPqy2xgbMdZocI%2BYIuRakN62zLHO5rfA95AHlIELCVpkMJ6YhOdqIAzCwp8%2BQ%3D%3D",
    },
    {
      id: 6,
      title: "TypeScript",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693373991157.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ExcQgofaceUwToOk3uhzhuOSxBs2i%2BSu09ny1kXsUR%2Ftog7666SsJqy%2Fq%2B7So8cV%2FoxjbosVAtreRglhuCh7pWWSXiWuf41KttmFflgRFlu3JlA%2FvMPN89XHBJAA0FZzmTTTieeAuUQHYaWfbmQq9hNpKaZ87lg34ELm5xcoXEBMYJYax5p9wMDOmsKon5lh1GbILfCuMhXCVMnWvFp4kVbCqNw7aLl9ybSmAvqqqTpZ5Gui5PmVpnb%2BbSLE52Yn6evVGnYu6qkk99kWj3RUiFA%2BTvHbUkak66REgnY%2F9opDXpnlEibl0dTpkAEUfrADlQ1Dxw6OBtq8xlcIgNJAWA%3D%3D",
    },
    {
      id: 7,
      title: "Bootstrap",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693373257480.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TILIwvPumpKhDbYKwuXEhBE0Utbyd7gjQgaQnOxw8KurEanaO%2FQHtbdOqSZqAbvLc0BjersLWBtapEEKOuWwJTFFNYJMEsUyakbNjF%2BzoiNpvaqtLK7imepz7ruop92tlk4QgCykbIh7QJSwuCwzJi5Qb5NsxXXGzDw3ZxFoDosoLO2%2Bs5rNVl83dET25KtyH9dsBnuu5Dblvi544eaeKRwATQj4woHd5Im6npB0cMu8uCFBj5uHb07hQRXmME5CHVsDyd1ZER61Mv%2Fj0VyKc9U0KNTJkmv4qetBPcwzRkj2G6SwLV4g7nZnRF7jK%2BDIoCv3y7GViZHb9vene1kbYw%3D%3D",
    },
    {
      id: 8,
      title: "TailwindCSS",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693374008311.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KYhqYkCUOmHAdQgN3lXYMEvS6q5pkJSq2JNyOyjmrFQxQb2aSOEXCZD%2F8SBb0rLHnxnozcCwCuuHUybKlVeHK9%2FtrSsZZ0iBLDcRJ2UYTPiZ6SkymyitmnGRfZVCzbVpQTsETsXutwNXpd7a2Sfr1eVHQMjHqsIjvNANbIpwclddWseXbOBNi8iN2CrN4TZAORS1vqlB3XuOTXv4y3mvGTEFL522D6uB7kFSIJb3rnWo2LSvMTEAK6g6xli8w7NPXr3cFvnpymKdOyO5%2FOvSd67%2FGEDNuk2I9E7KBnbDOEUfoTtDHqzd%2B1Q69bY1A9tJatq6dykcbmxHkfOyRfeBPQ%3D%3D",
    },
    {
      id: 9,
      title: "Element⁺",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693373417301.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LHpn3mX59KlXIP9APMFx9UjkwxBWe0XMyFyNWsa8iywZKLBtp%2BRWmManmsfd3HTVU9bFaoJgBykczTf2jF24Ba5q7WAqLAVGUEc838N2YvdLSU9dwG1wGEAsOu3UusbBIrFy3DlIb%2Fs5kcoKxt%2BcdpcM5J0Do%2ByuS4Xb9E6B3va2wmH8MD%2Fj2cbu5GWBX6nj3rme%2F7o1zerVEkoRxGFghAvooRgog%2BGI%2BhDnR6At8Wua3YYatBxzX3CKUSG80E78%2FKdQww4ikBubXG5g9UOEhTB4swsrHGq4wstKmrvCgGKbYRbMkF7%2Fs%2FCWi7sG8ATw5Je11nDoy%2BSA91REwJ8lMw%3D%3D",
    },
    {
      id: 10,
      title: "Vue 3",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693374069550.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Le8sMSSZGcVc4KjmH78TleLyuAYzB5DGcHuSoDiSRmwdvZwe%2FueHn%2BgWXKGFYhA%2BSVHSAQhvtOKuzjl4oC0ptvnFvDTCEylemR1yrpbZOnmd9N8rdy7q0nG9kT9DWunbCmm2BAC10yIOHGOPZyJmCouUeaKeN8VeL9Vbq66G%2Fp57zEGbRSt3c%2FyJRB79G7H8dGxnS%2B2GLKxHTFFSCaFoScdtsGQj823Iai3M4NkoHO%2FKXEA82DBa8S5N3JF8RWJ%2FnGBZh0Dkgb1mH%2FbQVGg6OYiz24JFRAj8pQR%2F%2BgqaFSim5vGSIeRrp%2FBDgphmpTQTMqEnpj10sglkEKu%2FhTKfvg%3D%3D",
    },
    {
      id: 11,
      title: "Nuxt 3",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693373907462.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TZV2ToLVUQl%2F02oTA%2BGCHfDwTDb1LwGiyhaP2hqW8Y4hbT9gY4jnMUfSo%2BsaKaM0ycQ3nzUa%2FN692sogSSFjk0ferhuTi1EDxYmKc4r4ToXpBNmhs4Z78zkxOACoT%2B535iWrsYjM%2FE5sr%2FT3JBa31YuHKtj9CKwC5iCDaHGHPn07vrnc7grcWIjMiaZPfFkiTjlkl8gL%2BpBydYLYk%2F6Yc3y2OZkU%2BmRW5Q%2F6rZFUs2vuQhn7yDjMv01iNexRHcUwNFlS4c7rt97VE5%2FzkRhPnEFGjip3O90ztIi%2BNReap%2Bq3jMY4qdgAtgGgWyFe7ugpuzhMHXrUvw9ISEGr%2FbtJRg%3D%3D",
    },
    {
      id: 12,
      title: "Pinia",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693373330841.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=frUGMoFODzZYLfpyGDdS%2F5UOATOlHGLMe4BjdOxtDM5%2Flewvy5Q5zE635%2BuhwohP%2BbY4d%2ByXvELuji%2B1vTsndO3JX%2FDo0ozQOfAsUb1my9ggEV5XHFMcPsm5IceP4%2FhYkfU0368DUcsS9Q2sL9jGp6sSXpK23IgwzLn7%2F3%2BeQPUzkaFaky8GDKsBQgpAdYvAzjqx5IJWDES0Ug1YbY%2FVUBURc47rlENJWli1BviIDqLz6uVw%2FDON1KRh%2FxEyZh3SrobrCS2YdfwD6Rl0oCPUa20FJpg5hkyMZYeNuYovz01F2Y%2Ftu0EAAlsSHhSbdDCLavqiKgsJL83Cm7dIoEjajw%3D%3D",
    },
    {
      id: 13,
      title: "React",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693373952158.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LqU2n%2FYZXNf37nM%2FQq1Cxw02LOTNwx26OgErZNu4Y5fA2r49EX%2BmuHjquKUHXe7V0Sedg6Gft5%2Fq7Ok7scCgWXwcF7l5Nf9QaOBMgErIwrgo3F8PDZ8ZVmIw4eypMV4SkFn7WiAYpmmqIUtK2%2BxygM3hcUs8a2XpPbJXiDwrQA%2Fho6ZtTzQNv%2BH7rOI59iB63yYuwLqdoMnffL9qdivFekbrzNkT%2Fnrh%2BMcNKUOccs5C1UT5JIMWxFkhNDTLafznDkBZ106VVmRCjM7wZHy7CzrF3gQdh%2F50s0o2QLV8M7yIcfLSY%2BdXOTCnsg6QjahvUgsaL0s4eQnL0XBh7jFItQ%3D%3D",
    },
    {
      id: 14,
      title: "Vite",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693374027577.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HwHUR9mucm%2Bpt0UUmxX1hQFVAPp769aGMJuFOZWmOM3PWgvrX9ovBLpH%2BL%2FF5egxJfjJ31mpEZzoDejUf1Z3Tsc6IrIxJ8CyQREmB07WOz9F8YfgHOitn0f4TM8je%2BR0czS%2F80LXJBFdn%2FLXNF46XO%2FXulEmT7b17cmSC0zcVXioLMZfgPIZZKV4DpKCw5wlIMzQO0wP15Vyw4x1i3G%2F7MPnEmebqx8GqBWvFWAIXww5lID6oF6Qqt18I0%2Fe2FHwwu1u0j2M3GjikxH5IcpwioMLIGM%2FrVzqM9RjO8UNVseqr7474qvZqzEv9XF9acX%2Bmi%2BbZqnP3e3Xs8Bg1Nwydg%3D%3D",
    },
    {
      id: 15,
      title: "Webpack",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693374086766.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=E1qe6k5zbPoZJTRBJ64kyeKhpcAqDgE6Bz8HRd6HB9B0JHlOu59vsG8hkWFR03XYzKEVNs5yoUrhp9WeqNG8ov3IQQunNBFXzRoQngrL1MKOwmW4bWOqvcp52Ns%2FkWNICDW7AIsa1ks%2BY%2BruVKGT3H4thOndWCByOd2oHWoT6vy9MWGV%2BbBwRnWF7KZi9LHg9J%2Ben4vSzTlwvhV4GPHBNJksGd8ry3PDZfsgpUBskiXZB7Qd5x3qAgHmukM3VA8GhiPA8tkE1yb%2F5mEdR8GEn3Y4FdMUm3is5WDLCd2fnxu%2BnO60Y03mtXl%2B6jf5iTc3JbzMdZp0nWTm1OYaTKhzEw%3D%3D",
    },
    {
      id: 16,
      title: "Git",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693373811777.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=R%2F59wGh7OxOhhj4rpziTqzFNlJ2Nr6nLHsgDNs2E17GR12aCaNlGGhw4%2BAQaxKoDZe5tPsr4YJl9lQnTvVjXqNyWLlHUDCUCHrKEWy4LRHZUIHUXE6ryB0PX62cUTlKn2%2Bfw3gxWPMvBsGctzG3J%2FSFIQIhetsSoBVuHnafHhJ1thI3aJrbuwc6Q7112GINUQ6jeSS1AQTlpQshRERYAbi7b4KRZTECUHPqf1PukES6ZpWech3Rgaxn9ldZs4X%2BjPXOithoFqQR%2Fm7oeUlAL73tl4toaA3QhR%2Bh0L3TsHZQL8qFe%2F%2BWearpFK%2Bs6uXAm6%2B%2F%2Bty9QCaDLLaGHfWyYzA%3D%3D",
    },
    {
      id: 17,
      title: "Vscode",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693374048556.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nXN01AMyHcUlm9MWKKUtLOmi4ETA8yj11kSSk8PfWHq%2BG1x1nNVewp4GRI5iRDIE7wj5O4jFL6S4up%2Bg3f1iUh4gQ3uAF%2FMTSUSqOLjyh9rJzIDLWD6K2C482TY66SasI%2Ff7mojX4bbKuNxyySVfQkPYqzad3L0KQh9Hokl%2BDXKy9SWMM5MNR9NrsbfU92FH2pqN%2FjvitfhgUluHYM5p6ER9E8TCyezX4lNQsA2B2qu2T%2FYlNeznFJxCcjK9didlEfaAllibT%2F5UL4lbWG6QhjQMWMQkDg%2BAuteSpUAgim7IfokBTHhDs9QezPZYaVhy%2FhJei%2BaaE8DMMwbxCi%2B6uA%3D%3D",
    },
    {
      id: 18,
      title: "PhotoShop",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693373935062.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=H70oEy1fuYkaY%2FaKDoBSHAMRj51RVz%2BPC6KvpJ%2BcANR2iIk93lm8Cj22%2FONP1AsxmHtJPUs1PNGAlpbnlciczU8ZGAdgGPpgFIaFV8F6e2Ip3CwOj6TxqS2ldLU%2B3hDxZf4PmOZYUGjZ9SnvrKK1yvpe%2BhGk5Di3C60UFdhTm1zIhLPR59XPmm2o5upYg4ceh3Azt37Nj%2F7P9PaeY15hUuTuBM%2FPuxb%2FKzWJMZIhEdsuYtw32F02KnxfVwY%2FEhZ36aAbRkGMvGuc7r98mrWYMbaqzL%2F1r9bBo2JCl0inXWzz6pV%2BxVPJXa8qhRV6GaR08gl3ly5fvolNBRlQn0uUTw%3D%3D",
    },
    {
      id: 19,
      title: "Illustrator",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693373847006.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TSbosii9T0oChLpjtMa4%2BTp5BE%2BiW0QKRyCDhxeBGx0cY234YSjaTEcJEBGZxM4SozoliiXd1lXy6GjAv40a737pmzpFpmhqmZnboIAcbscvmqRaJnQqup82RQ0IgKoWJWkDYQB8esR9FbIXJ167roHYDYZNBT0b61wOSL0FKFb8G8L21%2BcsLVDUvW8olaf%2Fv49dF3ZY2NIR2i1PM%2FZ4byinqfeO8Jj40PqmMKNCrjI7fb1odB4ruXnPOyV%2BJXiXRrxCFP8vWF2qV2PH%2BuBC0JuRIK0gTJK71ndmdLVbxhewBMpUbN0PBSemz6HrcRl1ttfyviWhog03wFevT9uwaA%3D%3D",
    },
    {
      id: 20,
      title: "Figma",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693373696932.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gYt6N1CWbYRi7a%2FylhfZ0NcVZu1YGXzSB7Hw7Ah315rFZplwFySQmFtJZmykhtAQCMn29v%2FQOTcIlLyAnqH6WXf4OK57aiiju9jyh7oUlaPxLMLLBMHz4NFURE0nuKTKs7rtie64Pz9%2B14d29a3nKZQvwf%2BXZQcAvMZOxotB5gtRTEJXHB7kS55X74iAViR47RY2nYgf5oKDvjBtQoRP0d7g0gZP4YP%2FdKbzyrEjCLlmNlVI9Pz1YZaDStGDwRoYBfjN3pKRpYWTGRlUSP%2BefobimH55uNb%2Fm6R1AnN0ignXIcPzOkyHnknxCpro0RXfa581ew6DNu%2FGh3ff4E1Gnw%3D%3D",
    },
  ];

  return { skillsData };
});
