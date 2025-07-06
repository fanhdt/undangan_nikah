// page.tsx - Main App with URL parameter handling
"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { gsap } from "gsap";
import StartInvitational from "@/Assets/Section/StartInvitational";
import MusicPlayer, { MusicPlayerRef } from "@/Assets/Components/MusicPlayer";
import AutoScroll from "@/Assets/Components/AutoScroll";
import Opening from "@/Assets/Section/Opening";
import Bride from "@/Assets/Section/BrideName";
import MainSection from "@/Assets/Section/MainSection";
import StorySection from "@/Assets/Section/StorySection";
import CommentSection from "@/Assets/Section/CommentSection";
import GiftSection from "@/Assets/Section/GiftSection";
import PrayerSection from "@/Assets/Section/PrayerSection";
import Closing from "@/Assets/Section/Closing";

const Page: React.FC = () => {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [showAutoScroll, setShowAutoScroll] = useState(false);
  const [guestName, setGuestName] = useState("Teman Online");

  const musicPlayerRef = useRef<MusicPlayerRef>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  // Extract guest name from URL parameters
  useEffect(() => {
    const urlGuestName = searchParams.get("to") || searchParams.get("guest") || searchParams.get("name");
    if (urlGuestName) {
      // Decode URL and replace + or %20 with spaces
      const decodedName = decodeURIComponent(urlGuestName.replace(/\+/g, " "));
      setGuestName(decodedName);
    }
  }, [searchParams]);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);

    // Start music when invitation is opened
    setTimeout(() => {
      if (musicPlayerRef.current) {
        musicPlayerRef.current.autoPlay();
      }
    }, 500);

    // Show auto scroll with delay
    setTimeout(() => {
      setShowAutoScroll(true);
    }, 1500);

    // Animate main content entrance
    if (mainContentRef.current) {
      gsap.fromTo(
        mainContentRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.5,
        }
      );
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Start Invitational Overlay */}
      {!isInvitationOpen && <StartInvitational onOpenInvitation={handleOpenInvitation} groomName="Mutiara" brideName="Daffa" guestName={` ${guestName}`} eventDate="19-07-2025" eventLocation="di Tempat" />}

      {/* Main Content */}
      {isInvitationOpen && (
        <div ref={mainContentRef} className="w-full min-h-screen">
          {/* Auto Scroll Component */}
          {showAutoScroll && <AutoScroll />}

          {/* Music Player */}
          <MusicPlayer ref={musicPlayerRef} musicUrl="../audio/music-latar.mp3" />

          {/* Main Sections */}
          <Opening guestName={guestName} />
          <PrayerSection />
          <Bride />
          <MainSection />
          <StorySection />
          <CommentSection />
          <GiftSection />
          <Closing />
        </div>
      )}
    </div>
  );
};

export default Page;
