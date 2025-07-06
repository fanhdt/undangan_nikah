/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const Closing = () => {
  // Konstanta untuk bunga
  const flowerLeft = "/Image/Tulip_flower.png";
  const flowerRight = "/Image/Tulip_flower_Right.png";

  return (
    <div className="relative w-full min-h-screen" style={{ backgroundColor: "#F7F0E5" }}>
      {/* Container untuk konten utama */}
      <div className="relative max-w-md mx-auto px-4 sm:max-w-lg sm:px-6 md:max-w-xl md:px-8 lg:max-w-2xl xl:max-w-4xl pt-16 pb-8">
        {/* Ornamen Dekoratif Atas */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-20 sm:w-32"></div>
            <div className="mx-4 w-3 h-3 bg-amber-400 rounded-full shadow-lg"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-20 sm:w-32"></div>
          </div>
        </div>

        {/* Pesan Penutup Utama */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-kaushian text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-700 mb-6 md:mb-8">Terima Kasih</h2>
          <p className="font-niramit text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 max-w-3xl mx-auto mb-6">
            Merupakan kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kami berdua.
          </p>
        </div>

        {/* Ornamen Tengah */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            <div className="w-8 h-px bg-amber-400"></div>
            <div className="w-4 h-4 bg-amber-400 rounded-full shadow-md"></div>
            <div className="w-8 h-px bg-amber-400"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          </div>
        </div>

        {/* Salam Penutup */}
        <div className="text-center mb-8 md:mb-12">
          <p className="font-niramit text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-4">Wassalamualaikum Warahmatullahi Wabarakatuh</p>
        </div>

        {/* Nama Pasangan */}
        <div className="text-center mb-12 md:mb-16">
          <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-amber-200 max-w-md mx-auto">
            <p className="font-niramit text-sm sm:text-base md:text-lg text-gray-600 mb-4">Turut berbahagia, segenap keluarga besar</p>
            <h3 className="font-kaushian text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-700 tracking-wide">Mutiara & Daffa</h3>
          </div>
        </div>

        {/* Ornamen Bawah */}
        <div className="text-center">
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-24 sm:w-40"></div>
            <div className="mx-4 flex space-x-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-24 sm:w-40"></div>
          </div>
        </div>
      </div>

      {/* Bunga Kiri dan Kanan Bawah */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Bunga Kiri Bawah */}
        <div className="absolute left-0 bottom-0" style={{ marginLeft: "0.5rem", marginBottom: "0.5rem" }}>
          <Image src={flowerLeft} alt="Flower decoration left" width={320} height={200} className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] h-auto opacity-80" />
        </div>

        {/* Bunga Kanan Bawah */}
        <div className="absolute right-0 bottom-0" style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}>
          <Image src={flowerRight} alt="Flower decoration right" width={320} height={200} className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] h-auto opacity-80" />
        </div>
      </div>

      {/* Bunga Atas untuk variasi */}
      <div className="absolute top-0 left-0 right-0">
        {/* Bunga Kiri Atas */}
        <div className="absolute left-0 top-0" style={{ marginLeft: "1rem", marginTop: "1rem" }}>
          <Image src={flowerLeft} alt="Flower decoration top left" width={160} height={100} className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] h-auto opacity-40 transform rotate-180" />
        </div>

        {/* Bunga Kanan Atas */}
        <div className="absolute right-0 top-0" style={{ marginRight: "1rem", marginTop: "1rem" }}>
          <Image src={flowerRight} alt="Flower decoration top right" width={160} height={100} className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] h-auto opacity-40 transform rotate-180" />
        </div>
      </div>

      {/* Border decorative */}
      <div className="absolute inset-2 sm:inset-6 md:inset-8 lg:inset-12 border-2 border-amber-300 rounded-lg pointer-events-none opacity-60"></div>

      {/* Border dalam */}
      <div className="absolute inset-4 sm:inset-8 md:inset-12 lg:inset-16 border border-amber-200 rounded-lg pointer-events-none opacity-40"></div>
    </div>
  );
};

export default Closing;
