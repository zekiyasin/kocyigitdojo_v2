import React, { useCallback, useEffect, useRef, useState } from "react";
import type { Route } from "./+types/galeri";
import { useDropzone } from "react-dropzone";
import localforage from "localforage";
import {
  FaCloudUploadAlt,
  FaTrash,
  FaDownload,
  FaExpand,
} from "react-icons/fa"; // İkonlar için (yüklü değilse npm install react-icons)

/** IndexedDB kayıt tipi */
type SavedFile = {
  id: string;
  name: string;
  type: string;
  createdAt: number;
  blob: Blob;
};
type UIFile = SavedFile & { url: string };

localforage.config({ name: "dojo-gallery", storeName: "uploads" });

const fmtMB = (bytes: number) => (bytes / (1024 * 1024)).toFixed(2);
const safeName = (s: string) =>
  s
    .replace(/[\\/:*?"<>|]+/g, "_")
    .replace(/\s+/g, " ")
    .trim();

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Galeri - Koçyiğit Dojo Karate" },
    {
      name: "description",
      content: "Koçyiğit Dojo Karate etkinliklerinden fotoğraflar ve anılar.",
    },
  ];
}

export default function GalleryUpload() {
  const [items, setItems] = useState<UIFile[]>([]);
  const [busy, setBusy] = useState(false);

  // LIGHTBOX state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // İlk açılışta IndexedDB'den yükle
  useEffect(() => {
    let alive = true;
    (async () => {
      const list: UIFile[] = [];
      await localforage.iterate<SavedFile, void>((value) => {
        const url = URL.createObjectURL(value.blob);
        list.push({ ...value, url });
      });
      list.sort((a, b) => b.createdAt - a.createdAt);
      if (alive) setItems(list);
    })();
    return () => {
      alive = false;
      items.forEach((f) => URL.revokeObjectURL(f.url));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sürükle-bırak ile ekle + IndexedDB'ye kaydet
  const onDrop = useCallback(async (accepted: File[]) => {
    if (!accepted.length) return;
    setBusy(true);
    try {
      const newly: UIFile[] = [];
      for (const file of accepted) {
        const id = crypto.randomUUID();
        const rec: SavedFile = {
          id,
          name: file.name,
          type: file.type || "image/*",
          createdAt: Date.now(),
          blob: file,
        };
        await localforage.setItem(id, rec);
        const url = URL.createObjectURL(file);
        newly.push({ ...rec, url });
      }
      setItems((prev) =>
        [...newly, ...prev].sort((a, b) => b.createdAt - a.createdAt)
      );
    } finally {
      setBusy(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
    noClick: true,
  });

  // Tek tek sil
  const removeOne = useCallback(
    async (id: string) => {
      const t = items.find((x) => x.id === id);
      await localforage.removeItem(id);
      setItems((prev) => prev.filter((x) => x.id !== id));
      if (t) URL.revokeObjectURL(t.url);
      if (lightboxIndex !== null && items[lightboxIndex]?.id === id) {
        setLightboxIndex(null);
        setZoomed(false);
      }
    },
    [items, lightboxIndex]
  );

  // Tek tek indir
  const downloadOne = useCallback(async (id: string) => {
    const rec = await localforage.getItem<SavedFile>(id);
    if (!rec) return;
    const url = URL.createObjectURL(rec.blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = safeName(rec.name || `${id}.jpg`);
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, []);

  const totalBytes = items.reduce((a, x) => a + (x.blob.size || 0), 0);

  // Lightbox helpers
  const openLightbox = useCallback((idx: number) => {
    setLightboxIndex(idx);
    setZoomed(false);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    setZoomed(false);
  }, []);

  const next = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % items.length);
    setZoomed(false);
  }, [lightboxIndex, items.length]);

  const prev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + items.length) % items.length);
    setZoomed(false);
  }, [lightboxIndex, items.length]);

  // Klavye destek (Esc, ←, →)
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, next, prev]);

  return (
    <div className="min-h-screen bg-[#1A2238] text-white py-10 px-4 relative overflow-hidden">
      {/* Arka Plan Dekorları */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#D92827]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header Alanı */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl font-[Montserrat] font-bold tracking-wide uppercase">
              Galeri
            </h1>
            <div className="mt-3 h-1.5 w-20 rounded-full bg-[#D92827]" />
            <p className="text-gray-400 mt-2 text-sm">
              Anılarınızı güvenle saklayın ve yönetin.
            </p>
          </div>

          <div className="flex gap-3">
            <div className="flex flex-col items-end px-4 py-2 rounded-lg bg-[#232d4b] border border-white/5 shadow-sm">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                Toplam Dosya
              </span>
              <span className="text-lg font-mono font-bold text-white">
                {items.length}
              </span>
            </div>
            <div className="flex flex-col items-end px-4 py-2 rounded-lg bg-[#232d4b] border border-white/5 shadow-sm">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                Boyut
              </span>
              <span className="text-lg font-mono font-bold text-[#D92827]">
                {fmtMB(totalBytes)} MB
              </span>
            </div>
          </div>
        </header>

        {/* Dropzone Alanı */}
        <section
          {...getRootProps()}
          className={`
            group relative rounded-2xl border-2 border-dashed p-10 text-center transition-all duration-300 ease-out cursor-pointer
            ${
              isDragActive
                ? "border-[#D92827] bg-[#D92827]/5 scale-[1.01]"
                : "border-white/10 bg-[#232d4b]/50 hover:border-white/30 hover:bg-[#232d4b]"
            }
          `}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center gap-4">
            <div
              className={`
              p-4 rounded-full bg-white/5 transition-all duration-300
              ${
                isDragActive
                  ? "bg-[#D92827] text-white scale-110"
                  : "text-gray-400 group-hover:text-white group-hover:bg-white/10"
              }
            `}
            >
              <FaCloudUploadAlt className="text-4xl" />
            </div>

            <div className="space-y-1">
              <p className="text-lg font-medium text-white">
                Görselleri buraya sürükleyin
              </p>
              <p className="text-sm text-gray-400">
                veya dosya seçmek için{" "}
                <span className="text-[#D92827] font-bold underline decoration-2 decoration-[#D92827]/30 hover:decoration-[#D92827]">
                  tıklayın
                </span>
              </p>
            </div>

            {busy && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#1A2238]/80 backdrop-blur-sm rounded-2xl">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-4 border-[#D92827] border-t-transparent rounded-full animate-spin" />
                  <p className="text-white font-medium animate-pulse">
                    Yükleniyor...
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Galeri Grid - Masonry */}
        <section className="mt-12">
          {items.length === 0 ? (
            <div className="text-center py-20 opacity-50">
              <p className="text-gray-400">Henüz hiç fotoğraf yüklenmemiş.</p>
            </div>
          ) : (
            <div className="columns-1 xs:columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-6 [column-fill:balance]">
              {items.map((file, idx) => (
                <figure
                  key={file.id}
                  className="group relative mb-6 break-inside-avoid overflow-hidden rounded-xl bg-[#232d4b] border border-white/5 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-white/20"
                >
                  {/* Görsel */}
                  <div
                    className="relative overflow-hidden cursor-zoom-in"
                    onClick={() => openLightbox(idx)}
                  >
                    <img
                      src={file.url}
                      alt={file.name}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                    {/* Büyüt İkonu (Hover'da çıkar) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <FaExpand className="text-white text-3xl drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Alt Bilgi Barı */}
                  <figcaption className="absolute bottom-0 inset-x-0 p-3 bg-linear-to-t from-black/90 via-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between gap-3">
                    <span className="text-xs text-white/90 font-medium truncate flex-1 pl-1">
                      {file.name}
                    </span>

                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          downloadOne(file.id);
                        }}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                        title="İndir"
                      >
                        <FaDownload size={12} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeOne(file.id);
                        }}
                        className="p-2 rounded-lg bg-red-600/80 hover:bg-red-600 text-white transition-colors"
                        title="Sil"
                      >
                        <FaTrash size={12} />
                      </button>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && items[lightboxIndex] && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-[#1A2238]/95 backdrop-blur-md"
          onClick={closeLightbox}
          onTouchStart={(e) =>
            (touchStartX.current = e.changedTouches[0].clientX)
          }
          onTouchEnd={(e) => {
            const start = touchStartX.current;
            if (start == null) return;
            const dx = e.changedTouches[0].clientX - start;
            if (dx > 50) prev();
            if (dx < -50) next();
            touchStartX.current = null;
          }}
        >
          {/* Kapat Butonu */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-[#D92827] text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
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

          {/* Navigasyon Butonları */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white hidden sm:block transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white hidden sm:block transition-colors"
          >
            <svg
              className="w-8 h-8"
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

          {/* Görsel Container */}
          <div
            className="relative w-full h-full flex flex-col items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={items[lightboxIndex].url}
              alt={items[lightboxIndex].name}
              className={`
                max-h-[85vh] max-w-[95vw] object-contain shadow-2xl rounded-lg
                transition-transform duration-300 ease-out select-none
                ${
                  zoomed
                    ? "cursor-zoom-out scale-[1.5]"
                    : "cursor-zoom-in scale-100"
                }
              `}
              style={{ transformOrigin: "center" }}
              onClick={() => setZoomed(!zoomed)}
              draggable={false}
            />

            {/* Alt Bilgi */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-6">
              <span className="text-white font-medium text-sm truncate max-w-[200px]">
                {items[lightboxIndex].name}
              </span>
              <div className="w-px h-4 bg-white/20" />
              <button
                onClick={() => downloadOne(items[lightboxIndex!].id)}
                className="text-gray-300 hover:text-[#D92827] transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              >
                <FaDownload /> İndir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
