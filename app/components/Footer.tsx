import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white border-t border-white/10 pt-16 pb-8 relative z-20 overflow-hidden">
      {/* Arka Plan Dekoru (Hafif Kyokushin Kırmızısı Işıltısı) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[#D92827]/50 blur-[50px] pointer-events-none" />

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* --- ÜST KISIM (3 Sütunlu Yapı) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 1. Sütun: Marka ve Misyon */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <h2 className="text-2xl font-[Montserrat] font-black tracking-wider uppercase text-white">
                KOÇYİĞİT
              </h2>
              <span className="text-[#D92827] font-[Montserrat] font-bold tracking-[0.4em] text-sm">
                DOJO
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Kyokushin Karate disipliniyle, sadece güçlü sporcular değil, güçlü
              karakterler yetiştiriyoruz. Saygı, azim ve mükemmellik yolunda
              bizimle yürüyün.
            </p>
            {/* Sosyal Medya İkonları */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D92827] hover:text-white transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              >
                <FaTiktok size={18} />
              </a>
            </div>
          </div>

          {/* 2. Sütun: Hızlı Erişim */}
          <div>
            <h3 className="text-lg font-bold font-[Montserrat] mb-6 relative inline-block">
              Hızlı Erişim
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#D92827] rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Ana Sayfa", to: "/" },
                { label: "Hakkımızda", to: "/hakkimizda" },
                { label: "Sporcularımız", to: "/sporcular" },
                { label: "Galeri", to: "/galeri" },
                { label: "Haberler", to: "/haberler" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="group flex items-center text-gray-400 hover:text-[#D92827] transition-colors text-sm"
                  >
                    <FaChevronRight className="text-[10px] mr-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Sütun: Eğitimler / Programlar (Dolu görünmesi için) */}
          <div>
            <h3 className="text-lg font-bold font-[Montserrat] mb-6 relative inline-block">
              Eğitimler
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#D92827] rounded-full" />
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D92827]" />{" "}
                Kyokushin Karate
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D92827]" /> Kata
                & Kumite
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D92827]" /> Çocuk
                Grubu
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D92827]" />{" "}
                Yetişkin Grubu
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D92827]" /> Özel
                Dersler
              </li>
            </ul>
          </div>

          {/* 4. Sütun: İletişim Bilgileri */}
          <div>
            <h3 className="text-lg font-bold font-[Montserrat] mb-6 relative inline-block">
              Bize Ulaşın
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#D92827] rounded-full" />
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm text-gray-400 group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#D92827] transition-colors">
                  <FaMapMarkerAlt className="group-hover:text-white transition-colors" />
                </div>
                <span>
                  Tuzla, İstanbul
                  <br />
                  Türkiye
                </span>
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-400 group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#D92827] transition-colors">
                  <FaPhone className="group-hover:text-white transition-colors" />
                </div>
                <span>+90 552 004 27 05</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-400 group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#D92827] transition-colors">
                  <FaEnvelope className="group-hover:text-white transition-colors" />
                </div>
                <span className="break-all">kocyigitdojo@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- ALT KISIM (Copyright) --- */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white font-bold">Koçyiğit Dojo</span>. Tüm
            hakları saklıdır.
          </p>

          <div className="flex items-center gap-6 text-xs text-gray-500 font-medium uppercase tracking-wider">
            <Link to="/gizlilik" className="hover:text-white transition-colors">
              Gizlilik Politikası
            </Link>
            <Link
              to="/kullanim-sartlari"
              className="hover:text-white transition-colors"
            >
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
