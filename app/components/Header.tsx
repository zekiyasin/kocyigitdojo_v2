// src/components/Header.tsx
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router";
import logo from "../assets/logo.svg";
import Menu from "./Menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* DÜZELTME: "bg-gray-700" ve "backdrop-blur" SİLİNDİ.
        Artık sadece "pointer-events-none" var. 
        Böylece header alanı tıklamaları engellemez, sadece içindeki butonlar tıklanır.
      */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 flex justify-between items-start">
          {/* --- SOL TARAFTAKİ "BAYRAK" (RIBBON) LOGO ALANI --- */}
          <div className="pointer-events-auto bg-[#1A2238] text-white shadow-2xl flex flex-col items-center px-5 pt-6 pb-8 rounded-b-lg relative overflow-hidden group transition-all duration-300 hover:pb-10">
            {/* Dekoratif Kırmızı Çizgi */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D92827]" />

            <Link to="/" className="flex flex-col items-center gap-3">
              {/* Logo */}
              <div className="relative z-10 p-2 bg-white/5 rounded-full border border-white/10">
                <img
                  src={logo}
                  alt="Koçyiğit Dojo"
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Yazı */}
              <div className="text-center z-10 mt-1">
                <span className="block font-[Montserrat] font-black text-xl tracking-widest uppercase leading-none mb-1">
                  KOÇYİĞİT
                </span>
                <span className="block font-[Montserrat] font-bold text-sm tracking-[0.4em] text-[#D92827] uppercase">
                  DOJO
                </span>
              </div>

              {/* Dekoratif Çizgi */}
              <div className="w-8 h-0.5 bg-white/20 mt-4 group-hover:w-16 transition-all duration-500" />
            </Link>

            {/* Arka Plan Deseni */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/20 pointer-events-none" />
          </div>

          {/* --- SAĞ MENÜ BUTONU --- */}
          <div className="mt-8 pointer-events-auto">
            <button
              onClick={() => setOpen(true)}
              className={`
                flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 group
                border shadow-lg
                ${
                  scrolled
                    ? "bg-[#D92827] text-white border-[#D92827]"
                    : "bg-white/10 text-white border-white/30 hover:bg-[#D92827] hover:border-[#D92827]"
                }
              `}
            >
              <span className="font-[Montserrat] font-bold tracking-wider text-sm uppercase">
                Menü
              </span>
              <FiMenu className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </header>

      <Menu isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
