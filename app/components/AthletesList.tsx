import { FaUser, FaMedal, FaTrophy } from "react-icons/fa";
import { athletes } from "../data/athletes";

const POINTS = { gold: 5, silver: 3, bronze: 1 } as const;

function calcPoints(gold: number, silver: number, bronze: number) {
  return gold * POINTS.gold + silver * POINTS.silver + bronze * POINTS.bronze;
}

const AthletesList = () => {
  // Sıralama Mantığı: Puan > Altın > Gümüş > Bronz
  const ranked = athletes
    .map((a) => ({
      ...a,
      points: calcPoints(a.gold, a.silver, a.bronze),
    }))
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.gold !== a.gold) return b.gold - a.gold;
      if (b.silver !== a.silver) return b.silver - a.silver;
      return b.bronze - a.bronze;
    });

  // Sıralama İkonu ve Rengi (İlk 3'e özel rozetler)
  const getRankBadge = (index: number) => {
    switch (index) {
      case 0: // 1. Sıra (Altın)
        return (
          <div className="w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.4)] border border-yellow-500/50">
            <FaTrophy className="text-xl" />
          </div>
        );
      case 1: // 2. Sıra (Gümüş)
        return (
          <div className="w-10 h-10 rounded-full bg-gray-300/20 text-gray-300 flex items-center justify-center border border-gray-300/50">
            <FaMedal className="text-xl" />
          </div>
        );
      case 2: // 3. Sıra (Bronz)
        return (
          <div className="w-10 h-10 rounded-full bg-orange-700/20 text-orange-600 flex items-center justify-center border border-orange-700/50">
            <FaMedal className="text-xl" />
          </div>
        );
      default: // Diğerleri
        return (
          <div className="w-8 h-8 rounded-full bg-white/5 text-gray-400 flex items-center justify-center font-bold text-sm border border-white/10">
            {index + 1}
          </div>
        );
    }
  };

  return (
    // Arka plan rengini kurumsal laciverte (#1A2238) çektik
    <section id="sporcular" className="bg-[#1A2238] py-16 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Başlık Alanı */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-center text-white text-2xl sm:text-3xl font-[Montserrat] font-bold tracking-wide uppercase">
            Sporcu Sıralaması
          </h2>
          {/* Kırmızı Dekoratif Çizgi */}
          <div className="mt-4 h-1.5 w-24 bg-[#D92827] rounded-full shadow-[0_0_15px_rgba(217,40,39,0.5)]" />
        </div>

        {/* Tablo Başlıkları (Sadece Masaüstü) */}
        <div className="hidden md:flex justify-between items-center text-gray-400 px-6 mb-4 text-sm font-medium tracking-wider uppercase">
          <div className="w-[50%] pl-16">Sporcu Bilgileri</div>
          <div className="w-[50%] flex justify-between pr-4">
            <span>Madalyalar</span>
            <span>Toplam Puan</span>
          </div>
        </div>

        {/* Liste */}
        <div className="space-y-3">
          {ranked.map((a, idx) => (
            <div
              key={a.name}
              className={`
                group flex flex-col md:flex-row md:items-center justify-between 
                px-5 py-4 rounded-xl backdrop-blur-sm transition-all duration-300
                border hover:transform hover:-translate-y-1 hover:shadow-xl
                ${
                  idx === 0
                    ? "bg-linear-to-r from-[#D92827]/20 to-[#1A2238] border-yellow-500/30 shadow-lg shadow-yellow-900/10" // Şampiyon Kartı
                    : "bg-[#232d4b] border-white/5 hover:border-white/20" // Standart Kart
                }
              `}
            >
              {/* Sol Taraf: Sıra, İkon, İsim */}
              <div className="flex items-center gap-4 w-full md:w-[50%] mb-4 md:mb-0">
                {/* Sıralama Rozeti */}
                <div className="shrink-0">{getRankBadge(idx)}</div>

                {/* Avatar İkonu */}
                <div
                  className={`p-2 rounded-full ${
                    idx === 0 ? "bg-yellow-500/10" : "bg-white/5"
                  }`}
                >
                  <FaUser
                    className={`text-xl ${
                      idx === 0 ? "text-yellow-500" : "text-gray-400"
                    }`}
                  />
                </div>

                {/* İsim ve Kemer Bilgisi */}
                <div>
                  <div className="flex items-center gap-2">
                    <p
                      className={`font-[Montserrat] font-bold text-lg leading-tight ${
                        idx === 0 ? "text-white" : "text-gray-200"
                      }`}
                    >
                      {a.name}
                    </p>
                    {/* Milli Sporcu Etiketi */}
                    {a.isNational && (
                      <span className="px-1.5 py-0.5 bg-red-600 text-[10px] text-white rounded font-bold tracking-wider shadow-sm animate-pulse">
                        MİLLİ
                      </span>
                    )}
                  </div>
                  {a.belt && (
                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide font-medium">
                      {a.belt}
                    </p>
                  )}
                </div>
              </div>

              {/* Sağ Taraf: Madalyalar ve Puan */}
              <div className="w-full md:w-[50%] flex items-center justify-between pl-14 md:pl-0 border-t md:border-none border-white/5 pt-3 md:pt-0">
                {/* Madalyalar */}
                <div className="flex items-center gap-4 text-sm">
                  <div
                    className="flex items-center gap-1"
                    title="Altın Madalya"
                  >
                    <span className="text-xl">🥇</span>{" "}
                    <span className="text-gray-300 font-bold">{a.gold}</span>
                  </div>
                  <div
                    className="flex items-center gap-1"
                    title="Gümüş Madalya"
                  >
                    <span className="text-xl">🥈</span>{" "}
                    <span className="text-gray-300 font-bold">{a.silver}</span>
                  </div>
                  <div
                    className="flex items-center gap-1"
                    title="Bronz Madalya"
                  >
                    <span className="text-xl">🥉</span>{" "}
                    <span className="text-gray-300 font-bold">{a.bronze}</span>
                  </div>
                </div>

                {/* Toplam Puan */}
                <div className="text-right min-w-[60px]">
                  <span className="block text-2xl font-black text-[#D92827] drop-shadow-md">
                    {a.points}
                  </span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                    Puan
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AthletesList;
