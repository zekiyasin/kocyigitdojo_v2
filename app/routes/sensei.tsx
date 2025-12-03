import { useEffect } from "react";
import type { Route } from "./+types/sensei";
import edaImage from "../assets/eda.jpg";
import yasinImage from "../assets/yasin.jpg";
import kanji from "../assets/kanji.png";

interface SenseiData {
  name: string;
  rank: string;
  description: string;
  image: string;
}

const senseis: SenseiData[] = [
  {
    name: "Sensei Edanur Koçyiğit",
    rank: "3. Dan",
    description:
      "Kyokushin Karate'de uzun yıllardır aktif olan, sayısız sporcu yetiştirmiş deneyimli antrenör.",
    image: edaImage,
  },
  {
    name: "Sensei Zeki Yasin Koçyiğit",
    rank: "3. Dan",
    description:
      "Milli sporcu, antrenör ve hakem olarak Kyokushin Karate'nin gelişmesine katkıda bulunan usta.",
    image: yasinImage,
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sensei - Koçyiğit Dojo Karate" },
    {
      name: "description",
      content: "Koçyiğit Dojo Karate Kulübü'nün deneyimli sensei ve antrenörleri hakkında bilgi edinin.",
    },
  ];
}

const Sensei = () => {
  // Sayfa yüklendiğinde en üste kaydır
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // Arka plan: Kurumsal Lacivert (#1A2238)
    <section className="relative bg-[#1A2238] min-h-screen py-20 px-4 pb-16 text-white overflow-hidden">
      {/* Arka Plan Efektleri (Opsiyonel Glow) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#D92827]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      {/* Ortadaki tek kanji (Arka plan dekoru) */}
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
        <h2 className="text-3xl sm:text-4xl font-[Montserrat] font-bold tracking-wide uppercase">
          Sensei
        </h2>
        {/* Kırmızı Çizgi */}
        <div className="mt-4 h-1.5 w-24 bg-[#D92827] rounded-full mx-auto shadow-[0_0_15px_rgba(217,40,39,0.5)]" />
      </div>

      {/* Kartlar */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {senseis.map((sensei, idx) => (
          <article
            key={idx}
            className="
              group bg-[#232d4b] backdrop-blur-md rounded-2xl border border-white/5
              overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-red-900/20
            "
          >
            {/* Görsel Alanı */}
            {sensei.image && (
              <div className="overflow-hidden h-[400px] relative">
                {/* Görselin alt kısmını karartan linear (Yazı okunurluğu için) */}
                <div className="absolute inset-0 bg-linear-to-t from-[#232d4b] via-[#232d4b]/20 to-transparent z-10 opacity-90" />

                <img
                  src={sensei.image}
                  alt={sensei.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top"
                />
              </div>
            )}

            {/* İçerik Alanı */}
            <div className="p-8 text-center relative z-20 -mt-20">
              <h3 className="text-2xl font-[Montserrat] font-bold text-white mb-1 group-hover:text-[#D92827] transition-colors">
                {sensei.name}
              </h3>

              <p className="text-[#D92827] font-medium tracking-wider text-sm uppercase mb-4 font-[Montserrat]">
                {sensei.rank}
              </p>

              <div className="w-12 h-1 bg-white/10 mx-auto mb-6 rounded-full" />

              <p className="text-gray-300 leading-relaxed font-light text-base sm:text-lg">
                {sensei.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Sensei;
