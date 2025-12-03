import React, { useEffect, useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mounted, setMounted] = useState(isOpen);
  const [animateIn, setAnimateIn] = useState(false);

  // ESC ile kapat
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Açılış / kapanış animasyonları
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      setAnimateIn(false);
      const id = requestAnimationFrame(() => setAnimateIn(true));
      return () => cancelAnimationFrame(id);
    } else {
      setAnimateIn(false);
      const t = setTimeout(() => setMounted(false), 500);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!mounted) return null;

  // MENÜ LİSTESİ: Kategorilerdeki sayfalar eklendi
  const menuItems = [
    { label: "Ana Sayfa", action: () => navigate("/") },

    // --- Eğitmenler & Sporcular ---
    { label: "Sensei", action: () => navigate("/sensei") },
    { label: "Senpai", action: () => navigate("/senpai") },
    { label: "Sporcu Sıralaması", action: () => navigate("/sporcu-siralama") },
    { label: "Kemer Listesi", action: () => navigate("/kemer-listesi") },

    // --- Eğitim & Bilgi ---
    { label: "Kata", action: () => navigate("/kata") },
    { label: "Kumite", action: () => navigate("/kumite") },
    { label: "Sınavlar", action: () => navigate("/sinavlar") },
    { label: "Dojo Kun", action: () => navigate("/dojo-kun") },
  ];

  return (
    <>
      {/* Arkaplan (Backdrop) */}
      <div
        className={`
          fixed inset-0 z-60 bg-black/60 backdrop-blur-sm
          transition-opacity duration-300 ease-out
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className={`
          fixed top-0 right-0 z-70 h-full w-full max-w-sm
          bg-[#1A2238] shadow-2xl border-l border-white/10
          transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1)
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Menü"
      >
        {/* Dekoratif Arka Plan Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D92827]/10 blur-[80px] pointer-events-none" />

        {/* Üst bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-6 border-b border-white/5 bg-[#1A2238]/95 backdrop-blur-md">
          <div className="flex flex-col">
            <h2 className="text-white font-[Montserrat] font-bold text-xl tracking-wider uppercase">
              Menü
            </h2>
            <div className="h-1 w-12 bg-[#D92827] rounded-full mt-1" />
          </div>

          <button
            onClick={onClose}
            className="
              text-white/80 hover:text-white 
              w-10 h-10 flex items-center justify-center rounded-full 
              bg-white/5 hover:bg-[#D92827] transition-all duration-300
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
            "
            aria-label="Menüyü kapat"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menü içeriği */}
        <nav className="relative overflow-y-auto h-[calc(100vh-88px)] px-6 py-4 space-y-1">
          {menuItems.map((item, i) => (
            <button
              key={item.label}
              onClick={item.action}
              className={`
                group flex items-center w-full text-left cursor-pointer p-3 rounded-xl
                transition-all duration-500 ease-out will-change-transform
                hover:bg-white/5 border border-transparent hover:border-white/5
                ${
                  animateIn
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12"
                }
              `}
              style={{ transitionDelay: `${50 + i * 30}ms` }}
            >
              <span
                className="
                font-[Montserrat] font-bold text-base sm:text-lg text-gray-300 
                group-hover:text-white group-hover:translate-x-2 transition-all duration-300
              "
              >
                {item.label}
              </span>

              {/* Hover Ok İkonu */}
              <svg
                className="ml-auto w-5 h-5 text-[#D92827] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          ))}

          {/* Alt Bilgi */}
          <div
            className={`mt-8 px-4 border-t border-white/10 pt-6 text-center transition-all duration-700 delay-500 ${
              animateIn
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-white/40 text-sm font-[Montserrat]">
              Koçyiğit Dojo © 2025
            </p>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Menu;
