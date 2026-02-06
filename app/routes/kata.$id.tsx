import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import type { Route } from "./+types/kata.$id";
import kataService, { type Kata } from "../services/kataService";
import kanji from "../assets/kanji.png";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `Kata Detayı | Koçyiğit Dojo` },
    {
      name: "description",
      content: "Kyokushin Karate kata eğitimi ve detaylı açıklamaları.",
    },
  ];
}

export default function KataDetail() {
  const { id } = useParams();
  const [kata, setKata] = useState<Kata | null>(null);
  const [otherKatas, setOtherKatas] = useState<Kata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
    if (id) {
      loadKata(id);
      loadOtherKatas(id);
    }
  }, [id]);

  const loadKata = async (kataId: string) => {
    try {
      setLoading(true);
      const response = await kataService.getById(kataId);
      setKata(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Kata yüklenemedi');
    } finally {
      setLoading(false);
    }
  };

  const loadOtherKatas = async (currentKataId: string) => {
    try {
      const response = await kataService.getAll({ limit: 6 });
      // Filter out current kata
      const filtered = response.data.data.filter(k => k.id !== currentKataId);
      setOtherKatas(filtered.slice(0, 5));
    } catch (err) {
      console.error('Diğer katalar yüklenemedi:', err);
    }
  };

  const getYoutubeVideoId = (videoUrl: string | null): string => {
    if (!videoUrl) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = videoUrl.match(regExp);
    return match && match[2].length === 11 ? match[2] : videoUrl;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1A2238] flex items-center justify-center">
        <div className="text-center text-gray-400">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
          <p className="mt-4">Kata yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (error || !kata) {
    return (
      <div className="min-h-screen bg-[#1A2238] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">{error || 'Kata bulunamadı'}</p>
          <Link
            to="/kata"
            className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors text-white"
          >
            Kata Listesine Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section
      className={`
        relative bg-[#1A2238] min-h-screen py-20 px-4 overflow-hidden
        transition-all duration-1000 ease-out
        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* Arka Plan Dekorları */}
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

      {/* İçerik */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Geri Dön Butonu */}
        <Link
          to="/kata"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kata Listesine Dön
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sol - Video ve Bilgiler */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <div className="bg-[#232d4b] rounded-2xl overflow-hidden border border-white/5 shadow-xl">
              <div className="aspect-video bg-black">
                {kata.videoType === 'youtube' && kata.videoUrl ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${getYoutubeVideoId(kata.videoUrl)}`}
                    title={kata.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <span>Video Mevcut Değil</span>
                  </div>
                )}
              </div>
            </div>

            {/* Kata Başlık ve Genel Bilgiler */}
            <div className="bg-[#232d4b] rounded-2xl p-6 border border-white/5">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">{kata.name}</h1>
                  {kata.japaneseName && (
                    <p className="text-xl text-gray-400">{kata.japaneseName}</p>
                  )}
                </div>
                <span className="text-sm font-bold text-[#D92827] uppercase tracking-wider border border-[#D92827]/30 px-3 py-1.5 rounded bg-[#D92827]/5">
                  {kata.style}
                </span>
              </div>

              {kata.description && (
                <p className="text-gray-300 leading-relaxed">{kata.description}</p>
              )}

              {kata.japaneseDescription && (
                <p className="text-gray-400 text-sm mt-3 italic">{kata.japaneseDescription}</p>
              )}

              {/* Özellikler */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {kata.minimumBeltLevel && (
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Minimum Kuşak</p>
                    <p className="text-white font-medium">{kata.minimumBeltLevel.replace('_', ' ')}</p>
                  </div>
                )}
                {kata.difficultyLevel && (
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Zorluk</p>
                    <p className="text-white font-medium capitalize">{kata.difficultyLevel}</p>
                  </div>
                )}
                {kata.numberOfMoves && (
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Hareket Sayısı</p>
                    <p className="text-white font-medium">{kata.numberOfMoves}</p>
                  </div>
                )}
                {kata.estimatedDuration && (
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Süre</p>
                    <p className="text-white font-medium">{kata.estimatedDuration} saniye</p>
                  </div>
                )}
                {kata.kataType && (
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Tip</p>
                    <p className="text-white font-medium capitalize">{kata.kataType}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Teknikler ve Duruşlar */}
            {(kata.keyTechniques?.length > 0 || kata.stances?.length > 0) && (
              <div className="bg-[#232d4b] rounded-2xl p-6 border border-white/5">
                <h2 className="text-xl font-bold text-white mb-4">Teknikler ve Duruşlar</h2>
                
                {kata.keyTechniques?.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Ana Teknikler:</p>
                    <div className="flex flex-wrap gap-2">
                      {kata.keyTechniques.map((technique, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-red-900/20 border border-red-900/30 rounded-full text-sm text-red-400"
                        >
                          {technique}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {kata.stances?.length > 0 && (
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Duruşlar:</p>
                    <div className="flex flex-wrap gap-2">
                      {kata.stances.map((stance, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-900/20 border border-blue-900/30 rounded-full text-sm text-blue-400"
                        >
                          {stance}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Notlar ve İpuçları */}
            {(kata.notes || kata.commonMistakes || kata.trainingTips) && (
              <div className="space-y-4">
                {kata.notes && (
                  <div className="bg-[#232d4b] rounded-2xl p-6 border border-white/5">
                    <h3 className="text-lg font-bold text-white mb-3">📝 Notlar</h3>
                    <p className="text-gray-300 leading-relaxed">{kata.notes}</p>
                  </div>
                )}

                {kata.commonMistakes && (
                  <div className="bg-[#232d4b] rounded-2xl p-6 border border-red-900/20">
                    <h3 className="text-lg font-bold text-red-400 mb-3">⚠️ Yaygın Hatalar</h3>
                    <p className="text-gray-300 leading-relaxed">{kata.commonMistakes}</p>
                  </div>
                )}

                {kata.trainingTips && (
                  <div className="bg-[#232d4b] rounded-2xl p-6 border border-green-900/20">
                    <h3 className="text-lg font-bold text-green-400 mb-3">💡 Antrenman İpuçları</h3>
                    <p className="text-gray-300 leading-relaxed">{kata.trainingTips}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sağ - Diğer Katalar */}
          <div className="lg:col-span-1">
            <div className="bg-[#232d4b] rounded-2xl p-6 border border-white/5 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-4">Diğer Katalar</h2>
              
              {otherKatas.length === 0 ? (
                <p className="text-gray-400 text-sm">Başka kata bulunamadı.</p>
              ) : (
                <div className="space-y-4">
                  {otherKatas.map((otherKata) => (
                    <Link
                      key={otherKata.id}
                      to={`/kata/${otherKata.id}`}
                      className="block group"
                    >
                      <div className="flex gap-3 p-3 rounded-lg bg-[#1A2238] hover:bg-[#253152] border border-white/5 hover:border-white/10 transition-all">
                        {/* Thumbnail */}
                        <div className="flex-shrink-0 w-24 h-16 bg-black rounded overflow-hidden">
                          {otherKata.videoType === 'youtube' && otherKata.videoUrl ? (
                            <img
                              src={`https://img.youtube.com/vi/${getYoutubeVideoId(otherKata.videoUrl)}/default.jpg`}
                              alt={otherKata.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-600 text-xs">
                              No Video
                            </div>
                          )}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors truncate">
                            {otherKata.name}
                          </h3>
                          {otherKata.japaneseName && (
                            <p className="text-xs text-gray-400 truncate">{otherKata.japaneseName}</p>
                          )}
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-gray-500">{otherKata.style}</span>
                            {otherKata.minimumBeltLevel && (
                              <>
                                <span className="text-gray-600">•</span>
                                <span className="text-xs text-gray-500">
                                  {otherKata.minimumBeltLevel.replace('_', ' ')}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              <Link
                to="/kata"
                className="block mt-4 text-center py-2 px-4 bg-red-600 hover:bg-red-700 rounded-lg text-white text-sm font-medium transition-colors"
              >
                Tüm Katalar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
