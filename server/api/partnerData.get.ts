export default defineEventHandler(() => {
  const partners = [
    {
      id: 1,
      title: "愛皮皮",
      enTitle: "Appluco",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693375316034.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Tf%2BTxODi%2F6Q%2BA69uyPT42TLulgEE%2B316W4jWoRXWJloqIvU8ZOUfTVQ2tLfJvVYiOOPpH3rGt7rv95I6poBERyfMNDO9ksaP9x1h10G2sDMVx4gctBXEMpdIoFdSc7Z2gAm%2BYGMfHLkWv5aRCWeGHqkXgc7%2BCnTxMThxwFXhSESigC%2F7jY1OmDCrsdfqPxRLkSQ8NdRREX4X63IrBQX21w%2F4S0aK5L60h%2FiDwJk0X2GUth7JatGxr3kVkCfmCjvhtIE9w0fBbTPrx9QfTNHdEmwn5Ba8gjcc6NJNvTzdPsQEFf%2BuUm9IeQyfhWRu75PT81kc3x1Jd%2BOzCFAsRv6uGg%3D%3D",
    },
    {
      id: 2,
      title: "東和製油",
      enTitle: "Dong He",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693375456231.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hXI%2BpDjQD3drE5z81dJfw%2Fw%2BUoBhdIE4ndOeCZqyd9y3q%2Bdbo%2FNSMvL475ntK6xAJ2pS%2BUAtzvukb27fGgRLyJWEBpv7wv9N8Kwb5nAzrul0EcfCNgBEf%2B7flllDfi9XAgF7ntyxD81EAJ9%2F5wEd%2B9do3MGqZYtqUyIknd5jBCLYT1E9w4YP2LZz2LdHjsarrKSFvuEZEFElevahJ0WnvSm5cWMgnDaJ6bWvRfQLIk5Tow1j1EjHll71tmxzLfsDaQeAE4GUZ69ljAXV5S%2Fpw4eMHjlMW3Dc693U4b1CymF7Jt1rumxFUt3lck0wvFfLQspmgvFUdIh1seVcQ9M03Q%3D%3D",
    },
    {
      id: 3,
      title: "全球數位娛樂",
      enTitle: "GDE",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693375491799.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=e8RxcfmX4BpwI%2BsE8rhva%2F27ZuCTw%2BITcD%2B3v1ztcO9JbMZTdGa8zdFEiKGOF6iO1dewiIAcwq%2BJpaNecL%2BH8GB7wpTvRKGf4S6OF%2BiNGydNXPdVb7vOom%2F53DKSWDTFrJWPiwUeBecxaaFFymjIhhmlXSL1Vw4nEISS2bt2c7KSAJo48eBnEvCUEkKfjJO2YO%2FNC8I5x91pobfveysCjcwVJFjkIV8wHT21X6N4fzjN%2BZ54Vx6fudlz%2F2a%2F7gYeHuoiLgZ8xKBNBbuiMkoszTgFnJMm9CAZUAEdl8agpMGmgVuefiocSrFdw5ZfZncvP0nf9Izf2zlTZCCQ5HFCew%3D%3D",
    },
    {
      id: 4,
      title: "吉羊文創",
      enTitle: "Ge Young",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693375510270.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=h8GU5rG483NbZYyRjrihbwqtW5gg3nkZccJIsVddvDGsd0aX6jeMA3XetpioX7ByxLK1rOxekws1b1IYr8ByUcz4FRkcq2cmlrNhJRh%2F1teX8LzEMW6iDd%2FBjCyPlXK1Qold4GRaGdJ77L7y7mkHAo8oreb3QTFYIwIAYmBMgnL2VjLiYNfs2KhUVay2Eu7%2Fe3T2%2F%2BF6SdHYa95LcDqIhGL47QWcCom1x%2FRnqSnJQ7%2FcKG24%2BiT8dgob1ULYmTWutZ2XZQlg%2Bc2zSxK4OfacSAo1IToLOlg%2BDdIU%2FIwQlliGq%2BoPTwzqLVtvy6m270qbo2wPL1mnCFQ4c%2FWUF1c7zA%3D%3D",
    },
    {
      id: 5,
      title: "旅見旅行社",
      enTitle: "Tst Tour",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693375529633.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=QOxFr53VxTIa8edqsr1uP0D9El%2Bn%2FWIrYME0LzIXSC0pUJhlRrXM6BJSdGjAe9o8RiwkWij0i%2FJc1Xubp9rXW4DjXTRSOPnMolFjBhfeGvy2Q88ZAeN1FDrqKpOs2z1CRRG98qsYJ%2BuexpggVFPRhytnveFDsnTDZK%2FZHzsjCXHRWO9IZm573du2Si5V7H6pTYdbzUOoypIWkewg3tC5JDE%2BzQaG%2FRF6oBDVLna5UUzVAxTSXl6F%2BtIZ0MmaGQRTd0kDcYi8uby8IS3Uvo%2BqzftuWTSNAbwRdPAJ5PG%2F9jOvRbvh2hVI2ej5B61zdWDSJOULYsjzgKGaSwwYiQayoQ%3D%3D",
    },
    {
      id: 6,
      title: "愛月嫂",
      enTitle: "Iaunty",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693376461706.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=dZHK7gTLOe0XMq6CqffSkdvfomMsr4rlMQQDXgU2BTmCgpAmgoNOayzBZpCHddW1yJ5xPOE2xbNNm9U8RwOcvMa5zkLRsEw2AZ%2BniHkUuaKevoTl3gswn3uwI3F2nXMgpRQSWc79uL4GRxWijG8N9WBVE2TKwE5U%2FhCmE%2B3zLu3jF2vt8E%2FZ3VvcdMfMTaMgel6JnDynfUsYyo84HQl6okB7GXvABN%2BGPLmCaA2zF7k1ykPDwvlIMCj2IIdwVQR5S3bAhXmQ0bvsVxXL6p0htDVAe36BDaJ8YGmlQaKFMf4FPMNdFC8ofVSUZZoNdEUhDNFP8aEprVUodIhapgr61Q%3D%3D",
    },
    {
      id: 7,
      title: "自遊智載",
      enTitle: "Tournii",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693376477663.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qhqtvX7ygo1EsI2bPQPBjJ622MmpcgFiN%2BlSaVCYOaGVUZAU3itdzNwWm%2FFn6hD8Kz%2FDBGGoklFEVSTXPcXRaIB%2FIijtxb%2FE0KhDazJSPwcdbMsIzyWIkLOmB6o%2BJExqJiZUmHeY2WWqFgvYNy2Le3m2wMxeOTDq9CbqJwdy8Nk5Lo1KbcB%2B%2B6mzUHA4ynVgOj8FxFxNaYlZT8M5rpjTyct1W55pvJL5HE7juHoJ02wZzujS%2FefaB1t%2Fst78TwBqqzufqzwYWZ2tJEXtSAQ%2FX5XpiBDbe7hRyJrbk5BBqQb%2BsfQjtnmgFEYmXvtFf4caUCXeh%2By%2FMCsLitXm%2Fv8ikQ%3D%3D",
    },
    {
      id: 8,
      title: "宣媽媽",
      enTitle: "Merimommy",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693376493072.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=U5bkoymzpDcA0WQFic5WEQ6EWmyw2eKIZnqLBSjdyYuO63T8Aq2E7pV2MeQJ4gXLs3juqZWESMHIB%2Belr2ytYgBFU84VZssacdTcg%2BBn2tlEVV35QdQBK4%2BC5SUZcDsqxzufUrBo6up7N6%2Fj0wwtX%2FDqgdAE%2B6BBFIVjs8uTyDezFJ9ndycp9e1GcrTblvX5RQPlImngN6Xo5MZaWL%2BRUTmfg49tjdH6iC40W%2FRojkiwM5KzKrh19W5g2Z7PFGos3zS50jD4QCokDn0omAvfQlKHjGnqwNlR2%2BHnpt%2B6T4%2BX8fDAAMK6JdGtyAw%2B%2FARXQ60B75uDDvvq6diiAkyylw%3D%3D",
    },
    {
      id: 9,
      title: "安德生醫",
      enTitle: "Andlife",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693299218863.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fBEUNPqTrNXi3C3naUkFhboLGePBOd4ZfW5snp6%2FwqzY3cr9iiOZwx4Z%2BGePbDZxQV2qF5BHFbwxH2A2U9u0vJbRgPrWUnf1NFp5f%2BDdE09VjVu8uPSlrY16darTLCxo86HdbXDsGybLAGAGpUQmiI49dCJ1mzh3ohLFa2quiwPEuUwpWM%2BERF51RYlIHi02bBCcKaDQXzwPjRqk6WNxHfFXPLSpQNuv6umksqKSBUYiOhgrX02o6Z1hbApg5JkKsArMVlU7k98Ycr8DAShTNVmkOq7D6Xn0eUO0y0hoAtr4fuOSt2Lod5qoNtAxUkuWG5HzFCUNVBKL0a8ZEItdXw%3D%3D",
    },
    {
      id: 10,
      title: "育晨國際資訊",
      enTitle: "Yuchen",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693299266522.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mkj%2FKtL2kZKKaeHzQkthD1fpc2mBLuRA8A1erwz0zWXO5mQMR99JW4QNi7SNDMn2WpXFLwiJogUnGuBfWzOhbxvCzggNW4%2BrD8kyHBzwQZoCcUUA50h%2FkqTGeq2hjqdsFdEc6OsNi208dhQdkppkU%2Fbp7ZVylTJRgeDikfOWhjgAyZ9WApxVLrGlqMFfzLl92adgkfbzWVvz0GUoDuBdFK%2BFY0jPJU46BnV3HgeWy3p9zdo0dzBkgRJYB6wlt73GOBeB68Ljsfoo6Yo1SW6wWtom4PiXILeeLaXyF4SRUAJsoYITNzW3%2F%2F9q1Z6BT5M3CUVl2xuLJEABg0NWICG1nA%3D%3D",
    },
    {
      id: 11,
      title: "金繪國際",
      enTitle: "Kin Hei",
      logo: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1693299417584.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WoRd96qZc2ahtI86JDRQf3x7WzdmSUpnUQBaXf4mDP8drqiiTfV99jVqxwYesFTv7pAGEtfJPISVZyW0iHialjNo7kMm4Uu4ISa2iqH7HsySs8ij35n6TKOC5LhKWoSqNJ7v9o3v95nGYx9bZVqBE7jPIwJnuCZmI7ycYWpsmJXKzDBfOif5ETcuh6vwiHOWVTkFYr%2BBlZ16MpYQn2dAr6TsWdy%2F3GO5TqGpHgMFX9%2BCoQS0H%2Ftx6jH2iLl13EWv6nfXkW3F%2FRwhynDCjpiwZBCGxwby2FjhwHVpH6ow91leCC9dIybLuBN3KZEtJiD6ydSz2f2askXA0pla9GIBxw%3D%3D",
    },
  ];

  return { partners };
});
