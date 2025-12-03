import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Resimler (Assets klasöründe bu dosyaların olduğundan emin olun)
import Haberler1 from "../assets/haberler1.jpg";
import Haberler2 from "../assets/haberler2.jpg";
import Haberler3 from "../assets/haberler3.jpg";

const newsImages = [Haberler1, Haberler2, Haberler3];

export default function News() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full bg-[#1A2238] py-16 px-4 sm:px-8 lg:px-12 relative z-20">
      {/* Swiper Pagination Özelleştirme */}
      <style>{`
        .news-swiper .swiper-pagination {
          bottom: -28px !important;
        }
        .news-swiper .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.35;
          width: 10px;
          height: 10px;
        }
        .news-swiper .swiper-pagination-bullet-active {
          background: #D92827;
          opacity: 1;
        }
      `}</style>

      <div className="mx-auto max-w-[1920px]">
        {/* Başlık Alanı (Hero stiliyle uyumlu) */}
        <div className="flex items-center gap-4 mb-10 pl-2">
          <div className="h-10 w-1.5 bg-[#D92827] rounded-full shadow-[0_0_15px_rgba(217,40,39,0.6)]" />
          <h2 className="text-white text-2xl sm:text-3xl font-[Montserrat] font-bold tracking-wide uppercase">
            Haberler
          </h2>
        </div>

        <div className="relative news-swiper group">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={500}
            loop={true}
            className="pb-12"
          >
            {newsImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="px-0 sm:px-2 md:px-4">
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl relative h-[300px] sm:h-[400px] lg:h-[500px]">
                    <a
                      href="https://karate.gov.tr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img
                        src={img}
                        alt={`Haber ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                      {/* Görsel üzerine hafif karartma */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* --- ÖZEL OK BUTONLARI --- */}

          {/* Sol Buton (İçeride) */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="
              hidden md:flex
              absolute top-1/2 -translate-y-1/2
              left-6 z-20
              h-12 w-12 items-center justify-center rounded-full
              bg-black/30 backdrop-blur-sm text-white border border-white/20 shadow-lg transition-all duration-300
              hover:bg-[#D92827] hover:border-[#D92827] hover:scale-110
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Sağ Buton (İçeride) */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="
              hidden md:flex
              absolute top-1/2 -translate-y-1/2
              right-6 z-20
              h-12 w-12 items-center justify-center rounded-full
              bg-black/30 backdrop-blur-sm text-white border border-white/20 shadow-lg transition-all duration-300
              hover:bg-[#D92827] hover:border-[#D92827] hover:scale-110
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
