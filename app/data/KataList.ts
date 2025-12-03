// components/KataList.ts

export interface Kata {
  name: string;
  youtubeId: string;
  category: string;
}

export const katas: Kata[] = [
  {
    name: "Taikyoku Sono Ichi",
    youtubeId: "NCS6QB3ODnM", // YouTube video ID'si
    category: "Temel",
  },
  {
    name: "Taikyoku Sono Ni",
    youtubeId: "W-y0Myy8i9Q",
    category: "Temel",
  },
  {
    name: "Taikyoku Sono San",
    youtubeId: "5j1i4LHSet0",
    category: "Temel",
  },
  {
    name: "Pinan Sono Ichi",
    youtubeId: "WejnMH3Q21w",
    category: "Pinan",
  },
  {
    name: "Pinan Sono Ni",
    youtubeId: "6JLhRJdzJyA",
    category: "Pinan",
  },
  {
    name: "Pinan Sono San",
    youtubeId: "HqxrJFDqCbw",
    category: "Pinan",
  },
];
