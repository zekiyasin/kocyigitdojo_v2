import { useEffect, useState } from "react";
import type { Route } from "./+types/sporcu-siralama";
import { FaUser, FaTrophy } from "react-icons/fa";
import { athletes } from "../data/athletes";
import type { Athlete } from "../data/athletes";

// Görsel Importları (Dosyaların assets klasöründe olduğundan emin olun)
import kanku from "../assets/kanku.png";
import Kanji from "../assets/kanji.png";
// Eğer turkey.png yoksa geçici olarak emoji kullanabiliriz veya dosyayı eklemeniz gerekir.
// import turkeyFlag from "../assets/turkey.png";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Sporcu Sıralaması ve Başarılar | Kyokushin Karate Tuzla - Koçyiğit Dojo",
    },
    {
      name: "description",
      content:
        "Koçyiğit Dojo Kyokushin Karate sporcularının başarıları, madalya sıralaması ve puan tablosu. Milli sporcular ve şampiyonlar. İstanbul Tuzla karate kulübü.",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://kocyigitdojo.com/sporcu-siralama",
    },
    {
      name: "keywords",
      content:
        "Kyokushin Sporcu Sıralaması, Karate Madalyalar, Karate Şampiyonlar, Milli Karateciler, Kyokushin Başarılar, Karate Tuzla, Sporcu Listesi",
    },
  ];
}

const POINTS = { gold: 5, silver: 3, bronze: 1 };

function calcPoints(gold: number, silver: number, bronze: number) {
  return gold * POINTS.gold + silver * POINTS.silver + bronze * POINTS.bronze;
}

// Sıralama rengi (Masaüstü sıra numarası için)
const getRankStyle = (index: number) => {
  if (index === 0) return "bg-yellow-500 text-black shadow-yellow-500/50";
  if (index === 1) return "bg-gray-300 text-black shadow-gray-300/50";
  if (index === 2) return "bg-orange-600 text-white shadow-orange-600/50";
  return "bg-white/10 text-white";
};

const AthletesRanking = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Sayfa Yüklendiğinde
  useEffect(() => {
    window.scrollTo(0, 0); // En üste kaydır
    setIsLoaded(true); // Animasyonu başlat
  }, []);

  // Sıralama Mantığı
  const ranked = athletes
    .map((a: Athlete) => ({
      ...a,
      points: calcPoints(a.gold, a.silver, a.bronze),
    }))
    .sort(
      (a: Athlete & { points: number }, b: Athlete & { points: number }) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.gold !== a.gold) return b.gold - a.gold;
        if (b.silver !== a.silver) return b.silver - a.silver;
        return b.bronze - a.bronze;
      }
    );

  return (
    <section
      className={`
        relative bg-[#1A2238] min-h-screen py-20 px-4 overflow-hidden
        transition-all duration-1000 ease-out
        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* --- ARKA PLAN DEKORLARI --- */}

      {/* Kanku Logosu (Ortada silik) */}
      <img
        src={kanku}
        alt="kanku"
        className="absolute inset-0 m-auto opacity-[0.03] w-[80%] max-w-[600px] pointer-events-none z-0 animate-pulse"
      />

      {/* Kanji Karakterleri (Sağ ve Sol Köşeler) */}
      <img
        src={Kanji}
        alt="shin"
        className="absolute -left-20 top-40 w-[400px] opacity-[0.02] hidden lg:block pointer-events-none"
      />
      <img
        src={Kanji}
        alt="kyoku"
        className="absolute -right-20 top-40 w-[400px] opacity-[0.02] hidden lg:block pointer-events-none"
      />

      {/* --- İÇERİK --- */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-[Montserrat] font-bold tracking-wide uppercase text-white">
            Kyokushin Karate Sporcu Sıralaması - Başarılar
          </h1>
          <div className="mt-4 h-1.5 w-24 bg-[#D92827] rounded-full mx-auto shadow-[0_0_15px_rgba(217,40,39,0.5)]" />
        </div>

        {/* MASAÜSTÜ TABLO BAŞLIĞI */}
        <div className="hidden md:grid grid-cols-12 py-4 px-6 mb-4 rounded-xl bg-[#232d4b]/50 border border-white/5 text-gray-400 font-[Montserrat] font-bold text-sm uppercase tracking-wider">
          <div className="col-span-1 text-center">Sıra</div>
          <div className="col-span-5 pl-2">Sporcu</div>
          <div className="col-span-4 text-center">Madalyalar</div>
          <div className="col-span-2 text-right pr-2">Toplam Puan</div>
        </div>

        {/* SPORCU LİSTESİ */}
        <div className="space-y-4">
          {ranked.map((a: Athlete & { points: number }, idx: number) => (
            <div
              key={a.name}
              className={`
                group relative overflow-hidden rounded-xl border transition-all duration-500 ease-out
                ${
                  idx === 0
                    ? "bg-linear-to-r from-[#D92827]/20 to-[#1A2238] border-yellow-500/30 shadow-lg shadow-yellow-500/10"
                    : "bg-[#232d4b]/60 backdrop-blur-md border-white/5 hover:bg-[#232d4b] hover:border-white/20 hover:-translate-y-1 hover:shadow-xl"
                }
              `}
            >
              {/* Desktop Düzeni */}
              <div className="hidden md:grid grid-cols-12 items-center px-6 py-5">
                {/* 1. Sıra Numarası */}
                <div className="col-span-1 flex justify-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg ${getRankStyle(
                      idx
                    )}`}
                  >
                    {idx === 0 ? <FaTrophy size={14} /> : idx + 1}
                  </div>
                </div>

                {/* 2. İsim ve Bilgi */}
                <div className="col-span-5 flex items-center gap-4 pl-2">
                  <div
                    className={`p-2 rounded-full ${
                      idx === 0
                        ? "bg-yellow-500/10 text-yellow-500"
                        : "bg-white/5 text-gray-400"
                    }`}
                  >
                    <FaUser />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3
                        className={`font-[Montserrat] font-bold text-lg ${
                          idx === 0 ? "text-white" : "text-gray-200"
                        }`}
                      >
                        {a.name}
                      </h3>
                      {a.isNational && (
                        <span className="px-1.5 py-0.5 bg-red-600 text-[10px] text-white rounded font-bold tracking-wider shadow-sm animate-pulse">
                          MİLLİ
                        </span>
                      )}
                    </div>
                    {a.belt && (
                      <p className="text-xs text-white/40 uppercase tracking-wide font-medium">
                        {a.belt}
                      </p>
                    )}
                  </div>
                </div>

                {/* 3. Madalyalar */}
                <div className="col-span-4 flex justify-center gap-6 text-sm">
                  <div className="flex items-center gap-1.5" title="Altın">
                    <span className="text-xl">🥇</span>{" "}
                    <span className="text-gray-300 font-bold">{a.gold}</span>
                  </div>
                  <div className="flex items-center gap-1.5" title="Gümüş">
                    <span className="text-xl">🥈</span>{" "}
                    <span className="text-gray-300 font-bold">{a.silver}</span>
                  </div>
                  <div className="flex items-center gap-1.5" title="Bronz">
                    <span className="text-xl">🥉</span>{" "}
                    <span className="text-gray-300 font-bold">{a.bronze}</span>
                  </div>
                </div>

                {/* 4. Puan */}
                <div className="col-span-2 text-right pr-2">
                  <span className="text-2xl font-black text-[#D92827] drop-shadow-md">
                    {a.points}
                  </span>
                  <span className="block text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    Puan
                  </span>
                </div>
              </div>

              {/* Mobile Düzeni (Kart Görünümü) */}
              <div className="md:hidden p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg ${getRankStyle(
                        idx
                      )}`}
                    >
                      {idx === 0 ? <FaTrophy size={14} /> : idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-white">{a.name}</h3>
                        {a.isNational && (
                          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                        )}
                      </div>
                      {a.belt && (
                        <p className="text-xs text-white/50">{a.belt}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black text-[#D92827]">
                      {a.points}
                    </span>
                    <span className="block text-[9px] text-gray-500 uppercase">
                      Puan
                    </span>
                  </div>
                </div>

                {/* Mobil Madalya Çubuğu */}
                <div className="flex justify-between bg-black/20 rounded-lg p-2 px-4">
                  <div className="flex flex-col items-center">
                    <span className="text-lg">🥇</span>
                    <span className="text-xs font-bold text-gray-300">
                      {a.gold}
                    </span>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div className="flex flex-col items-center">
                    <span className="text-lg">🥈</span>
                    <span className="text-xs font-bold text-gray-300">
                      {a.silver}
                    </span>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div className="flex flex-col items-center">
                    <span className="text-lg">🥉</span>
                    <span className="text-xs font-bold text-gray-300">
                      {a.bronze}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AthletesRanking;
