/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const storyData = [
    {
      year: "2019",
      title: "Awal Bertemu",
      description: "Pertemuan pertama kami pada saat MPLS SMA. Tak sengaja berpapasan di depan pintu aula (ruang orientasi), dan siapa sangka kami menjadi siswa di ruang kelas yang sama.",
    },
    {
      year: "2022",
      title: "Saling Mengenal",
      description: "Kami mulai dekat dan berkomunikasi satu sama lain setelah lulus sekolah. Waktu ke waktu, kami habiskan untuk saling bercerita, berbagi suka dan duka.",
    },
    {
      year: "2024",
      title: "Lamaran",
      description: "Di siang yang cerah, kami mengadakan pertemuan keluarga. Berkenalan dengan kedua pihak keluarga, membahas keberlanjutan hubungan ini dan memantapkan hati untuk melanjutkan ke jenjang yang lebih serius.",
    },
    {
      year: "2025",
      title: "Pernikahan",
      description: "Sampailah pada waktu yang ditunggu tunggu, kami mengikat janji suci untuk menjadi pasangan sehidup sesurga",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const progressBar = progressBarRef.current;
    const cards = cardsRef.current;

    if (!section || !progressBar || cards.length === 0) return;

    // Set initial states
    gsap.set(cards, { opacity: 0, x: -50 });
    gsap.set(progressBar, { scaleY: 0, transformOrigin: "top center" });

    // Get the last card element to use as end trigger
    const lastCard = cards[cards.length - 1];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const progressTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: () => `${lastCard.offsetTop + lastCard.offsetHeight} center`,
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(progressBar, {
            scaleY: self.progress,
            duration: 0.1,
            ease: "none",
          });
        },
      },
    });

    // Animate cards individually
    cards.forEach((card, index) => {
      if (card) {
        gsap.to(card, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  return (
    <section className="w-full bg-[#1E1E1E]">
      <div ref={sectionRef} className="relative text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 min-h-screen">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-niramitmedium mb-4">Sebuah Kisah</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-kaushian text-white mb-4 sm:mb-6">Perjalanan Kami</h3>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-xs sm:max-w-md mx-auto px-2">Dari pertemuan pertama hingga janji suci, setiap momen adalah bagian dari cerita cinta yang indah</p>
        </div>

        {/* Main Content */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Progress Bar - Responsive positioning */}
          <div className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-0 bottom-0 w-0.5 sm:w-1">
            <div className="relative h-full">
              {/* Background line */}
              <div className="absolute inset-0 w-full bg-gray-700 rounded-full"></div>
              {/* Progress line */}
              <div ref={progressBarRef} className="absolute inset-0 w-full bg-white rounded-full"></div>
              {/* Dots for each story point */}
              {storyData.map((_, index) => (
                <div key={index} className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full -left-[2.5px] sm:-left-1" style={{ top: `${(index / (storyData.length - 1)) * 100}%` }}></div>
              ))}
            </div>
          </div>

          {/* Story Cards */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 pr-6 sm:pr-8 md:pr-12 lg:pr-16 xl:pr-20">
            {storyData.map((story, index) => (
              <div key={index} ref={(el) => addToRefs(el, index)} className="bg-white font-niramit text-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
                <div className="mb-3 sm:mb-4">
                  <span className="text-base sm:text-lg md:text-xl font-bold text-gray-600">{story.year}</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">{story.title}</h3>
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="relative pt-24 w-full">
        <div className="absolute inset-x-0 -bottom-2">
          <svg className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#F7F0E5"
              fillOpacity="1"
              d="M0,288L80,240C160,192,320,96,480,90.7C640,85,800,171,960,213.3C1120,256,1280,256,1360,256L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
