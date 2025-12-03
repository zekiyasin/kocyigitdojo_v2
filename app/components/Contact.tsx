import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

const Contact = () => {
  return (
    // Arka plan: Kurumsal Lacivert (#1A2238)
    <section
      className="bg-[#1A2238] text-white py-20 px-4 relative"
      id="iletisim"
    >
      {/* Arka Plan Dekoru (Hafif Kırmızı Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-64 bg-[#D92827]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* --- BAŞLIK ALANI (Diğer bölümlerle aynı standartta) --- */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-center text-white text-2xl sm:text-3xl font-[Montserrat] font-bold tracking-wide uppercase">
            İletişim
          </h2>
          {/* Kırmızı Dekoratif Çizgi */}
          <div className="mt-4 h-1.5 w-24 bg-[#D92827] rounded-full shadow-[0_0_15px_rgba(217,40,39,0.5)]" />

          <p className="text-gray-400 text-center mt-6 text-sm sm:text-base max-w-2xl">
            Sorularınız, kayıt işlemleri veya sadece tanışmak için bizimle
            iletişime geçmekten çekinmeyin!
          </p>
        </div>

        {/* --- İLETİŞİM KARTLARI --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Telefon */}
          <div className="group flex flex-col items-center gap-3 p-8 rounded-2xl bg-[#232d4b] border border-white/5 hover:border-[#D92827]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D92827] transition-colors duration-300">
              <FaPhone className="text-[#D92827] text-xl group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-[Montserrat] font-bold text-lg">Telefon</h3>
            <span className="text-gray-300 font-medium">+90 552 004 27 05</span>
          </div>

          {/* E-posta */}
          <div className="group flex flex-col items-center gap-3 p-8 rounded-2xl bg-[#232d4b] border border-white/5 hover:border-[#D92827]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D92827] transition-colors duration-300">
              <FaEnvelope className="text-[#D92827] text-xl group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-[Montserrat] font-bold text-lg">E-Posta</h3>
            <span className="text-gray-300 font-medium break-all">
              kocyigitdojo@gmail.com
            </span>
          </div>

          {/* Konum */}
          <div className="group flex flex-col items-center gap-3 p-8 rounded-2xl bg-[#232d4b] border border-white/5 hover:border-[#D92827]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D92827] transition-colors duration-300">
              <FaMapMarkerAlt className="text-[#D92827] text-xl group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-[Montserrat] font-bold text-lg">Adres</h3>
            <span className="text-gray-300 font-medium text-center">
              Tuzla, İstanbul, Türkiye
            </span>
          </div>
        </div>

        {/* --- FORM VE HARİTA --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* İletişim Formu */}
          <form className="bg-[#232d4b] p-6 sm:p-8 rounded-2xl border border-white/5 shadow-2xl space-y-5">
            <h3 className="text-xl font-bold font-[Montserrat] mb-2 text-white">
              Bize Ulaşın
            </h3>

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
          <div className="w-full h-[400px] md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.974512869902!2d29.33247287652368!3d40.872433527777766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc3e2e01e6f1%3A0x45326690abc454eb!2s%C4%B0stanbul%20-%20Tuzla%20Halil%20T%C3%BCrkkan%20K%C4%B1z%20Anadolu%20%C4%B0mam%20Hatip%20Lisesi!5e0!3m2!1str!2str!4v1754307867788!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale-20 contrast-[1.1] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
            {/* Harita üzerine çerçeve efekti */}
            <div className="absolute inset-0 border-4 border-white/5 pointer-events-none rounded-2xl" />
          </div>
        </div>

        {/* --- SOSYAL MEDYA --- */}
        <div className="mt-20 pt-10 border-t border-white/10 text-center">
          <p className="text-gray-400 mb-6 text-sm uppercase tracking-widest font-bold">
            Bizi Takip Edin
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="https://instagram.com/kocyigit_dojo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#232d4b] flex items-center justify-center text-white/70 hover:text-pink-500 hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://facebook.com/edanurkoçyigit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#232d4b] flex items-center justify-center text-white/70 hover:text-blue-500 hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.tiktok.com/@kocyigit.dojo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#232d4b] flex items-center justify-center text-white/70 hover:text-red-500 hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <FaTiktok className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
