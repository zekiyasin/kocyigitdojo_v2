import { useState } from "react";
import { useFadeInOnMount } from "../hooks/useFadeInOnMount";
import applicationService from "../services/applicationService";
import type { Route } from "./+types/basvuru";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Sporcu Başvurusu | Koçyiğit Dojo",
    },
    {
      name: "description",
      content:
        "Koçyiğit Dojo'ya sporcu olmak için başvurun. Kyokushin Karate eğitimine katılın.",
    },
  ];
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  birthDate: string;
  birthPlace: string;
  tcIdentity: string;
  gender: "male" | "female" | "";
  address: string;
  city: string;
  district: string;
  postalCode: string;
  motherName: string;
  fatherName: string;
  motherPhone: string;
  fatherPhone: string;
  guardianEmail: string;
  bloodType: string;
  allergies: string;
  healthConditions: string;
  medications: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelation: string;
  hasPreviousExperience: boolean;
  previousExperienceDetails: string;
  previousClub: string;
  notes: string;
}

export default function Basvuru() {
  const isLoaded = useFadeInOnMount();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    birthDate: "",
    birthPlace: "",
    tcIdentity: "",
    gender: "",
    address: "",
    city: "",
    district: "",
    postalCode: "",
    motherName: "",
    fatherName: "",
    motherPhone: "",
    fatherPhone: "",
    guardianEmail: "",
    bloodType: "",
    allergies: "",
    healthConditions: "",
    medications: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactRelation: "",
    hasPreviousExperience: false,
    previousExperienceDetails: "",
    previousClub: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await applicationService.submitApplication(formData);
      setSubmitSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        birthDate: "",
        birthPlace: "",
        tcIdentity: "",
        gender: "",
        address: "",
        city: "",
        district: "",
        postalCode: "",
        motherName: "",
        fatherName: "",
        motherPhone: "",
        fatherPhone: "",
        guardianEmail: "",
        bloodType: "",
        allergies: "",
        healthConditions: "",
        medications: "",
        emergencyContactName: "",
        emergencyContactPhone: "",
        emergencyContactRelation: "",
        hasPreviousExperience: false,
        previousExperienceDetails: "",
        previousClub: "",
        notes: "",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Bir hata oluştu");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`
        min-h-screen bg-linear-to-b from-black to-red-950 py-20
        transition-all duration-1000 ease-out
        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sporcu Başvurusu
          </h1>
          <p className="text-gray-300 text-lg">
            Koçyiğit Dojo ailesine katılmak için başvuru formunu doldurun
          </p>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="bg-green-500/20 border border-green-500 text-green-100 px-6 py-4 rounded-lg mb-8">
            <p className="font-semibold">Başvurunuz başarıyla alındı!</p>
            <p className="text-sm mt-1">En kısa sürede size dönüş yapacağız.</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-100 px-6 py-4 rounded-lg mb-8">
            <p className="font-semibold">Hata!</p>
            <p className="text-sm mt-1">{error}</p>
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-2xl p-8 space-y-8"
        >
          {/* Kişisel Bilgiler */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-red-900/50 pb-3">
              Kişisel Bilgiler
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  TC Kimlik No *
                </label>
                <input
                  type="text"
                  name="tcIdentity"
                  value={formData.tcIdentity}
                  onChange={handleChange}
                  required
                  maxLength={11}
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  E-posta *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Telefon *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Doğum Tarihi *
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Doğum Yeri *
                </label>
                <input
                  type="text"
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Cinsiyet *
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                >
                  <option value="">Seçiniz</option>
                  <option value="male">Erkek</option>
                  <option value="female">Kadın</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Kan Grubu
                </label>
                <select
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                >
                  <option value="">Seçiniz</option>
                  <option value="A+">A Rh+</option>
                  <option value="A-">A Rh-</option>
                  <option value="B+">B Rh+</option>
                  <option value="B-">B Rh-</option>
                  <option value="AB+">AB Rh+</option>
                  <option value="AB-">AB Rh-</option>
                  <option value="0+">0 Rh+</option>
                  <option value="0-">0 Rh-</option>
                </select>
              </div>
            </div>
          </div>

          {/* Adres Bilgileri */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-red-900/50 pb-3">
              Adres Bilgileri
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  İl *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  İlçe *
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Posta Kodu
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">
                Adres *
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
              />
            </div>
          </div>

          {/* Veli Bilgileri */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-red-900/50 pb-3">
              Veli Bilgileri
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Anne Adı
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Anne Telefon
                </label>
                <input
                  type="tel"
                  name="motherPhone"
                  value={formData.motherPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Baba Adı
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Baba Telefon
                </label>
                <input
                  type="tel"
                  name="fatherPhone"
                  value={formData.fatherPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Veli E-posta
                </label>
                <input
                  type="email"
                  name="guardianEmail"
                  value={formData.guardianEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Acil Durum İletişim */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-red-900/50 pb-3">
              Acil Durum İletişim
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  name="emergencyContactName"
                  value={formData.emergencyContactName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Telefon *
                </label>
                <input
                  type="tel"
                  name="emergencyContactPhone"
                  value={formData.emergencyContactPhone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Yakınlık Derecesi *
                </label>
                <input
                  type="text"
                  name="emergencyContactRelation"
                  value={formData.emergencyContactRelation}
                  onChange={handleChange}
                  required
                  placeholder="Örn: Anne, Baba, Kardeş"
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Sağlık Bilgileri */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-red-900/50 pb-3">
              Sağlık Bilgileri
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Sağlık Sorunları
                </label>
                <textarea
                  name="healthConditions"
                  value={formData.healthConditions}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Varsa belirtiniz"
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Alerjiler
                </label>
                <textarea
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Varsa belirtiniz"
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Kullanılan İlaçlar
                </label>
                <textarea
                  name="medications"
                  value={formData.medications}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Varsa belirtiniz"
                  className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          {/* Spor Geçmişi */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-red-900/50 pb-3">
              Spor Geçmişi
            </h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="hasPreviousExperience"
                  checked={formData.hasPreviousExperience}
                  onChange={handleChange}
                  className="w-5 h-5 bg-black/50 border border-red-900/30 rounded text-red-600 focus:ring-red-500 focus:ring-2"
                />
                <label className="ml-3 text-gray-300 text-sm font-medium">
                  Daha önce karate deneyimim var
                </label>
              </div>

              {formData.hasPreviousExperience && (
                <>
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Önceki Kulüp
                    </label>
                    <input
                      type="text"
                      name="previousClub"
                      value={formData.previousClub}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Deneyim Detayları
                    </label>
                    <textarea
                      name="previousExperienceDetails"
                      value={formData.previousExperienceDetails}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Kaç yıl, hangi kemer vb."
                      className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Notlar */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-red-900/50 pb-3">
              Ek Notlar
            </h2>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              placeholder="Belirtmek istediğiniz başka bir konu varsa yazabilirsiniz"
              className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 text-lg disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Gönderiliyor..." : "Başvuruyu Gönder"}
            </button>
            <p className="text-gray-400 text-sm text-center mt-4">
              * ile işaretli alanlar zorunludur
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
