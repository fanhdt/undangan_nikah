"use client";
import React from "react";
import Image from "next/image";

const BrideName = () => {
  const bride = "/Image/Mutiara.png";
  const groom = "/Image/Daffa.png";

  return (
    <div className="min-h-screen flex flex-col bg-white relative w-full pb-6">
      {/* Top wave separator to connect with Opening */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden" style={{ marginTop: "-1px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto block" preserveAspectRatio="none" style={{ minHeight: "100px" }}>
          <path
            fill="white"
            fillOpacity="1"
            d="M0,320L48,288C96,256,192,192,288,181.3C384,171,480,213,576,213.3C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-8 w-24 h-24 bg-gradient-to-br from-amber-200/30 to-amber-300/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-32 right-8 w-32 h-32 bg-gradient-to-br from-amber-300/30 to-amber-400/20 rounded-full blur-2xl animate-pulse delay-1000 " />

      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 relative z-10">
        <section className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl shadow-xl border border-amber-100 flex flex-col items-center space-y-12 sm:space-y-16 md:space-y-20 ">
          {/* Bride Section */}
          <div className="flex flex-col items-center text-center w-full">
            <div className="relative group mb-6 sm:mb-8">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-200/50 group-hover:border-amber-300/70 transition-all duration-500 transform group-hover:scale-105">
                <Image
                  src={bride}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  width={320}
                  height={320}
                  alt="Portrait of a young woman named Mutiara with soft natural lighting and modern style"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-amber-200 rounded-full shadow-lg animate-bounce delay-500" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-kaushian text-gray-900 mb-3 sm:mb-4 md:mb-5 drop-shadow-sm">Mutiara</h2>
            <p className="text-xl  md:text-3xl lg:text-4xl font-kaushian text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed">Mutiara Az Zahra</p>
            <div className="bg-amber-50 rounded-2xl p-4 sm:p-5 md:p-6 border border-amber-200 shadow-sm">
              <p className="text-xs md:text-lg lg:text-xl text-gray-700 font-niramit text-center leading-relaxed">
                Putri pertama dari pasangan
                <br className="sm:hidden" />
                <span className="sm:inline"> </span>
                <span className="font-semibold text-gray-800">Bpk. Endi Rohendi & Ibu. Neng Anita(Almh)</span>
              </p>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center w-full">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
            <div className="mx-4 w-3 h-3 bg-amber-300 rounded-full shadow-sm" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
          </div>

          {/* Groom Section */}
          <div className="flex flex-col items-center text-center w-full">
            <div className="relative group mb-6 sm:mb-8">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-200/50 group-hover:border-amber-300/70 transition-all duration-500 transform group-hover:scale-105">
                <Image
                  src={groom}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  width={320}
                  height={320}
                  alt="Portrait of a young man named Daffa with soft natural lighting and modern style"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-amber-200 rounded-full shadow-lg animate-bounce delay-1000" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-kaushian text-gray-900 mb-3 sm:mb-4 md:mb-5 drop-shadow-sm">Daffa</h2>
            <p className="text-xl md:text-3xl lg:text-4xl font-kaushian text-gray-700 mb-4 sm:mb-5 md:mb-6 text-center leading-relaxed">Muhammad Tsabat Daffa Ash-Shiddiq</p>
            <div className="bg-amber-50 rounded-2xl p-4 sm:p-5 md:p-6 border border-amber-200 shadow-sm">
              <p className="text-xs md:text-lg lg:text-xl text-gray-700 font-niramit text-center leading-relaxed">
                Putra pertama dari pasangan
                <br className="sm:hidden" />
                <span className="sm:inline"> </span>
                <span className="font-semibold text-gray-800">Bpk. Agus A Roby & Ibu. Rika Rostikawati</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrideName;
