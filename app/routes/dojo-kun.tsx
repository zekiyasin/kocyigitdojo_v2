import { useEffect, useState } from "react";
import type { Route } from "./+types/dojo-kun";
import kanku from "../assets/kanku.png";
import kyokushinKanji from "../assets/kanji.png";
import paperTexture from "../assets/paper1.jpg"; // Kağıt dokusu (yoksa düz renk fallback var)

// Japonca (sol sütun)
const jpLeft = [
  "一、吾々は心身を錬磨し確固不抜の心技を極めること",
  "一、吾々は武の真髄を極め機に発し感に敏なること",
  "一、吾々は質実剛健を以て克己の精神を涵養すること",
];

// Japonca (sağ sütun)
const jpRight = [
  "一、吾々は礼節を重んじ長上を敬し粗暴の振舞いを慎むこと",
  "一、吾々は神仏を尊び謙譲の美徳を忘れざること",
  "一、吾々は知性と体力とを向上させ事に臨んで過たざること",
];

// Türkçe Çeviriler
const trLines = [
  "Kalplerimizi ve bedenlerimizi sağlam, yenilmez bir ruh için eğiteceğiz.",
  "Savaş yolunun gerçek anlamını izleyerek duyularımızın uyanık olmasını sağlayacağız.",
  "Gerçek güçle özgüvenimizi geliştirmek için çaba göstereceğiz.",
  "Nezaket kurallarına uyarak üstlerimize saygı gösterip şiddetten kaçınacağız.",
  "Geleneklerimizi takip ederek davranışlarımızda mütevazı olacağız.",
  "Bilgelik ve güç için gayret gösterip başka arzular aramayacağız.",
];

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Dojo Kun - Kyokushin Karate İlkeleri ve Felsefesi | Koçyiğit Dojo",
    },
    {
      name: "description",
      content:
        "Kyokushin Karate Dojo Kun - 6 temel ilke ve Japon felsefesi. Saygı, disiplin, öz güven ve alçakgönüllülük prensipleri. Türkçe ve Japonca Dojo Yemini.",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://kocyigitdojo.com/dojo-kun",
    },
    {
      name: "keywords",
      content:
        "Dojo Kun, Kyokushin İlkeleri, Karate Felsefesi, Dojo Yemini, Japon Dövüş Sanatları, Kyokushin Prensipleri, Karate Ahlakı",
    },
  ];
}

export default function DojoKun() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  return (
    <section
      className={`
        relative min-h-screen bg-[#1A2238] py-20 px-4 overflow-hidden
        transition-all duration-1000 ease-out flex flex-col items-center
        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* --- ARKA PLAN DEKORLARI (Duvar Hissi) --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Spot Işığı Efekti */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#D92827]/10 blur-[150px] rounded-full opacity-50" />
      </div>

      {/* --- İÇERİK: PARŞÖMEN / TABLO --- */}
      <div className="relative z-10 max-w-7xl w-full">
        {/* Başlık */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-[Montserrat] font-bold tracking-wide uppercase text-white">
            Dojo Kun - Kyokushin Karate İlkeleri
          </h1>
          <div className="mt-4 h-1.5 w-24 bg-[#D92827] rounded-full mx-auto shadow-[0_0_15px_rgba(217,40,39,0.5)]" />
          <p className="text-gray-400 mt-4 text-sm uppercase tracking-widest">
            Dojo Yemini
          </p>
        </div>

        {/* PARŞÖMEN ALANI */}
        <div
          className="
            relative mx-auto rounded-xl shadow-2xl overflow-hidden
            bg-[#fdfbf7] text-[#1f1c19]
            max-w-[1100px]
          "
          style={{
            backgroundImage: paperTexture ? `url(${paperTexture})` : "none",
            backgroundSize: "cover",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          }}
        >
          {/* Parşömen üzeri hafif doku overlay */}
          <div className="absolute inset-0 bg-[#fdfbf7]/60 pointer-events-none mix-blend-multiply" />

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            {/* MASAÜSTÜ DÜZENİ (Geleneksel Görünüm) */}
            <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-8 items-start">
              {/* SOL JAPONCA SÜTUN (Sondan başa doğru okunduğu için aslında sağdan sola düşünülür ama tasarımda sol tarafa koyduk) */}
              <div className="flex justify-end gap-6 lg:gap-8">
                {jpLeft.map((line, i) => (
                  <p
                    key={i}
                    className="jp-vertical text-2xl lg:text-3xl font-bold opacity-80"
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* ORTA: Kanku & Kanji */}
              <div className="flex flex-col items-center px-4 border-x border-black/5">
                <img
                  src={kanku}
                  alt="Kanku"
                  className="w-24 lg:w-32 mb-8 drop-shadow-md opacity-90"
                />
                <img
                  src={kyokushinKanji}
                  alt="Kyokushin Kanji"
                  className="w-32 lg:w-40 drop-shadow-sm opacity-90"
                />
              </div>

              {/* SAĞ JAPONCA SÜTUN */}
              <div className="flex justify-start gap-6 lg:gap-8">
                {jpRight.map((line, i) => (
                  <p
                    key={i}
                    className="jp-vertical text-2xl lg:text-3xl font-bold opacity-80"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* TÜRKÇE ÇEVİRİ ALANI (Modern Kartlar) */}
            <div className="mt-12 md:mt-16 pt-10 border-t border-black/10">
              <div className="grid gap-4 max-w-4xl mx-auto">
                {trLines.map((line, i) => (
                  <div
                    key={i}
                    className="
                      group flex items-start gap-4 p-4 rounded-lg
                      hover:bg-black/5 transition-colors duration-300
                      border-b border-black/5 last:border-0
                    "
                  >
                    <span
                      className="
                      flex items-center justify-center w-8 h-8 rounded-full 
                      bg-[#D92827] text-white font-bold text-sm shrink-0 shadow-md
                    "
                    >
                      {i + 1}
                    </span>
                    <p className="text-lg font-serif leading-relaxed text-gray-800 group-hover:text-black transition-colors">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MOBİL GÖRÜNÜM İÇİN DEKORATİF ARKAPLAN YAZILARI (Japonca karakterler mobilde tabloyu bozmasın diye arka plana silik atıyoruz) */}
        <div className="md:hidden mt-8 grid grid-cols-2 gap-2 opacity-20 select-none pointer-events-none absolute top-1/2 left-0 w-full h-full -z-10">
          <div className="flex flex-col gap-4 items-center">
            {jpLeft.map((l, i) => (
              <div key={i} className="jp-vertical text-xs">
                {l}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 items-center">
            {jpRight.map((l, i) => (
              <div key={i} className="jp-vertical text-xs">
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STİLLER */}
      <style>{`
        /* Dikey Yazı Stili */
        .jp-vertical {
          writing-mode: vertical-rl;
          text-orientation: upright;
          font-family: "Noto Serif JP", serif; /* Eğer import edilirse harika durur */
          color: #2b2119;
          letter-spacing: 0.2em;
        }
      `}</style>
    </section>
  );
}
