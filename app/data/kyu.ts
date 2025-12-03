// src/kyu.ts
export type Item = { text: string; video?: string };

export type KyuContent = {
  kyu: string; // "8. Kyu" gibi
  sections: {
    title: string; // "Tachikata" vb.
    items: Item[];
  }[];
};

export type EgzersizRow = {
  kyu: string;
  esneklik: string;
  sinav: number;
  çökkalk: number;
  mekik: number;
  çubuk: number;
  tobi: string;
};

export const kyuList: KyuContent[] = [
  {
    kyu: "8. Kyu",
    sections: [
      {
        title: "Tachikata",
        items: [
          {
            text: "Heisoku Dachi",
            video:
              "https://www.youtube.com/embed/fHo2rUibmak?autoplay=1&start=9",
          },
          {
            text: "Musubi Dachi",
            video:
              "https://www.youtube.com/embed/fHo2rUibmak?autoplay=1&start=18",
          },
          {
            text: "Heiko Dachi",
            video:
              "https://www.youtube.com/embed/fHo2rUibmak?autoplay=1&start=30",
          },
          {
            text: "Shizen Dachi (Sotohachiji Dachi)",
            video:
              "https://www.youtube.com/embed/fHo2rUibmak?autoplay=1&start=41",
          },
          {
            text: "Uchihachiji Dachi",
            video:
              "https://www.youtube.com/embed/fHo2rUibmak?autoplay=1&start=52",
          },
          {
            text: "Zenkutsu Dachi",
            video:
              "https://www.youtube.com/embed/fHo2rUibmak?autoplay=1&start=131",
          },
        ],
      },
      {
        title: "Tsuki",
        items: [
          {
            text: "Seiken Chudan Tsuki",
            video:
              "https://www.youtube.com/embed/PZe7HHlLl54?autoplay=1&start=3",
          },
          {
            text: "Seiken Jodan Tsuki",
            video:
              "https://www.youtube.com/embed/PZe7HHlLl54?autoplay=1&start=128",
          },
          {
            text: "Seiken Ago Uchi",
            video: "https://www.youtube.com/watch?v=nGDLow_OBZk",
          },
        ],
      },
      {
        title: "Uke",
        items: [
          {
            text: "Jodan Uke",
            video: "https://www.youtube.com/watch?v=1i8O1RYJzCA",
          },
          {
            text: "Gedan Barai",
            video: "https://www.youtube.com/watch?v=ktnTo2bhPmI",
          },
        ],
      },
      {
        title: "Keri",
        items: [
          {
            text: "Mae Geri",
            video: "https://www.youtube.com/watch?v=OyCzzfIMBss",
          },
        ],
      },
      {
        title: "Ido Geiko",
        items: [
          {
            text: "Zenkutsu Dachi’de ileri-geri kombinasyonlar (Tsuki-Uke-Keri)",
            video: "https://www.youtube.com/watch?v=LqCgasY-cfA",
          },
          {
            text: "Zenkutsu dachi –Gedan barai → Oi-tsuki chudan (Sagari)",
            video: "https://www.youtube.com/watch?v=avKTSf_H-zg",
          },
          {
            text: "Zenkutsu dachi –Gedan barai → Oi-tsuki jodan → Oi-tsuki chudan",
            video: "https://www.youtube.com/watch?v=XJrtsaqVvOY",
          },
          {
            text: "Zenkutsu dachi –Gedan barai –Gyaku tsuki → Gyaku-tsuki chudan",
            video: "https://www.youtube.com/watch?v=1ZIZoSFU7iE",
          },
          {
            text: "Zenkutsu dachi –Kamete → Mae Keage (Sagari)",
            video: "https://www.youtube.com/watch?v=8F5FGlF3qDY",
          },
        ],
      },
      {
        title: "Kata",
        items: [
          {
            text: "Taikyoku Sono Ichi",
            video: "https://www.youtube.com/watch?v=FcapF3V7MyY",
          },
          {
            text: "Taikyoku Sono Ni",
            video: "https://www.youtube.com/watch?v=faaZN2OemVs",
          },
          {
            text: "Sokugi Taikyoku Sono Ichi",
            video: "https://www.youtube.com/watch?v=faaZN2OemVs",
          },
        ],
      },
      {
        title: "Kumite",
        items: [
          { text: "Jiyu Kumite : 30 sn 1 Kumite" },
          {
            text: "Ippon Kumite – Tori: Jyuji Gedan Barai – Mae Geri | Uke: Gedan Barai – Gyaku Seiken Chudan Tsuki (Kiai)",
          },
        ],
      },
    ],
  },

  {
    kyu: "7. Kyu",
    sections: [
      {
        title: "Tachikata",
        items: [
          {
            text: "Kokutsu Dachi",
            video:
              "https://www.youtube.com/embed/fHo2rUibmak?autoplay=1&start=94",
          },
          {
            text: "Nekoashi Dachi",
            video:
              "https://www.youtube.com/embed/fHo2rUibmak?autoplay=1&start=109",
          },
        ],
      },
      {
        title: "Tsuki",
        items: [
          {
            text: "Uraken Gammen Uchi",
            video: "https://www.youtube.com/watch?v=x2_BuXU1FF4",
          },
          {
            text: "Uraken Sayu Uchi",
            video: "https://www.youtube.com/watch?v=s6dR1xHV9Xo",
          },
          {
            text: "Uraken Hizo Uchi",
            video: "https://www.youtube.com/watch?v=fd75jFo0VUU",
          },
          {
            text: "Uraken Mawashi Uchi",
            video: "https://www.youtube.com/watch?v=BuR9IP78aWA",
          },
        ],
      },
      {
        title: "Uke",
        items: [
          {
            text: "Chudan Soto Uke",
            video: "https://www.youtube.com/watch?v=xhvwVMspBxU",
          },
          {
            text: "Chudan Uchi Uke",
            video: "https://www.youtube.com/watch?v=NeUsLDv60TI",
          },
          {
            text: "Uchi Uke Gedan Barai",
            video: "https://www.youtube.com/watch?v=C7a-jjdG2BI",
          },
        ],
      },
      {
        title: "Keri",
        items: [
          {
            text: "Hiza Geri",
            video: "https://www.youtube.com/watch?v=TO7MPADoqbg",
          },
          {
            text: "Kin Geri",
            video: "https://www.youtube.com/watch?v=5R0RD8EExDU",
          },
        ],
      },
      {
        title: "Kata",
        items: [
          {
            text: "Taikyoku Sono San",
            video: "https://www.youtube.com/watch?v=zfdfDE2djGc",
          },
          {
            text: "Sokugi Taikyoku Sono Ni",
            video: "https://www.youtube.com/watch?v=jDu6eYUhj0g",
          },
          {
            text: "Sokugi Taikyoku Sono San",
            video: "https://www.youtube.com/watch?v=CYsFkEpLA8k",
          },
        ],
      },
      {
        title: "Kumite",
        items: [{ text: "Jiyu Kumite : 30 sn 2 Kumite" }],
      },
    ],
  },

  {
    kyu: "6. Kyu",
    sections: [
      {
        title: "Tachikata",
        items: [
          {
            text: "Kakeashi Dachi",
            video:
              "https://www.youtube.com/embed/fHo2rUibmak?autoplay=1&start=116",
          },
          {
            text: "Sanchin Dachi",
            video:
              "https://www.youtube.com/embed/fHo2rUibmak?autoplay=1&start=64",
          },
        ],
      },
      {
        title: "Tsuki",
        items: [
          {
            text: "Tettsui",
            video: "https://www.youtube.com/watch?v=cpb6f9_8LNk",
          },
          {
            text: "Nukite",
            video: "https://www.youtube.com/watch?v=E6g2BLi5AIo",
          },
          {
            text: "Shotei",
            video: "https://www.youtube.com/watch?v=9NKkhN_iaDo",
          },
        ],
      },
      {
        title: "Uke",
        items: [
          { text: "Morote Uke" },
          {
            text: "Mawashi Uke",
            video: "https://www.youtube.com/watch?v=xV-5a1RK0TQ",
          },
          {
            text: "Shuto Mawashi Uke",
            video: "https://www.youtube.com/watch?v=OuBo39C3fmo",
          },
        ],
      },
      {
        title: "Keri",
        items: [
          {
            text: "Mae Keage",
            video: "https://www.youtube.com/watch?v=8f0CQWzstsY",
          },
          {
            text: "Uchimawashi",
            video: "https://www.youtube.com/watch?v=27ennF0v544",
          },
          {
            text: "Sotomawashi",
            video: "https://www.youtube.com/watch?v=mWwokuXk7D8",
          },
        ],
      },
      {
        title: "Kata",
        items: [
          {
            text: "Pinan Sono Ichi",
            video: "https://www.youtube.com/watch?v=_B_m8pzi33Q",
          },
          {
            text: "Pinan Sono Ni",
            video: "https://www.youtube.com/watch?v=YwD7nzLAmxQ",
          },
          {
            text: "Sanchin",
            video: "https://www.youtube.com/watch?v=YwD7nzLAmxQ",
          },
        ],
      },
      {
        title: "Kumite",
        items: [{ text: "Jiyu Kumite : 60 sn 3 Kumite" }],
      },
    ],
  },

  // İstersen burada 5., 4., 3., 2., 1. Kyu içeriklerini de aynı formatta ekleyebilirsin.
];

export const egzersizTablosu: EgzersizRow[] = [
  {
    kyu: "8.Kyu",
    esneklik: "Ayaklar açık, başı yere değdirmek.",
    sinav: 20,
    çökkalk: 20,
    mekik: 20,
    çubuk: 3,
    tobi: "Kendi boyuna hedefe vurmak",
  },
  {
    kyu: "7.Kyu",
    esneklik: "Ayaklar açık, başı yere değdirmek.",
    sinav: 30,
    çökkalk: 30,
    mekik: 30,
    çubuk: 5,
    tobi: "Boy +10 cm hedef",
  },
  {
    kyu: "6.Kyu",
    esneklik: "Ayaklar açık, omuz yere değdirmek.",
    sinav: 40,
    çökkalk: 40,
    mekik: 40,
    çubuk: 8,
    tobi: "Boy +15 cm hedef",
  },
  {
    kyu: "5.Kyu",
    esneklik: "Ayaklar açık, omuz yere değdirmek.",
    sinav: 50,
    çökkalk: 50,
    mekik: 50,
    çubuk: 10,
    tobi: "Boy +20 cm hedef",
  },
  {
    kyu: "4.Kyu",
    esneklik: "Ayaklar açık, göğüs yere değdirmek.",
    sinav: 60,
    çökkalk: 60,
    mekik: 60,
    çubuk: 12,
    tobi: "Boy +30 cm hedef",
  },
  {
    kyu: "3.Kyu",
    esneklik: "Ayaklar açık, göğüs yere değdirmek.",
    sinav: 70,
    çökkalk: 70,
    mekik: 70,
    çubuk: 13,
    tobi: "Boy +30 cm hedef",
  },
  {
    kyu: "2.Kyu",
    esneklik: "Ayaklar açık, göğüs yere değdirmek.",
    sinav: 80,
    çökkalk: 80,
    mekik: 80,
    çubuk: 14,
    tobi: "Boy +30 cm hedef (Tobi Ushiro Geri / Mawashi, sağ&sol)",
  },
  {
    kyu: "1.Kyu",
    esneklik: "Ayaklar açık, göğüs yere değdirmek.",
    sinav: 100,
    çökkalk: 100,
    mekik: 100,
    çubuk: 15,
    tobi: "Boy +30 cm hedef (Tobi Ushiro Geri / Mawashi, sağ&sol)",
  },
];
