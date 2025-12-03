export interface Athlete {
  name: string;
  gold: number;
  silver: number;
  bronze: number;
  isNational?: boolean;
  belt?: string;
}

export const athletes: Athlete[] = [
  {
    name: "Zeki Yasin Koçyiğit",
    belt: "3. Dan",
    gold: 18,
    silver: 4,
    bronze: 5,
    isNational: true,
  },
  {
    name: "Edanur Koçyiğit",
    belt: "3. Dan",
    gold: 15,
    silver: 5,
    bronze: 6,
    isNational: true,
  },
  {
    name: "Şuranur Koçyiğit",
    belt: "2. Dan",
    gold: 15,
    silver: 8,
    bronze: 6,
    isNational: true,
  },
  { name: "Rana Karduz", belt: "2. Dan", gold: 2, silver: 1, bronze: 0 },
  { name: "Rana Aktaş", belt: "6. Kyu", gold: 1, silver: 0, bronze: 0 },
  {
    name: "Saliha Nur Dülgerog",
    belt: "8. Kyu",
    gold: 0,
    silver: 1,
    bronze: 1,
  },
  {
    name: "Muhammet Dülgerog",
    belt: "8. Kyu",
    gold: 0,
    silver: 1,
    bronze: 1,
  },
  { name: "Muhammed Dönmez", belt: "8. Kyu", gold: 0, silver: 0, bronze: 2 },
  {
    name: "Sümeyye Ebrar Şahin",
    belt: "4. Kyu",
    gold: 0,
    silver: 0,
    bronze: 0,
  },
  { name: "Sueda Şahin", belt: "8. Kyu", gold: 0, silver: 0, bronze: 0 },
  { name: "Yiğit Alp Bayrakcı", belt: "8. Kyu", gold: 0, silver: 0, bronze: 0 },
  { name: "Betül Zeynep Yaşar", belt: "8. Kyu", gold: 0, silver: 0, bronze: 0 },
  { name: "Arsen Karasungur", belt: "8. Kyu", gold: 0, silver: 0, bronze: 0 },
  { name: "Bengü Koral", belt: "7. Kyu", gold: 0, silver: 0, bronze: 0 },
];
