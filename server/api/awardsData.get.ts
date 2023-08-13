export default defineEventHandler(() => {
  const awards = [
    {
      id: "1",
      largeURL:
        "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1691405736767.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gf8YpfgwXz48uB5zTgj%2BzgkpY%2FNWaJh3YxMYIUKX1IlfHt8YJ5IlLpuPZIT5Z6oaPYMOH%2FVUVnWcpgtunLCBsg%2B6b4yE%2Fhg%2BBfq2uipNh5TRvUZdN1PbAZP6oHEOzhKuMtslV7wsqhTGK0mggVmmIlbssrbyrEKox9fBJiFlpOIDweLR7z9UhRL5%2FAj1C4mhomZvtxesaf260lBRgNaK4exaxikJLU%2F4yW9lbYyDRjkqvSUf40DvVl2eZWns%2BipMVw0SEEmDMZl%2B2UmV9J%2FLO4GjWgjl7aBAFGuOXziHH%2B775v2KWvL9XIJbYmUZ9b3HHrgtvfrbm%2Bbjbxjtvl54mw%3D%3D",
      thumbnailURL:
        "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1691405759908.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mOmrDCrO%2F7fukn5F2DRa6MBiIT%2FPhMz16cgrEDMX6OnGc2SW7HDDWwnoIHkNS92spi2wSWusoiDeWmgfl1aJBvBk4wTTr3kgUKVR0q3jJw2Nk%2FvieIdqB%2BWkZXU8j6U5liNtxZT4BswwqBlqEE56esPX8uiOVanGo5CU1IEvF8PWDO%2BXvK1Bl32CAOcZM2m8ITlv0dtdPnfq5p3GoyVzyVCcLkBLudJAr6aJ34TuIevWaS0%2B8CHVCbWdIPQm%2FuRzHXgw052M%2BDec7kp5rNJ4XymUZb1WpKgQjULkOd413vexW9iIcqakP%2FH0DI%2B8U3R5VNUGH5W0rbk8YZJ6zNkwkQ%3D%3D",
      width: 1200,
      height: 848,
      alt: "Vue 3 作品實戰班",
      enAlt: "Vue 3",
    },
    {
      id: "2",
      largeURL:
        "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679562280786.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mF7Z%2BOLwYsYtBzurHBh40P1fx%2FLLJMFgKIcAsFABSgM%2FA%2FCdhtxVPOqbq%2Fl7xlPAIv%2BxxWeH5rSAde0dcqIQ%2B0XQmw5iMoYmZ40acwMjYVPhnbnofEWJe%2BWGe6aVV4Mh6ES1geJ4j0qaMc%2BXa4thOapu04daehToO78Wbe031Idf6IudGmWHnTXiHN6FV8Ar00IL9mJZA5z5V%2BC19XS5Sk2EYRDhzAnq51DkoxHZKFpO5JKZcf8udw3Ttn95JKeY8vRpw%2FkAQi%2FIbretQN4eMIQ205fZ9Et59VFJvdR70cwgmNwn7HrapPB96QiF9eq39sa924vLYGaUllpQfaSGmw%3D%3D",
      thumbnailURL:
        "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679562160287.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iNP5nNByMEhQfgDHNIjdFd297TmICsvD3hZHZcqTK5HuQFj51gXjmY%2F8JEcaurn9ucxB3oTjUcbxThE91hMBZAYwfHf%2FdIgiivS5scikeLEY48Qx7xnNSwlGQ%2BNfX0fAoRWew66Z%2BuoVcjNPE96fBj0vqmYIP8inh4ufnsfpSGRnLCxZcvilxli%2FigJfm1vsvboizCwpA5UGauxP2zS1E1HmcItErHqWwHmft5um1Rmp1LhXAaCU05EySaNwikavjXVf0bhror5xW0rIjs%2FwgOe66JO3k%2FbRz3IUPkxMMF1JzlF0f4uV7zm67WgDgXPNyVUYg1PVP2Bup9vR000TFg%3D%3D",
      width: 1200,
      height: 848,
      alt: "JavaScript 工程師直播班",
      enAlt: "JavaScript",
    },
    {
      id: "3",
      largeURL:
        "https://storage.googleapis.com/vue-course-api.appspot.com/letcla/1664451946882.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Yk7vzZjDsFeYcrp3Sx7qYDAP%2BmcZFUTutfkDx4RUz1mCQ5hf%2BN7%2BuXFGZo0TVl4C5w%2FK1XiAnhrXhhR70HacfkkO8TNB%2F6o3maDzJWI6WPoTSANndnzrNVY96L8y4NO4WhPP6wFVIpJLyfmkBglSuN8B%2F4TlluvMflC%2BHAvAzWvov7AGdu9Q8iZ0ePRmccBZzjDYJuB%2F2gft2NYsZ52F3E4AReImvXF3PfbhgO8qWTcdEc23Dg8S3CeHMXe9ai8gsFVaTvwTc32c0Il8cY1op7vTH1agwNKnvVQZ1ViYBSqDXu1w5b00vkQZ7EYfG2d6jqP1tSxB5wyZFj9yZAeO4g%3D%3D",
      thumbnailURL:
        "https://storage.googleapis.com/vue-course-api.appspot.com/letcla/1664451984632.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=SRdbIw9W6ubW4Fx1yTxEFKrFKS9r6UCO6EKNd9PBxO65YTfQuMXsIUTEgp%2BoJ9NKspDnqXmf4OOUzs3rns8mQfgtrW%2FNa6a8C1oYaOeJFsHSTr3K6a6pVA0yAjKsjI2oqaN%2BrKi6h6HZxP8ni4n5wqIBDeM7JgLnJf2BeqTRMWCBRO9xUxAt7KRctg19o4%2B49ZWww4zWDXXapBtcgrJoz5kHvXr8vNvkQCr3xI%2BKWrnRVSVixUf7dcu4XfvX1ZFijW3O%2BHY10aTodB9jtFb2vszBguX9B6MnHyPRFQ83M0jeFMhG23b7aNxsP7PRIN12tOst2gvVNF6sbJ5ijcZ6Ag%3D%3D",
      width: 1200,
      height: 848,
      alt: "網頁切版直播班",
      enAlt: "Web Page Layout",
    },
    {
      id: "4",
      largeURL:
        "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1691406780161.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bWxktommAf8iaY36jEgS6dRflbwMYOWlilRw1z9oRsXm9IELY7BojH8A0fT6cEBToZhEWYCf1Gp2zSQ3tY1sPOeepXcVDn6kEwFnwZIjgTyp8yPLO3xvJnFGqiQZUJoHj6jEO%2BqyFfLIMsTtexq%2FeRWQVpH%2BtJ5VU2sNLTtrkvOM12f50mKiMp6e696ikhIDFzZ42JjyTEz%2FPY4ym2L1tOgGuQFFeK%2BHpmC8vmi%2Bjd%2FQKI8ZGDuxDNO8fD%2Bw%2BI6J9raS62y6rMs17QSzt2r58vJ5pjfZYQJbsHxygDdlNBfCRWJtKCTOXKwkeNMRh92AClleh8JLSVkLl%2FBhq0fjBw%3D%3D",
      thumbnailURL:
        "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1691406883755.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mzJEnipnS2Nki%2FTdI05QKDnvKfz%2FDmDrswEVHeoU1KjbxqXr3O2sg3f6TXdkJOuO8BG68JQ6SJi3oRqdoahGeHVMPgDY%2BU26gPsQ3xOUWYwf%2FOOZxJDHsWLKnB%2FQscWWz4%2FgQM8QoWxNFkOfnSRQz2KcX96xm2NGrY6P6c6%2Fta8w%2BSlmtuqldFt0elGu7ACBSj4Ol3Mvk4pOU5otA6lbTUYWfvvprVDsTSshessBq2sfs3gVJZEWvOuTOhAINw3I98h%2BqQUXXTb7yttcL%2BfRCLpdDRljYRIXvBGMYl55ubGH4q11bkA%2FGC1QAEJ%2FeBEnwxOzxaJRY12TWaz0FcvKDw%3D%3D",
      width: 1200,
      height: 675,
      alt: "21 天 Figma 線上實戰營",
      enAlt: "Figma",
    },
    {
      id: "5",
      largeURL:
        "https://storage.googleapis.com/vue-course-api.appspot.com/letcla/1656924125268.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iJEm3GMqdP91AItDp4PYkDyGQm2ceu5PW96OLdohIbFcinWOHtrq7qlyIS%2BHHEQbfdoGyU7qN2cQB7HZPPRD6FYeyy3B3gQBp0A5qgnr176UMltuExfyhbLY8TY2lSv9mDXRDawaCEnmGj2bPkZWRJb52wQqqyaBZ0HgeAZ8xx7A0FqN3MztxvrfUItvH9ldem11M4xDoBqG90ewptvpsttke5u9As4AUlL7cNeDNfH%2BsZHj444LLOIOAxjjfcGA2lE1kJq1RxBHbciJrqwTGVuY6zwFjb9CeJvzUJebq9bTIY54546Q2hrTGuE%2FTQIQlRyBABg6OhquiFHhoKtpRw%3D%3D",
      thumbnailURL:
        "https://storage.googleapis.com/vue-course-api.appspot.com/letcla/1656920994505.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CPReCBQCfH5TqlWAq6jchVSEObk46g5MeE6BJE3G2%2Bvq95Nl9AKo%2BhGjf5Il9IM4TTCYTfXIjPy7qfK3Z5foiz5VWMeYuBomNUOuy4lpwy0%2BffqY%2Fgzh%2Be0opkVMHW60s1sBXKE0hoGa1dA%2FRJ%2BacupxY6We4Co2R8kMp1gcYLADJakusqH8JuskA41HTZNUvWCm0P%2BwabXKuabA0xlvAoYGLomgHBSa5jCcrFaJRklyd1n5a%2B9UGxaF51jxa1PUe%2BqdnRE6m2og32f2AobyvH%2FjQMSaOXq8RvC6aMoIM76lGmOm%2Fv%2FQf0HqbYqTtY5%2BubLR0X5nooK94kdFa7KXKQ%3D%3D",
      width: 1200,
      height: 1732,
      alt: "打造設計說服力",
      enAlt: "Creating Persuasive Design",
    },
  ];

  return { awards };
});
