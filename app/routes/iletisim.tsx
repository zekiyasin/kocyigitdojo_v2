import { useFadeInOnMount } from "../hooks/useFadeInOnMount";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaClock,
} from "react-icons/fa";
import type { Route } from "./+types/iletisim";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "İletişim & Kayıt | Karate Tuzla - Koçyiğit Dojo" },
    {
      name: "description",
      content:
        "Tuzla Kyokushin Karate kursu kayıtlarımız başladı. Koçyiğit Dojo antrenman saatleri, ulaşım bilgileri ve iletişim için tıklayın.",
    },
  ];
}

export default function IletisimPage() {
  const isLoaded = useFadeInOnMount();

  return (
    <div
      className={`
        transition-all duration-1000 ease-out
        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* Hero Bölümü - Tuzla Kyokushin Karate Vurgusu */}
      <section className="relative bg-gradient-to-br from-[#1A2238] to-[#0d1220] text-white py-24 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D92827]/10 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[Montserrat] font-black uppercase mb-6 leading-tight">
            Tuzla Kyokushin Karate <br />
            <span className="text-[#D92827]">Antrenman Salonu</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Tuzla'daki dojomuzda profesyonel Kyokushin ve Shinkyokushin Karate
            eğitimi. Her yaş grubu için disiplin, güç ve öz güven.
          </p>
        </div>
      </section>

      {/* Ana İçerik Alanı */}
      <section className="bg-[#1A2238] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* İletişim Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Telefon */}
            <div className="group flex flex-col items-center gap-3 p-8 rounded-2xl bg-[#232d4b] border border-white/5 hover:border-[#D92827]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D92827] transition-colors duration-300">
                <FaPhone className="text-[#D92827] text-xl group-hover:text-white transition-colors" />
              </div>
              <h2 className="font-[Montserrat] font-bold text-lg">Telefon</h2>
              <a
                href="tel:+905520042705"
                className="text-gray-300 font-medium hover:text-[#D92827] transition-colors"
              >
                +90 552 004 27 05
              </a>
            </div>

            {/* E-posta */}
            <div className="group flex flex-col items-center gap-3 p-8 rounded-2xl bg-[#232d4b] border border-white/5 hover:border-[#D92827]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D92827] transition-colors duration-300">
                <FaEnvelope className="text-[#D92827] text-xl group-hover:text-white transition-colors" />
              </div>
              <h2 className="font-[Montserrat] font-bold text-lg">E-Posta</h2>
              <a
                href="mailto:kocyigitdojo@gmail.com"
                className="text-gray-300 font-medium break-all hover:text-[#D92827] transition-colors"
              >
                kocyigitdojo@gmail.com
              </a>
            </div>

            {/* Konum */}
            <div className="group flex flex-col items-center gap-3 p-8 rounded-2xl bg-[#232d4b] border border-white/5 hover:border-[#D92827]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D92827] transition-colors duration-300">
                <FaMapMarkerAlt className="text-[#D92827] text-xl group-hover:text-white transition-colors" />
              </div>
              <h2 className="font-[Montserrat] font-bold text-lg">Adres</h2>
              <address className="text-gray-300 font-medium text-center not-italic">
                Halil Türkkan Kız Anadolu İmam Hatip Lisesi
                <br />
                Tuzla, İstanbul, Türkiye
              </address>
            </div>

            {/* Antrenman Saatleri */}
            <div className="group flex flex-col items-center gap-3 p-8 rounded-2xl bg-[#232d4b] border border-white/5 hover:border-[#D92827]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D92827] transition-colors duration-300">
                <FaClock className="text-[#D92827] text-xl group-hover:text-white transition-colors" />
              </div>
              <h2 className="font-[Montserrat] font-bold text-lg">
                Antrenman Saatleri
              </h2>
              <div className="text-gray-300 font-medium text-center text-sm">
                <p>Pazartesi, Çarşamba, Cuma</p>
                <p className="text-[#D92827] font-bold mt-1">18:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Tuzla'da Kyokushin - SEO İçerik Bloğu */}
          <div className="bg-[#232d4b] p-8 rounded-2xl border border-white/5 mb-16">
            <h2 className="text-2xl font-[Montserrat] font-bold mb-4 text-[#D92827]">
              Tuzla'da Kyokushin Karate Eğitimi
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                <strong>Koçyiğit Dojo</strong>, İstanbul Tuzla'da profesyonel
                Kyokushin ve Shinkyokushin Karate eğitimi veren köklü bir
                kulüptür. Tuzla bölgesinde dövüş sporları arayanlar için ideal
                bir antrenman ortamı sunuyoruz.
              </p>
              <p>
                Tuzla karate kursu olarak, hem çocuk hem de yetişkin gruplara
                hitap ediyoruz. Deneyimli eğitmenlerimiz eşliğinde, disiplin,
                saygı ve öz güven kazanırken fiziksel gücünüzü de artırırsınız.
              </p>
              <p>
                Tuzla'daki dojomuz, modern ekipmanlar ve geniş antrenman alanı
                ile Kyokushin Karate'nin gerçek ruhunu yaşamanız için
                tasarlandı.
              </p>
            </div>
          </div>

          {/* Form ve Harita */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* İletişim Formu */}
            <form className="bg-[#232d4b] p-6 sm:p-8 rounded-2xl border border-white/5 shadow-2xl space-y-5">
              <h2 className="text-2xl font-bold font-[Montserrat] mb-2 text-white">
                Bize Ulaşın
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Kayıt olmak veya sorularınız için formu doldurun, size dönelim.
              </p>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Adınız Soyadınız"
                  className="w-full p-4 rounded-lg bg-[#1A2238] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-[#D92827] focus:ring-1 focus:ring-[#D92827] transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="E-posta Adresiniz"
                  className="w-full p-4 rounded-lg bg-[#1A2238] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-[#D92827] focus:ring-1 focus:ring-[#D92827] transition-all"
                  required
                />
                <input
                  type="tel"
                  placeholder="Telefon Numaranız"
                  className="w-full p-4 rounded-lg bg-[#1A2238] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-[#D92827] focus:ring-1 focus:ring-[#D92827] transition-all"
                />
                <textarea
                  rows={5}
                  placeholder="Mesajınız..."
                  className="w-full p-4 rounded-lg bg-[#1A2238] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-[#D92827] focus:ring-1 focus:ring-[#D92827] transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D92827] text-white font-bold py-4 rounded-lg hover:bg-[#b91f1e] hover:shadow-lg hover:shadow-red-900/30 transition-all active:scale-[0.98]"
              >
                GÖNDER
              </button>
            </form>

            {/* Google Harita */}
            <div className="w-full h-[500px] lg:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.974512869902!2d29.33247287652368!3d40.872433527777766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc3e2e01e6f1%3A0x45326690abc454eb!2s%C4%B0stanbul%20-%20Tuzla%20Halil%20T%C3%BCrkkan%20K%C4%B1z%20Anadolu%20%C4%B0mam%20Hatip%20Lisesi!5e0!3m2!1str!2str!4v1754307867788!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Koçyiğit Dojo Tuzla Karate Salonu Harita"
                className="filter grayscale-20 contrast-[1.1] group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
              <div className="absolute inset-0 border-4 border-white/5 pointer-events-none rounded-2xl" />
            </div>
          </div>

          {/* Sosyal Medya */}
          <div className="mt-20 pt-10 border-t border-white/10 text-center">
            <p className="text-gray-400 mb-6 text-sm uppercase tracking-widest font-bold">
              Bizi Takip Edin
            </p>
            <div className="flex justify-center gap-8">
              <a
                href="https://instagram.com/kocyigit_dojo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full bg-[#232d4b] flex items-center justify-center text-white/70 hover:text-pink-500 hover:bg-white/10 hover:scale-110 transition-all duration-300"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://facebook.com/edanurkoçyigit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-12 h-12 rounded-full bg-[#232d4b] flex items-center justify-center text-white/70 hover:text-blue-500 hover:bg-white/10 hover:scale-110 transition-all duration-300"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://www.tiktok.com/@kocyigit.dojo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-12 h-12 rounded-full bg-[#232d4b] flex items-center justify-center text-white/70 hover:text-red-500 hover:bg-white/10 hover:scale-110 transition-all duration-300"
              >
                <FaTiktok className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
