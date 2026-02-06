import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/kata";
import kataService, { type Kata } from "../services/kataService";
import kanji from "../assets/kanji.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kata Eğitimi | Kyokushin Karate Tuzla - Koçyiğit Dojo" },
    {
      name: "description",
      content:
        "Kyokushin Karate kata eğitimleri İstanbul Tuzla'da. Taikyoku, Pinan, Gekisai serisi katalar ve teknik videolar ile öğrenin. Shinkyokushin Türkiye standartlarında eğitim.",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://kocyigitdojo.com/kata",
    },
    {
      name: "keywords",
      content:
        "Kyokushin Kata, Karate Kata Eğitimi, Taikyoku, Pinan Kata, Kata Tuzla, Kata İstanbul, Shinkyokushin Kata",
    },
  ];
}

const KataPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [katas, setKatas] = useState<Kata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
    loadKatas();
  }, []);

  const loadKatas = async () => {
    try {
      setLoading(true);
      const response = await kataService.getAll({ limit: 100 });
      setKatas(response.data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Katalar yüklenemedi");
    } finally {
      setLoading(false);
    }
  };

  const getYoutubeVideoId = (videoUrl: string | null): string => {
    if (!videoUrl) return "";
    // Extract YouTube video ID from various URL formats
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = videoUrl.match(regExp);
    return match && match[2].length === 11 ? match[2] : videoUrl;
  };

  return (
    <section
      className={`
        relative bg-[#1A2238] min-h-screen py-20 px-4 overflow-hidden
        transition-all duration-1000 ease-out
        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* --- ARKA PLAN DEKORLARI --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/4 w-[600px] h-[600px] bg-[#D92827]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <img
        src={kanji}
        alt="Kyokushin Kanji"
        className="
          pointer-events-none select-none
          hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          h-[600px] opacity-[0.03] z-0 animate-pulse
        "
      />

      {/* --- İÇERİK --- */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-[Montserrat] font-bold tracking-wide uppercase text-white">
            Kyokushin Kata Eğitimi - Tuzla İstanbul
          </h1>
          <div className="mt-4 h-1.5 w-24 bg-[#D92827] rounded-full mx-auto shadow-[0_0_15px_rgba(217,40,39,0.5)]" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base">
            Kyokushin Karate'nin temeli olan kataları, ustalarımızın anlatımıyla
            adım adım öğrenin ve tekniğinizi geliştirin.
          </p>
        </div>

        {/* Kata Listesi */}
        {loading ? (
          <div className="text-center text-gray-400 py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
            <p className="mt-4">Katalar yükleniyor...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-400 py-20">
            <p>{error}</p>
            <button
              onClick={loadKatas}
              className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
            >
              Tekrar Dene
            </button>
          </div>
        ) : katas.length === 0 ? (
          <div className="text-center text-gray-400 py-20">
            <p>Henüz kata eklenmemiş.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {katas.map((kata: Kata) => (
              <Link
                key={kata.id}
                to={`/kata/${kata.id}`}
                className="
                  group bg-[#232d4b] backdrop-blur-md rounded-2xl border border-white/5
                  overflow-hidden shadow-xl
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-red-900/20 hover:border-white/10
                "
              >
                {/* Video Thumbnail */}
                <div className="aspect-video w-full bg-black relative group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-shadow">
                  {kata.videoType === "youtube" && kata.videoUrl ? (
                    <img
                      src={`https://img.youtube.com/vi/${getYoutubeVideoId(kata.videoUrl)}/maxresdefault.jpg`}
                      alt={kata.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          `https://img.youtube.com/vi/${getYoutubeVideoId(kata.videoUrl)}/hqdefault.jpg`;
                      }}
                    />
                  ) : kata.videoThumbnailUrl ? (
                    <img
                      src={kata.videoThumbnailUrl}
                      alt={kata.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <span>Video Yok</span>
                    </div>
                  )}

                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bilgi Alanı */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#D92827] uppercase tracking-wider border border-[#D92827]/30 px-2 py-1 rounded bg-[#D92827]/5">
                      {kata.style}
                    </span>
                    {kata.minimumBeltLevel && (
                      <span className="text-xs text-gray-400">
                        Min: {kata.minimumBeltLevel.replace("_", " ")}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-[Montserrat] font-bold text-white group-hover:text-[#D92827] transition-colors">
                    {kata.name}
                  </h3>
                  {kata.japaneseName && (
                    <p className="text-sm text-gray-400 mt-1">
                      {kata.japaneseName}
                    </p>
                  )}
                  {kata.description && (
                    <p className="text-sm text-gray-300 mt-3 line-clamp-2">
                      {kata.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default KataPage;
