import { useEffect, useState } from "react";
import type { Route } from "./+types/kumite";
import { kumites } from "../data/KumiteList";
import type { Kumite } from "../data/KumiteList";
import kanji from "../assets/kanji.png"; // Kanji dekoru
import { FaPlay } from "react-icons/fa"; // Play ikonu

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Kumite Eğitimi | Kyokushin Dövüş Teknikleri - Koçyiğit Dojo Tuzla",
    },
    {
      name: "description",
      content:
        "Kyokushin Karate kumite (dövüş) eğitimi İstanbul Tuzla'da. Full contact karate teknikleri, maç analizleri ve antrenman stratejileri. Profesyonel kumite eğitimi.",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://kocyigitdojo.com/kumite",
    },
    {
      name: "keywords",
      content:
        "Kyokushin Kumite, Karate Dövüş, Full Contact Karate, Kumite Teknikleri, Karate Maçları, Kumite Tuzla, Kumite İstanbul",
    },
  ];
}

const KumitePage = () => {
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
        <div className="absolute top-[-10%] right-1/4 w-[600px] h-[600px] bg-[#D92827]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
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
            Kyokushin Kumite - Dövüş Eğitimi Tuzla
          </h1>
          <div className="mt-4 h-1.5 w-24 bg-[#D92827] rounded-full mx-auto shadow-[0_0_15px_rgba(217,40,39,0.5)]" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base">
            Gerçek mücadelenin ruhu: Kumite. Teknik analizler, maç özetleri ve
            antrenman stratejileriyle dövüş yeteneklerinizi zirveye taşıyın.
          </p>
        </div>

        {/* Kumite Listesi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kumites.map((kumite: Kumite) => (
            <article
              key={kumite.name}
              className="
                group bg-[#232d4b] backdrop-blur-md rounded-2xl border border-white/5
                overflow-hidden shadow-xl
                transition-all duration-300 hover:-translate-y-2 hover:shadow-red-900/20 hover:border-white/10
              "
            >
              {/* Video Alanı */}
              <div className="aspect-video w-full bg-black relative group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-shadow">
                {/* Oynatma İkonu Overlay (Sadece görsel süs) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-[#D92827]/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <FaPlay className="text-white ml-1 text-xl" />
                  </div>
                </div>

                <iframe
                  className="w-full h-full relative z-20"
                  src={`https://www.youtube.com/embed/${kumite.youtubeId}`}
                  title={kumite.name}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Bilgi Alanı */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`
                      text-xs font-bold uppercase tracking-wider border px-2 py-1 rounded
                      ${
                        kumite.category === "Maç"
                          ? "text-yellow-500 border-yellow-500/30 bg-yellow-500/5"
                          : kumite.category === "Teknik"
                            ? "text-blue-400 border-blue-400/30 bg-blue-400/5"
                            : "text-[#D92827] border-[#D92827]/30 bg-[#D92827]/5"
                      }
                    `}
                  >
                    {kumite.category}
                  </span>
                </div>
                <h3 className="text-xl font-[Montserrat] font-bold text-white group-hover:text-[#D92827] transition-colors leading-tight">
                  {kumite.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KumitePage;
