import { useFadeInOnMount } from "../hooks/useFadeInOnMount";
import type { Route } from "./+types/kyokushin-nedir";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kyokushin ve Shinkyokushin Karate Nedir? - Koçyiğit Dojo" },
    {
      name: "description",
      content:
        "Kyokushin Karate'nin tarihçesi, Shinkyokushin felsefesi ve Türkiye'deki gelişimi. Mas Oyama'nın mirası, kuşak sistemi ve antrenman metodları hakkında detaylı bilgi.",
    },
  ];
}

export default function KyokushinNedir() {
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D92827]/10 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[Montserrat] font-black uppercase mb-6 leading-tight">
            Kyokushin Karate'nin <br />
            <span className="text-[#D92827]">
              Tarihçesi ve Türkiye'deki Yeri
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Gerçek gücün, disiplinin ve saygının buluştuğu martial arts
            yolculuğu
          </p>
        </div>
      </section>

      {/* Ana İçerik */}
      <section className="bg-[#1A2238] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Kyokushin Nedir */}
          <article className="bg-[#232d4b] p-8 rounded-2xl border border-white/5">
            <h2 className="text-3xl font-[Montserrat] font-bold mb-6 text-[#D92827]">
              Kyokushin Karate Nedir?
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                <strong>Kyokushin Karate</strong> (極真空手), Japonca'da "Nihai
                Gerçek" anlamına gelir ve 1964 yılında efsanevi dövüş sanatları
                ustası <strong>Masutatsu Oyama (Mas Oyama)</strong> tarafından
                kurulmuştur. Kyokushin, tam temaslı (full-contact) kumite ve
                güçlü fiziksel kondisyon ile tanınan, dünyanın en zorlu karate
                stillerinden biridir.
              </p>
              <p>
                Mas Oyama'nın vizyonu, sadece teknik becerilerin ötesinde,
                zihinsel dayanıklılık, öz disiplin ve karakter gelişimine
                odaklanan bir sistem yaratmaktı. Bu nedenle Kyokushin, yalnızca
                dövüş sanatı değil, aynı zamanda bir yaşam felsefesidir.
              </p>
              <p>
                Kyokushin'in ayırt edici özelliği, antrenmanların ve
                müsabakaların gerçek temas (bare-knuckle fighting) ile
                yapılmasıdır. Bu yaklaşım, öğrencilerin gerçek bir kavgada
                kullanabilecekleri pratik ve etkili teknikler geliştirmelerini
                sağlar.
              </p>
            </div>
          </article>

          {/* Shinkyokushin */}
          <article className="bg-[#232d4b] p-8 rounded-2xl border border-white/5">
            <h2 className="text-3xl font-[Montserrat] font-bold mb-6 text-[#D92827]">
              Shinkyokushin Nedir?
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                <strong>Shinkyokushin</strong> (新極真), Mas Oyama'nın
                vefatından sonra ortaya çıkan ve onun öğretilerini sürdürmeyi
                amaçlayan bir Kyokushin organizasyonudur. "Shin" (新) kelimesi
                "yeni" anlamına gelir ve Shinkyokushin, geleneksel Kyokushin
                prensiplerini modern dönemin ihtiyaçlarıyla birleştirir.
              </p>
              <p>
                Shinkyokushin Türkiye, ülkemizde Kyokushin Karate'nin en büyük
                ve en aktif organizasyonlarından biridir. Uluslararası
                federasyonlarla bağlantılı olarak, dünya çapında geçerliliği
                olan derece sınavları ve müsabakalar düzenler.
              </p>
              <p>
                Türkiye'de Shinkyokushin, çocuklardan yetişkinlere kadar geniş
                bir kitleye hitap eder ve sadece fiziksel gücü değil, aynı
                zamanda zihinsel dayanıklılığı ve ahlaki değerleri de
                geliştirir.
              </p>
            </div>
          </article>

          {/* Mas Oyama'nın Mirası */}
          <article className="bg-[#232d4b] p-8 rounded-2xl border border-white/5">
            <h2 className="text-3xl font-[Montserrat] font-bold mb-6 text-[#D92827]">
              Mas Oyama Kimdir?
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                <strong>Masutatsu Oyama</strong> (1923-1994), Kyokushin
                Karate'nin kurucusu ve efsanevi bir dövüş sanatları ustasıdır.
                Kore kökenli olan Oyama, genç yaşta Japonya'ya taşınmış ve
                çeşitli martial arts stillerinde ustalaşmıştır.
              </p>
              <p>
                Oyama'nın en ünlü efsanelerinden biri, dağlarda yıllarca yalnız
                antrenman yapması ve{" "}
                <strong>boğalarla çıplak elle dövüşmesidir</strong>. Bu
                efsaneler, onun olağanüstü gücünü ve kararlılığını simgeler.
              </p>
              <p>
                Mas Oyama'nın "100 kişilik kumite" (100-man kumite) deneyimi,
                Kyokushin tarihinin en zorlu testlerinden biridir. Bu test, bir
                karateci'nin art arda 100 rakiple dövüşmesini gerektirir ve
                sadece birkaç kişi bu testi tamamlamayı başarmıştır.
              </p>
              <p>
                Oyama'nın mirasası bugün dünya çapında milyonlarca Kyokushin
                pratisyeni tarafından yaşatılmaya devam ediyor.
              </p>
            </div>
          </article>

          {/* Kuşak Sistemi */}
          <article className="bg-[#232d4b] p-8 rounded-2xl border border-white/5">
            <h2 className="text-3xl font-[Montserrat] font-bold mb-6 text-[#D92827]">
              Shinkyokushin Kuşak Sistemi
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Kyokushin ve Shinkyokushin Karate'de kuşak (kemer) sistemi,
                öğrencinin gelişimini ve ustalık seviyesini gösterir. Sistem iki
                ana kategoriye ayrılır:
              </p>
              <div className="bg-[#1A2238] p-6 rounded-lg border border-white/5">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Renkli Kuşaklar (Kyu Dereceleri)
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>10. Kyu - Turuncu Kuşak</li>
                  <li>9. Kyu - Turuncu Kuşak (1 Siyah Çizgi)</li>
                  <li>8. Kyu - Mavi Kuşak</li>
                  <li>7. Kyu - Mavi Kuşak (1 Siyah Çizgi)</li>
                  <li>6. Kyu - Sarı Kuşak</li>
                  <li>5. Kyu - Sarı Kuşak (1 Siyah Çizgi)</li>
                  <li>4. Kyu - Yeşil Kuşak</li>
                  <li>3. Kyu - Yeşil Kuşak (1 Siyah Çizgi)</li>
                  <li>2. Kyu - Kahverengi Kuşak</li>
                  <li>1. Kyu - Kahverengi Kuşak (1 Altın Çizgi)</li>
                </ul>
              </div>
              <div className="bg-[#1A2238] p-6 rounded-lg border border-white/5 mt-4">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Siyah Kuşak (Dan Dereceleri)
                </h3>
                <p>
                  Siyah kuşak, Kyokushin'de ustalığın başlangıcını temsil eder.
                  1. Dan'dan 10. Dan'a kadar uzanan derece sistemi, sadece
                  teknik beceri değil, aynı zamanda öğreticilik, liderlik ve
                  topluma katkı gibi faktörleri de içerir.
                </p>
              </div>
            </div>
          </article>

          {/* Türkiye'de Kyokushin */}
          <article className="bg-[#232d4b] p-8 rounded-2xl border border-white/5">
            <h2 className="text-3xl font-[Montserrat] font-bold mb-6 text-[#D92827]">
              Kyokushin Türkiye ve Gelişimi
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                <strong>Kyokushin Türkiye</strong>, 1980'li yıllardan bu yana
                ülkemizde aktif olarak faaliyet göstermektedir. Türkiye'deki
                Kyokushin kulüpleri, uluslararası federasyonlarla bağlantılı
                olarak dünya çapında geçerliliği olan eğitimler ve müsabakalar
                düzenlemektedir.
              </p>
              <p>
                <strong>Shinkyokushin Türkiye</strong>, İstanbul, Ankara, İzmir
                ve diğer birçok şehirde dojolar işletmekte ve her yıl yüzlerce
                öğrenciye eğitim vermektedir. Türk sporcular, Avrupa ve Dünya
                şampiyonalarında ülkemizi başarıyla temsil etmektedir.
              </p>
              <p>
                <strong>Koçyiğit Dojo</strong> olarak, biz de Türkiye'de
                Kyokushin ve Shinkyokushin geleneğini yaşatmaya ve yeni
                nesillere aktarmaya devam ediyoruz. İstanbul Tuzla'daki
                dojomuzda, her yaştan öğrenciye profesyonel eğitim sunuyoruz.
              </p>
            </div>
          </article>

          {/* Antrenman Metodları */}
          <article className="bg-[#232d4b] p-8 rounded-2xl border border-white/5">
            <h2 className="text-3xl font-[Montserrat] font-bold mb-6 text-[#D92827]">
              Kyokushin Antrenman Metodları
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>Kyokushin antrenmanları üç ana bileşenden oluşur:</p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-[#1A2238] p-6 rounded-lg border border-white/5">
                  <h3 className="text-lg font-bold mb-3 text-[#D92827]">
                    Kihon
                  </h3>
                  <p className="text-sm">
                    Temel teknikler. Duruşlar, yumruklar, vuruşlar ve tekme
                    tekniklerinin tekrarı ile mükemmellik hedeflenir.
                  </p>
                </div>
                <div className="bg-[#1A2238] p-6 rounded-lg border border-white/5">
                  <h3 className="text-lg font-bold mb-3 text-[#D92827]">
                    Kata
                  </h3>
                  <p className="text-sm">
                    Önceden belirlenmiş hareket dizileri. Hayali rakiplerle
                    yapılan bu formlar, teknik ve zihinsel disiplini geliştirir.
                  </p>
                </div>
                <div className="bg-[#1A2238] p-6 rounded-lg border border-white/5">
                  <h3 className="text-lg font-bold mb-3 text-[#D92827]">
                    Kumite
                  </h3>
                  <p className="text-sm">
                    Tam temaslı dövüş. Gerçek rakiplerle yapılan bu antrenman,
                    cesaret, hız ve timing geliştirir.
                  </p>
                </div>
              </div>
              <p className="mt-6">
                Bunlara ek olarak, fiziksel kondisyon çalışmaları (ido geiko),
                şınav, mekik ve dayanıklılık testleri de Kyokushin
                antrenmanlarının vazgeçilmez parçalarıdır.
              </p>
            </div>
          </article>

          {/* Felsefe */}
          <article className="bg-[#232d4b] p-8 rounded-2xl border border-white/5">
            <h2 className="text-3xl font-[Montserrat] font-bold mb-6 text-[#D92827]">
              Kyokushin Felsefesi: Dojo Kun
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Kyokushin sadece fiziksel bir sanat değildir; aynı zamanda bir
                yaşam felsefesidir. Her antrenmanın başında ve sonunda okunan
                <strong> Dojo Kun</strong> (道場訓), bu felsefeyi özetler:
              </p>
              <div className="bg-[#1A2238] p-6 rounded-lg border border-[#D92827]/30 mt-6">
                <ol className="space-y-3 list-decimal list-inside font-medium">
                  <li>Karakterini geliştirmek için çaba göstereceğiz</li>
                  <li>Doğruluğun yolunu takip edeceğiz</li>
                  <li>Çaba ruhumuzu besleyeceğiz</li>
                  <li>Görgü kurallarına saygı göstereceğiz</li>
                  <li>Şiddetten uzak duracağız</li>
                </ol>
              </div>
              <p className="mt-6">
                Bu prensipler, sadece dojo içinde değil, günlük hayatın her
                alanında uygulanması gereken değerlerdir.
              </p>
            </div>
          </article>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#D92827] to-[#b91f1e] p-8 rounded-2xl text-center shadow-2xl">
            <h2 className="text-3xl font-[Montserrat] font-bold mb-4 text-white">
              Kyokushin Yolculuğunuza Başlayın
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Tuzla'daki dojomuzda profesyonel eğitmenler eşliğinde Kyokushin ve
              Shinkyokushin Karate eğitimi alın. Her yaş grubundan öğrenciler
              için uygun programlar.
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
}
