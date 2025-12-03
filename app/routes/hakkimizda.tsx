import { useFadeInOnMount } from "../hooks/useFadeInOnMount";

import type { Route } from "./+types/hakkimizda";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hakkımızda - Koçyiğit Dojo | Kyokushin Türkiye" },
    {
      name: "description",
      content:
        "Koçyiğit Dojo, Türkiye'de Kyokushin ve Shinkyokushin Karate eğitimi veren köklü bir kulüptür. Sensei Edanur Koçyiğit ve ekibimiz hakkında bilgi edinin.",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://www.kocyigitdojo.com/hakkimizda",
    },
  ];
}

const About = () => {
  const isLoaded = useFadeInOnMount();

  return (
    <div
      className={`
        transition-all duration-1000 ease-out
        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* Hero Bölümü */}
      <section className="relative bg-gradient-to-br from-[#1A2238] to-[#0d1220] text-white py-24 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D92827]/10 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[Montserrat] font-black uppercase mb-6 leading-tight">
            Hakkımızda
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Türkiye'de Kyokushin geleneğini yaşatmanın gururu
          </p>
        </div>
      </section>

      {/* Ana İçerik */}
      <section className="bg-[#1A2238] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Dojo Tarihçesi */}
          <article className="bg-[#232d4b] p-8 rounded-2xl border border-white/5">
            <h2 className="text-3xl font-[Montserrat] font-bold mb-6 text-[#D92827]">
              Koçyiğit Dojo Tarihçesi
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                <strong>Koçyiğit Dojo</strong>, İstanbul Tuzla'da Kyokushin ve
                Shinkyokushin Karate eğitimi veren köklü bir kulüptür.
                Kurucuğumuz Sensei Edanur Koçyiğit'ın öncülüğünde, yıllardır
                Kyokushin Türkiye'nin önemli temsilcilerinden biri olarak
                faaliyet gösteriyoruz.
              </p>
              <p>
                Vizyonumuz, sadece teknik beceri kazandırmak değil, aynı zamanda
                öğrencilerimize disiplin, saygı, öz güven ve azim değerlerini
                aşılamaktır. Her yaştan sporcu için uygun programlar sunarak,
                Kyokushin felsefesini hayatın her alanına taşımalarını
                sağlıyoruz.
              </p>
            </div>
          </article>

          {/* Misyonumuz */}
          <article className="bg-[#232d4b] p-8 rounded-2xl border border-white/5">
            <h2 className="text-3xl font-[Montserrat] font-bold mb-6 text-[#D92827]">
              Misyonumuz ve Değerlerimiz
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Koçyiğit Dojo olarak misyonumuz, Kyokushin Karate'nin gerçek
                ruhunu ve değerlerini gelecek nesillere aktarmaktır. Bunu
                yaparken şu ilkelere bağlı kalırız:
              </p>
              <div className="bg-[#1A2238] p-6 rounded-lg border border-white/5">
                <ul className="space-y-3 list-disc list-inside">
                  <li>
                    <strong>Kaliteli Eğitim:</strong> Uluslararası
                    standartlarda, profesyonel eğitim
                  </li>
                  <li>
                    <strong>Kişisel Gelişim:</strong> Her öğrencinin
                    potansiyelini maksimize etme
                  </li>
                  <li>
                    <strong>Ahlaki Değerler:</strong> Saygı, dürüstlük ve
                    tevazuü ön planda tutma
                  </li>
                  <li>
                    <strong>Toplumsal Katkı:</strong> Sosyal sorumluluk
                    projelerine destek
                  </li>
                  <li>
                    <strong>Süreklilik:</strong> Yaşam boyu öğrenme ve gelişme
                    anlayışı
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Başarılarımız */}
          <article className="bg-[#232d4b] p-8 rounded-2xl border border-white/5">
            <h2 className="text-3xl font-[Montserrat] font-bold mb-6 text-[#D92827]">
              Başarılarımız ve Ödüllerimiz
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Koçyiğit Dojo sporcuları, ulusal ve uluslararası müsabakalarda
                Türkiye'yi başarıyla temsil etmektedir. Öğrencilerimiz, hem kata
                hem de kumite kategorilerinde çeşitli dereceler kazanmıştır.
              </p>
              <p>
                Kyokushin Türkiye çapında düzenlenen şampiyonalarda aldığımız
                madalyalar ve kupaıar, çalışmalarımızın karşılığıdır. Ancak en
                büyük başarımız, öğrencilerimizin hayatlarında gördükleri olumlu
                değişimlerdir.
              </p>
            </div>
          </article>

          {/* Eğitim Yakıaşımımız */}
          <article className="bg-[#232d4b] p-8 rounded-2xl border border-white/5">
            <h2 className="text-3xl font-[Montserrat] font-bold mb-6 text-[#D92827]">
              Eğitim Yakıaşımımız
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Dojomuzda uygulanan eğitim programı, Shinkyokushin Türkiye' nin
                resmi müfredatına uygun olarak tasarlanmıştır. Her antrenman, şu
                bileşenleri içerir:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-[#1A2238] p-6 rounded-lg border border-white/5">
                  <h3 className="text-lg font-bold mb-3 text-white">
                    Çocuk Grupları
                  </h3>
                  <p className="text-sm">
                    6-12 yaş arası çocuklar için oyun tabanlı, eğlenceli ve
                    eğitici programlar. Temel motor beceriler, koordinasyon ve
                    sosyal gelişim odaklı.
                  </p>
                </div>
                <div className="bg-[#1A2238] p-6 rounded-lg border border-white/5">
                  <h3 className="text-lg font-bold mb-3 text-white">
                    Genç ve Yetişkin Grupları
                  </h3>
                  <p className="text-sm">
                    13 yaş ve üstü için yoğun teknik çalışmalar, kumite
                    antrenmanları ve fiziksel kondisyon programları. Müsabaka
                    hazırlıkları ve derece sınavları.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#D92827] to-[#b91f1e] p-8 rounded-2xl text-center shadow-2xl">
            <h2 className="text-3xl font-[Montserrat] font-bold mb-4 text-white">
              Ailemize Katılın
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Tuzla'daki dojomuzda sizi bekliyoruz. İlk deneme dersimiz
              ücretsizdir. Kyokushin ailesinin bir parçası olun.
            </p>
            <a
              href="/iletisim"
              className="inline-block bg-white text-[#D92827] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl active:scale-95"
            >
              İLETİŞİME GEÇİN
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
