// StartInvitational.tsx - Updated with full viewport photo
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface StartInvitationalProps {
  onOpenInvitation: () => void;
  groomName?: string;
  brideName?: string;
  guestName?: string;
  eventDate?: string;
  eventLocation?: string;
  coupleImage?: string;
}

const StartInvitational: React.FC<StartInvitationalProps> = ({
  onOpenInvitation,
  groomName = "Mutiara",
  brideName = "Daffa",
  guestName = "Yth. Bpk/Ibu/Saudara/i",
  eventDate = "Teman Online",
  eventLocation = "di Tempat",
  coupleImage = "/Image/MutDaffa.png",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const coupleNamesRef = useRef<HTMLDivElement>(null);
  const guestInfoRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Initial animation when component mounts
    const tl = gsap.timeline();

    // Set initial states
    gsap.set([titleRef.current, coupleNamesRef.current, guestInfoRef.current, buttonRef.current], {
      opacity: 0,
      y: 50,
    });

    gsap.set(overlayRef.current, {
      opacity: 0,
    });

    // Animate elements in sequence
    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .to(
        coupleNamesRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .to(
        guestInfoRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );
  }, []);

  const handleOpenInvitation = () => {
    // Button click animation
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    // Create exit animation
    const tl = gsap.timeline({
      onComplete: () => {
        onOpenInvitation();
      },
    });

    // Animate elements out
    tl.to([buttonRef.current, guestInfoRef.current, coupleNamesRef.current, titleRef.current], {
      opacity: 0,
      y: -30,
      duration: 0.5,
      ease: "power2.in",
      stagger: 0.1,
    }).to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      },
      "-=0.2"
    );
  };

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 overflow-hidden">
      {/* Full Viewport Background Image */}
      <div className="absolute inset-0 w-full h-full">
        {/* Placeholder for couple image - replace with actual image */}
        <div className="w-full h-full bg-gradient-to-br from-rose-300 via-pink-200 to-orange-200 flex items-center justify-center">
          <span className="text-gray-600 text-lg font-medium">Foto Pasangan Full Screen</span>
        </div>

        {/* Uncomment and use this when you have the actual image */}
        <Image src={coupleImage} alt={`${groomName} & ${brideName}`} fill className="object-cover object-center" priority quality={100} />
      </div>

      {/* Dark Overlay for Text Readability */}
      <div ref={overlayRef} className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      {/* Content Container */}
      <div ref={contentRef} className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div ref={titleRef} className="mb-6 sm:mb-8">
          <h1 className="text-lg sm:text-xl md:text-2xl font-light text-white tracking-widest mb-2 drop-shadow-lg">UNDANGAN PERNIKAHAN</h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent mx-auto"></div>
        </div>

        {/* Couple Names */}
        <div ref={coupleNamesRef} className="mb-12 sm:mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-kaushian text-white mb-3 drop-shadow-2xl">{groomName}</h2>
          <div className="flex items-center justify-center mb-3">
            <div className="w-12 h-px bg-white/70"></div>
            <span className="mx-6 text-3xl sm:text-4xl text-white font-light drop-shadow-lg">&</span>
            <div className="w-12 h-px bg-white/70"></div>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-kaushian text-white drop-shadow-2xl">{brideName}</h2>
        </div>

        {/* Guest Information */}
        <div ref={guestInfoRef} className="mb-12 sm:mb-16">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/30 shadow-2xl">
            <p className="text-white text-base font-niramit sm:text-lg mb-2 drop-shadow-md">{guestName}</p>
            <p className="text-white/90 font-niramitmedium text-lg sm:text-xl drop-shadow-md">{eventDate}</p>
            <p className="text-white/90 font-niramit text-base sm:text-lg drop-shadow-md">{eventLocation}</p>
          </div>
        </div>

        {/* Open Invitation Button */}
        <button
          ref={buttonRef}
          onClick={handleOpenInvitation}
          className="group relative overflow-hidden px-10 py-5 bg-[#F7F0E5] text-black font-niramitmedium text-lg sm:text-xl rounded-full shadow-2xl hover:bg-[#e7dccc] transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#F7F0E5] focus:ring-opacity-50 border-2 border-white/20"
        >
          <span className="relative z-10 flex items-center justify-center">
            <svg className="w-6 h-6 mr-3 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M12 12v7" />
            </svg>
            BUKA UNDANGAN
          </span>

          {/* Button Animation Effect */}
          <div className="absolute inset-0 bg-[#e7dccc] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/20 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white/25 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white/30 rounded-full opacity-30 animate-bounce"></div>
      </div>
    </div>
  );
};

export default StartInvitational;
