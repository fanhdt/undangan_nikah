/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const PrayerSection = () => {
  // Konstanta untuk bunga
  const flowerLeft = "/Image/Tulip_flower.png";
  const flowerRight = "/Image/Tulip_flower_Right.png";

  return (
    <div className="relative bg-cream pt-16 py-8  max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-lg font-niramitbold text-gray-800">QS.Ar Rum:21</h2>
      </div>

      {/* Ayat Al-Quran */}
      <div className="text-center mb-6 px-4">
        <p className="font-niramit text-sm leading-relaxed text-gray-700 italic">
          "Dan diantara tanda-tanda kekuasaan-Nya ialah ciptaan-Nya untukmu pasangan hidup dari jenismu sendiri, supaya kamu mendapatkan ketenangan hati dan dijadikan-Nya kasih sayang diantara kamu. Sesungguhnya yang demikian menjadi
          tanda-tanda kebesaran-Nya bagi orang-orang yang berfikir"
        </p>
      </div>

      {/* Doa */}
      <div className="text-center mb-6 px-4">
        <p className="font-niramit text-sm leading-relaxed text-gray-700">Atas kehadiran dan do&apos;a restu dari Bapak/Ibu/Saudara/i sekalian, kami mengucapkan terima kasih.</p>
      </div>

      {/* Salam Penutup */}
      <div className="text-center mb-8">
        <p className="font-niramit text-sm font-semibold text-gray-800">Wassalamua&apos;alaikum Warahmatullahi Wabarakatuh</p>
      </div>

      {/* Bunga Kiri Bawah */}

      {/* Bunga Kanan Bawah */}
      <div className="relative pt-32">
        <div className="absolute left-[-21px] -bottom-6">
          <Image src={flowerLeft} alt="Flower decoration right" width={250} height={120} className="opacity-100" />
        </div>

        <div className="absolute right-[-21px] -bottom-6">
          <Image src={flowerRight} alt="Flower decoration right" width={250} height={120} className="opacity-100" />
        </div>
      </div>

      {/* Border decorative */}
      <div className="absolute inset-2 border-2 border-amber-200 rounded-lg pointer-events-none"></div>
    </div>
  );
};

export default PrayerSection;
