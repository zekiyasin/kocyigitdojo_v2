import { useState } from "react";
import { useFadeInOnMount } from "../hooks/useFadeInOnMount";
import apiClient from "../services/api";
import type { Route } from "./+types/basvuru-sorgula";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Başvuru Sorgula | Koçyiğit Dojo",
    },
    {
      name: "description",
      content: "Koçyiğit Dojo sporcu başvurunuzun durumunu sorgulayın.",
    },
  ];
}

interface ApplicationStatus {
  applicationNumber: string;
  fullName: string;
  email: string;
  phone: string;
  status: string;
  statusDisplay: string;
  createdAt: string;
  reviewedAt: string | null;
  club: {
    name: string;
  } | null;
}

export default function BasvuruSorgula() {
  const isLoaded = useFadeInOnMount();
  const [applicationNumber, setApplicationNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ApplicationStatus | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await apiClient.post("/applications/check-status", {
        applicationNumber: applicationNumber.trim().toUpperCase(),
      });
      setResult(response.data);
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Başvuru sorgulanırken bir hata oluştu"
      );
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/30";
      case "approved":
        return "text-green-400 bg-green-500/10 border-green-500/30";
      case "rejected":
        return "text-red-400 bg-red-500/10 border-red-500/30";
      case "cancelled":
        return "text-gray-400 bg-gray-500/10 border-gray-500/30";
      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/30";
    }
  };

  return (
    <div
      className={`
        min-h-screen bg-[#1A2238] py-20
        transition-all duration-1000 ease-out
        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Başvuru Sorgulama
          </h1>
          <p className="text-gray-300 text-lg">
            Başvuru numaranızı girerek başvurunuzun durumunu sorgulayabilirsiniz
          </p>
        </div>

        {/* Sorgulama Formu */}
        <form
          onSubmit={handleSubmit}
          className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-2xl p-8 mb-8"
        >
          <div className="mb-6">
            <label className="block text-gray-300 mb-3 text-sm font-medium">
              Başvuru Numarası
            </label>
            <input
              type="text"
              value={applicationNumber}
              onChange={(e) => setApplicationNumber(e.target.value)}
              placeholder="Örn: BA-2026-0001"
              required
              className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors uppercase"
            />
            <p className="text-gray-400 text-sm mt-2">
              Başvuru numaranız başvuru sonrası size iletilen numaradır
            </p>
          </div>

          <button
            type="submit"
            disabled={loading || !applicationNumber.trim()}
            className="w-full bg-[#D92827] hover:bg-[#b91e1d] text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sorgulanıyor..." : "Sorgula"}
          </button>
        </form>

        {/* Hata Mesajı */}
        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-100 px-6 py-4 rounded-lg mb-8">
            <p className="font-semibold">Hata!</p>
            <p className="text-sm mt-1">{error}</p>
          </div>
        )}

        {/* Sonuç */}
        {result && (
          <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-red-900/50 pb-3">
              Başvuru Detayları
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-gray-400">Başvuru Numarası</span>
                <span className="text-white font-bold">
                  {result.applicationNumber}
                </span>
              </div>

              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-gray-400">Ad Soyad</span>
                <span className="text-white font-semibold">
                  {result.fullName}
                </span>
              </div>

              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-gray-400">E-posta</span>
                <span className="text-white">{result.email}</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-gray-400">Telefon</span>
                <span className="text-white">{result.phone}</span>
              </div>

              {result.club && (
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-400">Kulüp</span>
                  <span className="text-white">{result.club.name}</span>
                </div>
              )}

              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-gray-400">Başvuru Tarihi</span>
                <span className="text-white">
                  {new Date(result.createdAt).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              {result.reviewedAt && (
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-400">İncelenme Tarihi</span>
                  <span className="text-white">
                    {new Date(result.reviewedAt).toLocaleDateString("tr-TR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              )}

              <div className="p-6 bg-white/5 rounded-lg border-l-4 border-[#D92827]">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 font-medium">Durum</span>
                  <span
                    className={`px-4 py-2 rounded-lg font-bold border ${getStatusColor(
                      result.status
                    )}`}
                  >
                    {result.statusDisplay}
                  </span>
                </div>
              </div>
            </div>

            {/* Durum Açıklamaları */}
            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <p className="text-sm text-blue-200">
                {result.status === "pending" &&
                  "⏳ Başvurunuz incelenmektedir. En kısa sürede size dönüş yapılacaktır."}
                {result.status === "approved" &&
                  "✅ Tebrikler! Başvurunuz onaylanmıştır. Yakında sizinle iletişime geçilecektir."}
                {result.status === "rejected" &&
                  "❌ Başvurunuz değerlendirme sonucu reddedilmiştir."}
                {result.status === "cancelled" &&
                  "⭕ Başvurunuz iptal edilmiştir."}
              </p>
            </div>
          </div>
        )}

        {/* Bilgilendirme */}
        {!result && (
          <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-3">
              📋 Başvuru Numaranızı Nasıl Bulursunuz?
            </h3>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>
                • Başvuru numaranız, başvuru yaptıktan sonra ekranda gösterilir
              </li>
              <li>• E-posta adresinize gönderilen mailde yer alır</li>
              <li>• BA-YYYY-XXXX formatındadır (Örn: BA-2026-0001)</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
