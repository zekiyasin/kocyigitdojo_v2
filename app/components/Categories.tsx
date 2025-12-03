import React from "react";
import { Link } from "react-router";

// İkonları import ediyoruz
import {
  GiBlackBelt,
  GiPunch,
  GiFist,
  GiScrollUnfurled,
  GiNotebook,
  GiTrophyCup,
} from "react-icons/gi";
import { FaChalkboardTeacher, FaImages } from "react-icons/fa";
import { MdOutlineSportsMartialArts } from "react-icons/md";

// Tip Tanımlaması
type CategoryType = {
  id: number;
  title: string;
  icon: string;
  path?: string;
};

// KATEGORİ VERİLERİ
const categories: CategoryType[] = [
  { id: 1, title: "SENSEI", icon: "GiBlackBelt", path: "/sensei" },
  { id: 2, title: "SENPAI", icon: "FaChalkboardTeacher", path: "/senpai" },
  {
    id: 3,
    title: "SPORCU SIRALAMASI",
    icon: "MdOutlineSportsMartialArts",
    path: "/sporcu-siralama",
  },
  { id: 4, title: "KATA", icon: "GiPunch", path: "/kata" },
  { id: 5, title: "KUMITE", icon: "GiFist", path: "/kumite" },
  { id: 6, title: "DOJO KUN", icon: "GiScrollUnfurled", path: "/dojo-kun" },
  { id: 7, title: "SINAVLAR", icon: "GiNotebook", path: "/sinavlar" },
  {
    id: 8,
    title: "KEMER LİSTESİ",
    icon: "GiTrophyCup",
    path: "/kemer-listesi",
  },
  { id: 9, title: "GALERİ", icon: "FaImages", path: "/galeri" },
];

export default function Categories() {
  // İkon Component'ini getiren fonksiyon
  const getIconComponent = (iconName: string) => {
    const size = 40;
    switch (iconName) {
      case "GiBlackBelt":
        return <GiBlackBelt size={size} />;
      case "FaChalkboardTeacher":
        return <FaChalkboardTeacher size={size} />;
      case "MdOutlineSportsMartialArts":
        return <MdOutlineSportsMartialArts size={size} />;
      case "GiPunch":
        return <GiPunch size={size} />;
      case "GiFist":
        return <GiFist size={size} />;
      case "GiScrollUnfurled":
        return <GiScrollUnfurled size={size} />;
      case "GiNotebook":
        return <GiNotebook size={size} />;
      case "GiTrophyCup":
        return <GiTrophyCup size={size} />;
      case "FaImages":
        return <FaImages size={size} />;
      default:
        return <GiBlackBelt size={size} />;
    }
  };

  // Kart Component'i
  const CategoryCard: React.FC<{ cat: CategoryType }> = ({ cat }) => {
    return (
      <div
        className="
        group relative flex flex-col items-center justify-center 
        bg-[#232d4b] border border-white/5 rounded-xl p-6 h-40 w-full
        transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/30
        overflow-hidden text-center cursor-pointer
      "
      >
        {/* Hover Efekti (Kırmızı Geçiş) */}
        <div className="absolute inset-0 bg-linear-to-br from-[#D92827] to-[#8a1312] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />

        {/* İkon */}
        <div className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300 mb-3 transform group-hover:scale-110">
          {getIconComponent(cat.icon)}
        </div>

        {/* Başlık */}
        <div className="relative z-10">
          <span className="text-gray-200 font-[Montserrat] font-bold text-[10px] sm:text-xs tracking-widest uppercase group-hover:text-white transition-colors">
            {cat.title}
          </span>
        </div>

        {/* Dekoratif Sağ Üst Köşe */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-white/5 rounded-bl-full group-hover:bg-white/20 transition-colors" />
      </div>
    );
  };

  return (
    <section className="bg-[#1A2238] py-16 px-4 sm:px-8 lg:px-12 relative z-20 border-t border-white/5">
      <div className="max-w-[1920px] mx-auto">
        {/* Başlık Alanı */}
        <div className="flex items-center gap-4 mb-10 pl-2">
          {/* Dikey Kırmızı Çizgi */}
          <div className="h-10 w-1.5 bg-[#D92827] rounded-full shadow-[0_0_15px_rgba(217,40,39,0.6)]" />
          <h2 className="text-white text-2xl sm:text-3xl font-[Montserrat] font-bold tracking-wide uppercase">
            Kategoriler
          </h2>
        </div>

        {/* Kategoriler Grid Yapısı */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-4 sm:gap-6">
          {categories.map((cat) =>
            cat.path ? (
              <Link key={cat.id} to={cat.path} className="block w-full">
                <CategoryCard cat={cat} />
              </Link>
            ) : (
              <div key={cat.id} className="block w-full">
                <CategoryCard cat={cat} />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
