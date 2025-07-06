// Opening.tsx - Updated with dynamic guest name
"use client";
import React from "react";

interface OpeningProps {
  guestName?: string;
  groomName?: string;
  brideName?: string;
  eventDate?: string;
}

const Opening: React.FC<OpeningProps> = ({ guestName = "Teman Online", groomName = "Mutiara", brideName = "Daffa", eventDate = "2025-07-19" }) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}. ${month}. ${year}`;
  };

  return (
    <main className="relative w-full min-h-screen flex items-center justify-center ">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-amber-300/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-16 w-40 h-40 bg-gradient-to-br from-amber-300/20 to-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Main Content */}
      <section className="relative z-10 text-center px-4 sm:px-6 md:px-8 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        <header className="mb-8 sm:mb-12 md:mb-16">
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-niramit tracking-wide mb-4 sm:mb-6 opacity-90">The Wedding of</p>
          <h1 className="font-kaushian text-white text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 font-normal leading-tight drop-shadow-lg">
            {groomName} & {brideName}
          </h1>
          <time dateTime={eventDate} className="block mb-6 sm:mb-10 md:mb-12 text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl font-niramit tracking-widest opacity-90">
            {formatDate(eventDate)}
          </time>
        </header>

        {/* Guest Name Section */}
        <div className="mb-8 sm:mb-12 pt-6 sm:pt-8 md:pt-10">
          <p className="text-gray-400 text-lg sm:text-base md:text-lg lg:text-xl font-niramit mb-3 sm:mb-4 opacity-90">Dear</p>
          <div className="">
            <h2 className="text-white font-kaushian text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words leading-relaxed drop-shadow-md">{guestName}</h2>
          </div>
        </div>

        {/* Invitation Text */}
        <div className="mb-8 sm:mb-12">
          <p className="text-gray-400 text-sm sm:text-base md:text-lg font-niramit leading-relaxed opacity-90 max-w-md mx-auto">Dengan segala kerendahan hati, kami mengundang Anda untuk hadir dalam momen bahagia kami</p>
        </div>
      </section>

      {/* Wave transition to next section */}
      <div className="absolute inset-x-0 -bottom-2">
        <svg className="w-full h-auto" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#F7F0E5"
            fillOpacity="1"
            d="M0,288L80,240C160,192,320,96,480,90.7C640,85,800,171,960,213.3C1120,256,1280,256,1360,256L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </main>
  );
};

export default Opening;
