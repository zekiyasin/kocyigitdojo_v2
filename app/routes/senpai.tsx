import { useEffect } from "react";
import type { Route } from "./+types/senpai";
import şura from "../assets/şura2.jpg";
import kanji from "../assets/kanji.png";
import rana from "../assets/rana.jpg";

interface SenpaiData {
  name: string;
  rank: string;
  description: string;
  image: string;
}

const senpais: SenpaiData[] = [
  {
    name: "Senpai Şuranur Koçyiğit",
    rank: "2. Dan",
    description:
      "Kyokushin Karate'de yeni nesil sporculara rehberlik eden, deneyimli bir antrenör.",
    image: şura,
  },
  {
    name: "Senpai Rana Karduz",
    rank: "2. Dan",
    description:
      "Kyokushin Karate'de kadın sporcuların güçlenmesine odaklanan bir antrenör.",
    image: rana,
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Senpai Şuranur Koçyiğit & Rana Karduz | 2. Dan Kyokushin Antrenör",
    },
    {
      name: "description",
      content:
        "Senpai Şuranur Koçyiğit ve Senpai Rana Karduz, 2. Dan Kyokushin Karate antrenörleri. Yeni nesil sporculara rehberlik eden deneyimli eğitmenler. Tuzla İstanbul.",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://kocyigitdojo.com/senpai",
    },
    {
      name: "keywords",
      content:
        "Senpai Şuranur Koçyiğit, Senpai Rana Karduz, Kyokushin Senpai, 2. Dan, Karate Antrenör, Kadın Karate Antrenör, Kyokushin Tuzla",
    },
  ];
}

const Senpai = () => {
  // Sayfa açılışında en tepeye git
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // Arka plan: Kurumsal Lacivert (#1A2238)
    <section className="relative bg-[#1A2238] min-h-screen py-20 px-4 pb-16 text-white overflow-hidden">
      {/* Arka Plan Dekoratif Efektler */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#D92827]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      {/* Ortadaki silik kanji */}
      <img
        src={kanji}
        alt="Kyokushin Kanji"
        className="
          pointer-events-none select-none
          hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          h-[600px] opacity-[0.08] z-0
        "
      />

      {/* Başlık Alanı */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-[Montserrat] font-bold tracking-wide uppercase">
          Kyokushin Karate Senpai - Yardımcı Antrenörler
        </h1>
        {/* Kırmızı Çizgi */}
        <div className="mt-4 h-1.5 w-24 bg-[#D92827] rounded-full mx-auto shadow-[0_0_15px_rgba(217,40,39,0.5)]" />
      </div>

      {/* Kartlar */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {senpais.map((senpai, idx) => (
          <article
            key={idx}
            className="
              group bg-[#232d4b] backdrop-blur-md rounded-2xl border border-white/5
              overflow-hidden shadow-2xl
              transition-all duration-500 hover:-translate-y-2 hover:shadow-red-900/20
            "
          >
            {/* Görsel Alanı */}
            {senpai.image && (
              <div className="overflow-hidden h-[400px] relative">
                {/* Görselin alt kısmına linear (Yazı okunurluğu için) */}
                <div className="absolute inset-0 bg-linear-to-t from-[#232d4b] via-[#232d4b]/20 to-transparent z-10 opacity-90" />

                <img
                  src={senpai.image}
                  alt={senpai.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top"
                />
              </div>
            )}

            {/* İçerik Alanı */}
            <div className="p-8 text-center relative z-20 -mt-20">
              <h3 className="text-2xl font-[Montserrat] font-bold text-white mb-1 group-hover:text-[#D92827] transition-colors">
                {senpai.name}
              </h3>

              <p className="text-[#D92827] font-medium tracking-wider text-sm uppercase mb-4 font-[Montserrat]">
                {senpai.rank}
              </p>

              <div className="w-12 h-1 bg-white/10 mx-auto mb-6 rounded-full" />

              <p className="text-gray-300 leading-relaxed font-light text-base sm:text-lg">
                {senpai.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Senpai;
