import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

export default function Messages() {
  const messages = [
    {
      quote: "Karate, yalnızca dövüşmek değil, kendini keşfetmektir.",
      author: "Sensei Edanur Koçyiğit",
      role: "Baş Eğitmen",
    },
    {
      quote: "Kyokushin bir yolculuktur, varış noktası değil.",
      author: "Sensei Zeki Yasin Koçyiğit",
      role: "Yardımcı Eğitmen",
    },
    {
      quote: "Disiplin, her yumruktan daha güçlüdür.",
      author: "Senpai Şuranur Koçyiğit",
      role: "Yardımcı Antrenör",
    },
    {
      quote: "Her antrenman, bir adım daha ileri gitmektir.",
      author: "Senpai Rana Karduz",
      role: "Yardımcı Antrenör",
    },
  ];

  return (
    <section
      className="w-full bg-[#1A2238] py-16 px-4 relative z-10"
      id="mesajlar"
      aria-label="Hocalarımızın mesajları"
    >
      {/* Pagination Stilleri - Kırmızı Vurgu */}
      <style>{`
        .messages-swiper .swiper-pagination {
          bottom: -40px !important;
        }
        .messages-swiper .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.2;
          width: 10px;
          height: 10px;
          transition: all 0.3s;
        }
        .messages-swiper .swiper-pagination-bullet-active {
          background: #D92827;
          opacity: 1;
          width: 12px;
          height: 12px;
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        {/* Başlık - Diğer bölümlerle aynı stil */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-center text-white text-2xl sm:text-3xl font-[Montserrat] font-bold tracking-wide uppercase">
            Hocalarımızın Mesajları
          </h2>
          <div className="mt-4 h-1.5 w-24 bg-[#D92827] rounded-full shadow-[0_0_15px_rgba(217,40,39,0.5)]" />
        </div>

        <div className="messages-swiper px-2">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={600}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="pb-16"
          >
            {messages.map((msg, idx) => (
              <SwiperSlide key={idx}>
                <article
                  className="
                    h-full min-h-[200px]
                    rounded-xl bg-[#232d4b] border border-white/5 
                    p-6 sm:p-8
                    flex flex-col relative overflow-hidden group
                    transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40
                  "
                >
                  {/* Üstteki Kırmızı Çizgi (Premium detay) */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#D92827] to-[#8a1312] opacity-70 group-hover:opacity-100 transition-opacity" />

                  {/* Tırnak İkonu */}
                  <div className="mb-4">
                    <FaQuoteLeft className="text-[#D92827] text-2xl sm:text-3xl opacity-80 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Mesaj */}
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed italic font-light grow">
                    "{msg.quote}"
                  </p>

                  {/* Yazar Bilgisi */}
                  <div className="mt-6 flex flex-col items-end border-t border-white/5 pt-4">
                    <span className="text-white font-bold text-sm sm:text-base tracking-wide">
                      {msg.author}
                    </span>
                    <span className="text-[#D92827] text-xs font-medium uppercase tracking-wider mt-1">
                      {msg.role}
                    </span>
                  </div>

                  {/* Dekoratif Arka Plan Efekti */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-[#D92827]/10 transition-colors duration-500" />
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
