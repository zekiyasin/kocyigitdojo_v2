import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Resim importları (Dosya yollarının senin projende doğru olduğundan emin ol)
import yasin from "../assets/yasin.jpg";
import sura from "../assets/şura.jpg";
import rana from "../assets/rana.jpg";
import eda from "../assets/eda.jpg";

// Veri yapısını güncelledik: Role (Unvan) ve Name (İsim) ayrı ayrı
const slides = [
  { role: "SENSEI", name: "Edanur Koçyiğit", img: eda },
  { role: "SENSEI", name: "Zeki Yasin Koçyiğit", img: yasin },
  { role: "SENPAI", name: "Şuranur Koçyiğit", img: sura },
  { role: "SENPAI", name: "Rana Karduz", img: rana },
];

export default function HeroSection() {
  // Yükseklik ayarı
  const HERO_H = "h-[90vh] sm:h-[90vh] lg:h-[100vh] min-h-[500px]";

  return (
    <div className={`relative w-full ${HERO_H} overflow-hidden bg-[#0a0a0a]`}>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={800}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet hero-bullet",
          bulletActiveClass:
            "swiper-pagination-bullet-active hero-bullet-active",
        }}
        loop={true}
        className={HERO_H}
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i} className={`${HERO_H} relative`}>
            {/* --- 1. ARKA PLAN GÖRSELİ --- */}
            <div className="absolute inset-0">
              <img
                src={s.img}
                alt={`${s.role} ${s.name} - Koçyiğit Dojo Kyokushin Karate İstanbul`}
                className="w-full h-full object-cover opacity-90"
                loading={i === 0 ? "eager" : "lazy"}
              />

              {/* Karartma Katmanları (linearler) */}
              {/* Soldan sağa karartma: Yazıların okunması için */}
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent" />
              {/* Alttan yukarı lacivert tonu: Footer veya sayfa devamı ile bütünlük için */}
              <div className="absolute inset-0 bg-linear-to-t from-[#1A2238] via-transparent to-transparent opacity-90" />
            </div>

            {/* --- 2. İÇERİK ALANI --- */}
            <div className="absolute inset-0 flex items-end pb-20 sm:pb-24 lg:pb-32 px-4 sm:px-8 lg:px-12">
              <div className="max-w-4xl relative z-10 w-full">
                {/* Dekoratif Japonca Karakter (Arka planda büyük silik yazı - Kyokushin) */}
                <div className="absolute -top-20 -left-6 text-[10rem] font-black text-white/5 pointer-events-none select-none hidden sm:block font-serif leading-none">
                  極真
                </div>

                {/* Ana Metin Bloğu (Solunda Kırmızı Dikey Çizgi ile) */}
                <div className="border-l-[6px] border-[#D92827] pl-6 sm:pl-8 py-2 backdrop-blur-[0px]">
                  {/* Ana SEO H1 Başlığı - İlk slide'da görünür */}
                  {i === 0 && (
                    <h1 className="sr-only">
                      İstanbul Kyokushin Karate Kulübü: Koçyiğit Dojo
                    </h1>
                  )}

                  {/* Üst Bilgi: Unvan Etiketi + Dojo Adı */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="bg-[#D92827] text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-sm tracking-wider shadow-lg shadow-red-900/40">
                      {s.role}
                    </span>
                    <span className="text-gray-300 text-sm sm:text-base tracking-[0.3em] font-medium uppercase drop-shadow-md">
                      Koçyiğit Dojo
                    </span>
                  </div>

                  {/* İsim Alanı - H2 olarak değiştirildi */}
                  <h2 className="text-white text-4xl sm:text-5xl lg:text-7xl font-[Montserrat] font-black leading-[1.1] uppercase drop-shadow-xl">
                    {s.name}
                  </h2>

                  {/* Alt Slogan */}
                  <p className="mt-4 text-gray-300 text-sm sm:text-lg max-w-lg font-light hidden sm:block leading-relaxed border-t border-white/10 pt-4">
                    Disiplin, Saygı ve Gücün Buluşma Noktası. <br />
                    <span className="text-[#D92827] font-semibold">
                      Kyokushin Ruhu
                    </span>{" "}
                    ile sınırlarını zorla.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- 3. PAGINATION STİLLERİ --- */}
      <style>{`
        /* Pagination bullets'ı sağ alt köşeye taşı */
        .swiper-pagination {
          bottom: 40px !important;
          right: 40px;
          left: auto !important;
          width: auto !important;
          display: flex;
          gap: 12px;
          z-index: 20;
        }
        /* Mobilde ortala */
        @media (max-width: 640px) {
          .swiper-pagination {
            right: 50%;
            transform: translateX(50%);
            bottom: 20px !important;
          }
        }
        
        /* Pasif bullet stili */
        .hero-bullet {
          width: 12px !important;
          height: 12px !important;
          background: transparent !important;
          border: 2px solid rgba(255,255,255,0.5);
          opacity: 1 !important;
          transition: all 0.3s ease;
        }
        
        /* Aktif bullet stili (Kırmızı ve Dolu) */
        .hero-bullet-active {
          width: 14px !important;
          height: 14px !important;
          background: #D92827 !important;
          border-color: #D92827;
          box-shadow: 0 0 15px rgba(217, 40, 39, 0.6);
        }
      `}</style>
    </div>
  );
}
