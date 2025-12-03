import { useEffect, useState } from "react";
import type { Route } from "./+types/kata";
import { katas } from "../data/KataList";
import type { Kata } from "../data/KataList";
import kanji from "../assets/kanji.png"; // Kanji dekoru

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kata Eğitimi | Kyokushin Karate Tuzla - Koçyiğit Dojo" },
    {
      name: "description",
      content:
        "Kyokushin Karate kata eğitimleri İstanbul Tuzla'da. Taikyoku, Pinan, Gekisai serisi katalar ve teknik videolar ile öğrenin. Shinkyokushin Türkiye standartlarında eğitim.",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://kocyigitdojo.com/kata",
    },
    {
      name: "keywords",
      content:
        "Kyokushin Kata, Karate Kata Eğitimi, Taikyoku, Pinan Kata, Kata Tuzla, Kata İstanbul, Shinkyokushin Kata",
    },
  ];
}

const KataPage = () => {
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
      {/* --- ARKA PLAN DEKORLARI --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/4 w-[600px] h-[600px] bg-[#D92827]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <img
        src={kanji}
        alt="Kyokushin Kanji"
        className="
          pointer-events-none select-none
          hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          h-[600px] opacity-[0.03] z-0 animate-pulse
        "
      />

      {/* --- İÇERİK --- */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-[Montserrat] font-bold tracking-wide uppercase text-white">
            Kyokushin Kata Eğitimi - Tuzla İstanbul
          </h1>
          <div className="mt-4 h-1.5 w-24 bg-[#D92827] rounded-full mx-auto shadow-[0_0_15px_rgba(217,40,39,0.5)]" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base">
            Kyokushin Karate'nin temeli olan kataları, ustalarımızın anlatımıyla
            adım adım öğrenin ve tekniğinizi geliştirin.
          </p>
        </div>

        {/* Kata Listesi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {katas.map((kata: Kata) => (
            <article
              key={kata.name}
              className="
                group bg-[#232d4b] backdrop-blur-md rounded-2xl border border-white/5
                overflow-hidden shadow-xl
                transition-all duration-300 hover:-translate-y-2 hover:shadow-red-900/20 hover:border-white/10
              "
            >
              {/* Video Alanı */}
              <div className="aspect-video w-full bg-black relative group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-shadow">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${kata.youtubeId}`}
                  title={kata.name}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Bilgi Alanı */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#D92827] uppercase tracking-wider border border-[#D92827]/30 px-2 py-1 rounded bg-[#D92827]/5">
                    {kata.category}
                  </span>
                </div>
                <h3 className="text-xl font-[Montserrat] font-bold text-white group-hover:text-[#D92827] transition-colors">
                  {kata.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KataPage;
