import { useEffect, useState } from "react";
import type { Route } from "./+types/kemer-listesi";
import kanku from "../assets/kanku.png";
import Kanji from "../assets/kanji.png";

type BeltType = "DAN" | "KYU";

type BeltGroup = {
  level: string;
  type: BeltType;
  members: string[];
  beltColor?: string;
  stripeColor?: string;
  textColor?: string;
  stripeCount?: number;
};

const BELTS: BeltGroup[] = [
  {
    level: "3. Dan",
    type: "DAN",
    stripeCount: 3,
    beltColor: "#000000",
    stripeColor: "#facc15",
    textColor: "#facc15",
    members: ["Sensei Edanur Koçyiğit", "Sensei Zeki Yasin Koçyiğit"],
  },
  {
    level: "2. Dan",
    type: "DAN",
    stripeCount: 2,
    beltColor: "#000000",
    stripeColor: "#facc15",
    textColor: "#facc15",
    members: ["Senpai Şuranur Koçyiğit", "Senpai Rana Karduz"],
  },
  {
    level: "6. Kyu",
    type: "KYU",
    beltColor: "#fffb00",
    textColor: "#000000",
    members: ["Rana Aktaş"],
  },
  {
    level: "8. Kyu",
    type: "KYU",
    beltColor: "#1624c0",
    textColor: "#ffffff",
    members: [
      "Saliha Nur Dülgerog",
      "Muhammet Dülgerog",
      "Muhammed Dönmez",
      "Sümeyye Ebrar Şahin",
      "Sueda Şahin",
      "Yiğit Alp Bayrakcı",
      "Betül Zeynep Yaşar",
      "Arsen Karasungur",
    ],
  },
  {
    level: "9. Kyu",
    type: "KYU",
    stripeCount: 1,
    beltColor: "#ff6a00",
    stripeColor: "#0b13f5",
    textColor: "#ffffff",
    members: ["Bengü Koral"],
  },
  {
    level: "10. Kyu",
    type: "KYU",
    beltColor: "#ff6600",
    textColor: "#ffffff",
    members: ["Berra Erikçi", "Elif Erikçi"],
  },
  {
    level: "11. Kyu",
    type: "KYU",
    beltColor: "#ffffff",
    textColor: "#000000",
    members: ["Selim Han Tepe"],
  },
];

function BeltCard({
  level,
  type,
  members,
  beltColor = type === "DAN" ? "#000000" : "#a8550a",
  stripeColor = "#f59e0b",
  textColor = "#ffffff",
  stripeCount = 0,
}: BeltGroup) {
  return (
    <article
      className="
        group relative overflow-hidden rounded-xl border border-white/5 bg-[#232d4b] 
        p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-white/10
      "
    >
      {/* Kemer Görselleştirmesi */}
      <div className="mb-6 flex justify-center">
        <div
          className="relative flex h-10 w-full max-w-md items-center justify-center overflow-hidden rounded-md shadow-md"
          style={{ backgroundColor: beltColor }}
        >
          {/* Dan/Kyu Şeritleri */}
          {stripeColor && stripeCount > 0 && (
            <div className="absolute inset-y-0 right-4 flex items-center gap-1.5">
              {Array.from({ length: stripeCount }).map((_, i) => (
                <span
                  key={i}
                  className="h-full w-1.5 opacity-90 shadow-sm"
                  style={{ backgroundColor: stripeColor }}
                />
              ))}
            </div>
          )}

          {/* Kemer Etiketi */}
          <span
            className="z-10 rounded px-3 py-0.5 text-sm font-black tracking-widest uppercase drop-shadow-md"
            style={{ color: textColor }}
          >
            {level}
          </span>

          {/* Kemer Doku Efekti (Opsiyonel) */}
          <div className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* İsimler Listesi */}
      <div className="text-center">
        <ul className="flex flex-col gap-2">
          {members.map((m) => (
            <li
              key={m}
              className="text-base text-gray-200 font-medium group-hover:text-white transition-colors"
            >
              {m}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kemer Listesi ve Sporcu Sıralaması | Kyokushin Karate Tuzla" },
    {
      name: "description",
      content:
        "Koçyiğit Dojo Kyokushin Karate sporcularının güncel kemer listesi ve dan-kyu dereceleri. Beyaz kemerden siyah kemere kadar tüm seviyeler. İstanbul Tuzla.",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://kocyigitdojo.com/kemer-listesi",
    },
    {
      name: "keywords",
      content:
        "Kyokushin Kemer Listesi, Karate Kemerleri, Dan Derecesi, Kyu Sistemi, Siyah Kemer, Karate Sporcu Listesi, Kyokushin Tuzla",
    },
  ];
}

export default function KemerListesi() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  return (
    <section
      className={`
        relative bg-[#1A2238] min-h-screen py-20 px-4 overflow-hidden
        transition-all duration-1000 ease-out
        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* --- Arka Plan Dekorları --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#D92827]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px]" />
      </div>

      <img
        src={kanku}
        alt="kanku"
        className="absolute inset-0 m-auto opacity-[0.03] w-[80%] max-w-[600px] pointer-events-none z-0 animate-pulse"
      />

      <img
        src={Kanji}
        alt="shin"
        className="absolute -left-20 top-40 w-[400px] opacity-[0.02] hidden lg:block pointer-events-none"
      />

      {/* --- İçerik --- */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-[Montserrat] font-bold tracking-wide uppercase text-white">
            Kyokushin Karate Kemer Listesi - Koçyiğit Dojo
          </h1>
          <div className="mt-4 h-1.5 w-24 bg-[#D92827] rounded-full mx-auto shadow-[0_0_15px_rgba(217,40,39,0.5)]" />
          <p className="text-gray-400 mt-6 text-sm sm:text-base">
            Dojomuzun gurur kaynağı sporcularımız ve güncel kemer seviyeleri.
          </p>
        </div>

        {/* Liste */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BELTS.map((b) => (
            <BeltCard key={b.level} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}
