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
      description:
        "Pertemuan pertama kami terjadi di sebuah kafe kecil di pusat kota. Mata kami bertemu sesaat, dan ada sesuatu yang berbeda dari pertemuan biasa. Percakapan mengalir begitu natural, seolah kami sudah saling mengenal sejak lama.",
    },
    {
      year: "2020",
      title: "Hubungan Dimulai",
      description: "Setelah berbulan-bulan saling mengenal lebih dalam, kami memutuskan untuk memulai hubungan yang serius. Meski pandemi menghalangi, cinta kami justru semakin kuat melalui video call dan pesan-pesan manis setiap hari.",
    },
    {
      year: "2021",
      title: "Lamaran",
      description: "Di bawah langit berbintang pada malam yang sempurna, dia berlutut dan mengucapkan kata-kata yang telah lama kutunggu. Air mata kebahagiaan mengalir ketika aku mengatakan 'ya' untuk memulai babak baru kehidupan bersama.",
    },
    {
      year: "2025",
      title: "Pernikahan",
      description: "Hari yang paling bahagia dalam hidup kami. Dikelilingi keluarga dan teman-teman tercinta, kami mengucapkan janji suci untuk saling mencintai, menghormati, dan mendukung dalam suka maupun duka hingga akhir hayat.",
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

    // Create timeline for progress bar - end when last card is fully visible
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
    <section className="w-full  bg-[#1E1E1E]">
      <div ref={sectionRef} className="relative text-white py-16 px-4 md:py-24 min-h-screen">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-niramitmedium mb-4">Sebuah Kisah</h2>
          <h3 className="text-3xl md:text-5xl font-kaushian text-white mb-6">Perjalanan Kami</h3>
          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto">Dari pertemuan pertama hingga janji suci, setiap momen adalah bagian dari cerita cinta yang indah</p>
        </div>

        {/* Main Content */}
        <div className="relative max-w-6xl mx-auto">
          {/* Progress Bar - Always on the right */}
          <div className="absolute right-4 md:right-8 top-0 bottom-0 w-1">
            <div className="relative h-full">
              {/* Background line */}
              <div className="absolute inset-0 w-full bg-gray-700 rounded-full"></div>
              {/* Progress line */}
              <div ref={progressBarRef} className="absolute inset-0 w-full bg-white rounded-full"></div>
              {/* Dots for each story point */}
              {storyData.map((_, index) => (
                <div key={index} className="absolute w-3 h-3 bg-white rounded-full -left-1" style={{ top: `${(index / (storyData.length - 1)) * 100}%` }}></div>
              ))}
            </div>
          </div>

          {/* Story Cards */}
          <div className="space-y-16 md:space-y-24 pr-12 md:pr-20">
            {storyData.map((story, index) => (
              <div key={index} ref={(el) => addToRefs(el, index)} className="bg-white font-niramit text-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl max-w-lg md:max-w-2xl">
                <div className="mb-4">
                  <span className="text-lg md:text-xl font-bold text-gray-600">{story.year}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">{story.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
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
