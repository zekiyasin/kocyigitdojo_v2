import { useState, useEffect } from "react";
import type { Route } from "./+types/sinavlar";
import { kyuList, egzersizTablosu } from "../data/kyu";
import type { KyuContent, EgzersizRow, Item } from "../data/kyu";
import { FaPlay, FaChevronDown, FaChevronUp, FaRunning } from "react-icons/fa";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sınavlar - Koçyiğit Dojo Karate" },
    {
      name: "description",
      content: "Kyokushin Karate kyu sınavları, müfredat ve egzersiz tabloları hakkında detaylı bilgi.",
    },
  ];
}

// --- Alt Bileşen: Bölüm Listesi ---
const SectionList = ({ items }: { items: Item[] }) => {
  return (
    <ul className="space-y-3">
      {items.map((it: Item, i: number) => (
        <li key={i} className="flex items-start gap-3 group">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D92827] shrink-0" />
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
              {it.text}
            </span>
            {it.video && (
              <a
                href={it.video}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-[#D92827]/30 px-3 py-1 text-[10px] font-bold uppercase text-[#D92827] hover:bg-[#D92827] hover:text-white transition-all"
                title="Teknik Videosunu İzle"
              >
                <FaPlay size={8} /> İzle
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

// --- Alt Bileşen: Akordeon (Accordion) ---
const KyuAccordion = ({ data, index }: { data: KyuContent; index: number }) => {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="rounded-xl bg-[#232d4b] border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10 shadow-lg">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`
          w-full flex items-center justify-between px-6 py-5 text-left transition-colors
          ${open ? "bg-white/5" : "hover:bg-white/5"}
        `}
      >
        <div className="flex items-center gap-4">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#D92827]/10 text-[#D92827] font-bold border border-[#D92827]/20">
            {data.kyu.match(/\d+/)?.[0] || "?"}
          </span>
          <h3 className="text-lg font-[Montserrat] font-bold text-white tracking-wide">
            {data.kyu}
          </h3>
        </div>
        <span className="text-gray-400">
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      {/* İçerik Animasyonu (Basit Yükseklik Geçişi yerine koşullu render şimdilik yeterli) */}
      {open && (
        <div className="p-6 border-t border-white/5 bg-[#1A2238]/50">
          <div className="grid md:grid-cols-2 gap-8">
            {data.sections.map(
              (sec: { title: string; items: Item[] }, i: number) => (
                <div
                  key={i}
                  className="rounded-lg border border-white/5 bg-white/2 p-5 hover:bg-white/4 transition-colors"
                >
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#D92827] border-b border-white/5 pb-2">
                    {sec.title}
                  </h4>
                  <SectionList items={sec.items} />
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// --- Alt Bileşen: Egzersiz Tablosu ---
const EgzersizTablosu = () => (
  <div className="rounded-2xl bg-[#232d4b] border border-white/5 shadow-2xl overflow-hidden mt-12">
    <div className="px-6 py-6 border-b border-white/5 flex items-center gap-3">
      <div className="p-2 bg-[#D92827]/10 rounded-lg text-[#D92827]">
        <FaRunning size={24} />
      </div>
      <div>
        <h3 className="text-white text-xl font-[Montserrat] font-bold">
          Fiziksel Yeterlilik Tablosu
        </h3>
        <p className="text-gray-400 text-sm mt-1">
          Kyu sınavlarında beklenen minimum tekrar ve süre hedefleri.
        </p>
      </div>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="bg-white/5 text-gray-300 font-[Montserrat] uppercase text-xs tracking-wider">
          <tr>
            <th className="px-6 py-4 font-bold text-white">Seviye</th>
            <th className="px-6 py-4">Esneklik</th>
            <th className="px-6 py-4 text-center">Şınav</th>
            <th className="px-6 py-4 text-center">Çök-Kalk</th>
            <th className="px-6 py-4 text-center">Mekik</th>
            <th className="px-6 py-4 text-center">Çubuk</th>
            <th className="px-6 py-4 text-center">Tobi Geri</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {egzersizTablosu.map((r: EgzersizRow, i: number) => (
            <tr
              key={i}
              className="hover:bg-white/2 transition-colors text-gray-300"
            >
              <td className="px-6 py-4 font-bold text-white bg-white/2">
                {r.kyu}
              </td>
              <td className="px-6 py-4">{r.esneklik}</td>
              <td className="px-6 py-4 text-center font-mono text-[#D92827] font-bold bg-[#D92827]/2">
                {r.sinav}
              </td>
              <td className="px-6 py-4 text-center font-mono">{r.çökkalk}</td>
              <td className="px-6 py-4 text-center font-mono">{r.mekik}</td>
              <td className="px-6 py-4 text-center font-mono">{r.çubuk}</td>
              <td className="px-6 py-4 text-center">{r.tobi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// --- Ana Bileşen ---
const Sinavlar = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  return (
    <section
      className={`
        relative bg-[#1A2238] min-h-screen py-20 px-4 text-white overflow-hidden
        transition-all duration-1000 ease-out
        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* Arka Plan Dekoru */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-[#D92827]/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Başlık */}
      <div className="max-w-4xl mx-auto mb-16 text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl font-[Montserrat] font-bold tracking-wide uppercase">
          Kyu Sınav Müfredatı
        </h1>
        <div className="mt-4 h-1.5 w-24 bg-[#D92827] rounded-full mx-auto shadow-[0_0_15px_rgba(217,40,39,0.5)]" />
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Koçyiğit Dojo standartlarına göre belirlenmiş teknik ve fiziksel
          gereksinimler. Her seviye için gereken teknikleri videolu anlatımlarla
          inceleyebilirsiniz.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-6 relative z-10">
        {/* Kyu Listesi (Accordion) */}
        {kyuList.map((k: KyuContent, i: number) => (
          <KyuAccordion key={k.kyu} data={k} index={i} />
        ))}

        {/* Egzersiz Tablosu */}
        <EgzersizTablosu />

        {/* Dipnot */}
        <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-center">
          <p className="text-yellow-500 text-sm font-medium">
            * Sınav tarihleri ve ek gereksinimler için lütfen Sensei ile
            iletişime geçiniz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sinavlar;
