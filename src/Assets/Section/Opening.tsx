"use client";
import React from "react";
import MusicPlayer from "../Components/MusicPlayer";

const Opening = ({ guestName = "Ambatukam" }) => {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center border-none">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

      {/* Main Content */}
      <section className="relative z-10 text-center px-6 max-w-md">
        <header className="mb-12">
          <p className="text-gray-300 text-base md:text-lg font-niramit tracking-wide mb-4">The Wedding of</p>
          <h1 className="font-kaushian text-white text-5xl md:text-4xl mb-6 font-normal leading-tight">Daffa & Mutiara</h1>
          <time dateTime="2025-07-19" className="mb-10 text-gray-300 text-lg md:text-xl font-niramit tracking-widest">
            19. 07. 2025
          </time>
        </header>

        {/* Guest Name Section */}
        <div className="mb-4 pt-10">
          <p className="text-gray-400 text-base md:text-lg font-niramit mb-3">Dear</p>
          <h2 className="text-white font-kaushian text-2xl md:text-3xl">{guestName}</h2>
        </div>
      </section>

      {/* Music Control Button */}
      <div className="absolute bottom-4 right-4 z-20">
        <MusicPlayer musicUrl="/audio/music-latar.mp3" />
      </div>

      {/* Wave Separator */}
      <div className="absolute -bottom-2 inset-x-0">
        <svg className="w-full h-auto" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="white"
            fillOpacity="1"
            d="M0,288L80,240C160,192,320,96,480,90.7C640,85,800,171,960,213.3C1120,256,1280,256,1360,256L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </main>
  );
};

export default Opening;
