/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const PrayerSection = () => {
  // Konstanta untuk bunga
  const flowerLeft = "/Image/Tulip_flower.png";
  const flowerRight = "/Image/Tulip_flower_Right.png";

  return (
    <div className="relative bg-cream pt-16 py-8 w-full min-h-screen">
      {/* Container untuk konten utama */}
      <div className="relative max-w-md mx-auto px-4 sm:max-w-lg sm:px-6 md:max-w-xl md:px-8 lg:max-w-2xl xl:max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-niramitbold text-gray-800">QS.Ar Rum:21</h2>
        </div>

        {/* Ayat Al-Quran */}
        <div className="text-center mb-8 md:mb-12">
          <p className="font-niramit text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 italic max-w-4xl mx-auto">
            "Dan diantara tanda-tanda kekuasaan-Nya ialah ciptaan-Nya untukmu pasangan hidup dari jenismu sendiri, supaya kamu mendapatkan ketenangan hati dan dijadikan-Nya kasih sayang diantara kamu. Sesungguhnya yang demikian menjadi
            tanda-tanda kebesaran-Nya bagi orang-orang yang berfikir"
          </p>
        </div>

        {/* Doa */}
        <div className="text-center mb-8 md:mb-12">
          <p className="font-niramit text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 max-w-3xl mx-auto">Atas kehadiran dan do&apos;a restu dari Bapak/Ibu/Saudara/i sekalian, kami mengucapkan terima kasih.</p>
        </div>

        {/* Salam Penutup */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-niramit text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">Wassalamua'alaikum Warahmatullahi Wabarakatuh</p>
        </div>
      </div>

      {/* Bunga Kiri dan Kanan Bawah */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Bunga Kiri Bawah */}
        <div className="absolute left-0 bottom-0" style={{ marginLeft: "0.5rem", marginBottom: "0.5rem" }}>
          <Image src={flowerLeft} alt="Flower decoration left" width={320} height={200} className="w-[240px] sm:w-[280px] md:w-3220px] lg:w-3260px] xl:w-4300px] h-auto opacity-90" />
        </div>

        {/* Bunga Kanan Bawah */}
        <div className="absolute right-0 bottom-0" style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}>
          <Image src={flowerRight} alt="Flower decoration right" width={320} height={200} className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] h-auto opacity-90" />
        </div>
      </div>

      {/* Border decorative */}
      <div className="absolute inset-2 sm:inset-6 md:inset-8 lg:inset-12 border-2 border-amber-200 rounded-lg pointer-events-none"></div>
    </div>
  );
};

export default PrayerSection;
