import { useState, useEffect } from "react";
import type { Route } from "./+types/sinavlar";
import { egzersizTablosu } from "../data/kyu";
import type { EgzersizRow } from "../data/kyu";
import {
  FaChevronDown,
  FaChevronUp,
  FaRunning,
  FaSpinner,
} from "react-icons/fa";
import { getAllExams, getSortedRequirements } from "../services/examService";
import type { Exam, ExamRequirement } from "../services/examService";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Kyu Sınavları ve Müfredat | Kyokushin Karate Tuzla - Koçyiğit Dojo",
    },
    {
      name: "description",
      content:
        "Kyokushin Karate kyu sınav müfredatı ve fiziksel yeterlilik gereksinimleri. 10. kyu'dan 1. kyu'ya kadar tüm seviyeler için teknik videolar ve egzersiz tabloları. Tuzla İstanbul.",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://kocyigitdojo.com/sinavlar",
    },
    {
      name: "keywords",
      content:
        "Kyokushin Sınavlar, Kyu Sınavı, Karate Kemer Sınavı, Kyu Müfredat, Karate Seviyeler, Kyokushin Tuzla, Kemer Terfi",
    },
  ];
}

// --- Alt Bileşen: Gereksinim Listesi ---
const RequirementSection = ({
  requirement,
}: {
  requirement: ExamRequirement;
}) => {
  const sortedItems = [...(requirement.items || [])].sort(
    (a, b) => a.displayOrder - b.displayOrder,
  );

  return (
    <div className="rounded-lg border border-white/5 bg-white/2 p-5 hover:bg-white/4 transition-colors">
      <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#D92827] border-b border-white/5 pb-2 flex items-center justify-between">
        <span>{requirement.name}</span>
        <span className="text-[10px] text-gray-400 font-normal normal-case">
          {requirement.points} puan
        </span>
      </h4>
      {sortedItems.length > 0 ? (
        <ul className="space-y-3">
          {sortedItems.map((item) => (
            <li key={item.id} className="flex items-start gap-3 group">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D92827] shrink-0" />
              <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      ) : requirement.description ? (
        <p className="text-gray-400 text-sm">{requirement.description}</p>
      ) : (
        <p className="text-gray-500 text-sm italic">Detay belirtilmemiş</p>
      )}
    </div>
  );
};

// --- Alt Bileşen: Akordeon (Accordion) ---
const KyuAccordion = ({ exam, index }: { exam: Exam; index: number }) => {
  const [open, setOpen] = useState(index === 0);
  const sortedRequirements = getSortedRequirements(exam.requirements);

  const totalPoints =
    exam.totalScore ||
    exam.requirements.reduce((sum, req) => sum + req.points, 0);

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
            {exam.beltLevel.replace("_kyu", "")}
          </span>
          <div>
            <h3 className="text-lg font-[Montserrat] font-bold text-white tracking-wide">
              {exam.name}
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              {exam.beltName} · {exam.requirements.length} gereksinim ·{" "}
              {totalPoints} puan
            </p>
          </div>
        </div>
        <span className="text-gray-400">
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      {open && (
        <div className="p-6 border-t border-white/5 bg-[#1A2238]/50">
          {/* Sınav Bilgileri */}
          <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-xs text-gray-400 mb-1">Toplam Puan</div>
                <div className="text-lg font-bold text-white">
                  {totalPoints}
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">Geçme Puanı</div>
                <div className="text-lg font-bold text-[#D92827]">
                  {exam.passingScore || exam.minimumScore}
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">Süre</div>
                <div className="text-lg font-bold text-white">
                  {exam.estimatedDurationMinutes} dk
                </div>
              </div>
              {exam.bonusScore > 0 ? (
                <div>
                  <div className="text-xs text-gray-400 mb-1">Bonus Puan</div>
                  <div className="text-lg font-bold text-green-400">
                    +{exam.bonusScore}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-xs text-gray-400 mb-1">Gereksinim</div>
                  <div className="text-lg font-bold text-white">
                    {exam.requirements.length}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Gereksinimler */}
          <div className="grid md:grid-cols-2 gap-4">
            {sortedRequirements.map((requirement) => (
              <RequirementSection
                key={requirement.id}
                requirement={requirement}
              />
            ))}
          </div>

          {exam.description && (
            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-blue-300 text-sm">{exam.description}</p>
            </div>
          )}
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
  const [exams, setExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchExams = async () => {
      try {
        setLoading(true);
        const data = await getAllExams();

        // Sıralama: 10_kyu'dan 1_kyu'ya doğru
        const sorted = data.sort((a, b) => {
          const aNum = parseInt(a.beltLevel.replace("_kyu", ""));
          const bNum = parseInt(b.beltLevel.replace("_kyu", ""));
          return bNum - aNum; // Büyükten küçüğe (10, 9, 8, ...)
        });

        setExams(sorted);
        setError(null);
      } catch (err) {
        console.error("Sınavlar yüklenirken hata:", err);
        setError("Sınav bilgileri yüklenirken bir hata oluştu.");
      } finally {
        setLoading(false);
        setIsLoaded(true);
      }
    };

    fetchExams();
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
        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <FaSpinner className="animate-spin text-[#D92827] text-4xl mb-4" />
            <p className="text-gray-400">Sınav müfredatı yükleniyor...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-lg text-center">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {/* Exams List */}
        {!loading && !error && exams.length === 0 && (
          <div className="p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-center">
            <p className="text-yellow-400">Henüz sınav müfredatı bulunmuyor.</p>
          </div>
        )}

        {!loading && !error && exams.length > 0 && (
          <>
            {/* Kyu Listesi (Accordion) */}
            {exams.map((exam, index) => (
              <KyuAccordion key={exam.id} exam={exam} index={index} />
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
          </>
        )}
      </div>
    </section>
  );
};

export default Sinavlar;
