"use client";

import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";

interface MusicPlayerProps {
  musicUrl?: string;
  className?: string;
}

export interface MusicPlayerRef {
  autoPlay: () => void;
  play: () => void;
  pause: () => void;
  toggle: () => void;
}

const MusicPlayer = forwardRef<MusicPlayerRef, MusicPlayerProps>(({ musicUrl = "../audio/music-latar.mp3", className = "" }, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    autoPlay: () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Error auto-playing audio:", error);
        });
      }
    },
    play: () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
    },
    pause: () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    },
    toggle: () => {
      toggleMusic();
    },
  }));

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100); // Mulai menggeser setelah scroll 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle play/pause
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Handle audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
    };
  }, []);

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} src={musicUrl} loop preload="metadata" />

      {/* Music Player Button */}
      <div
        className={`
          fixed bottom-3 right-3 z-50 transition-all duration-500 ease-out
          ${isScrolled && !isHovered ? "transform translate-x-6 sm:translate-x-9 opacity-40" : "transform translate-x-0 opacity-100"}
          ${className}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          // Pastikan tidak melebihi viewport
          maxWidth: "calc(100vw - 24px)",
          maxHeight: "calc(100vh - 24px)",
        }}
      >
        <button
          onClick={toggleMusic}
          className={`
            w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
            bg-gradient-to-br from-yellow-600 to-yellow-700
            rounded-full shadow-lg
            flex items-center justify-center
            hover:from-yellow-500 hover:to-yellow-600
            focus:from-yellow-500 focus:to-yellow-600
            focus:outline-none focus:ring-2 focus:ring-yellow-400/50
            active:scale-95
            transition-all duration-300 ease-out
            backdrop-blur-sm border border-yellow-500/20
            group
            relative
            overflow-hidden
          `}
          aria-label={isPlaying ? "Pause background music" : "Play background music"}
          type="button"
        >
          {/* Play Icon */}
          <svg
            className={`
              w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white
              transition-all duration-300 ease-out
              ${isPlaying ? "opacity-0 scale-0 rotate-90" : "opacity-100 scale-100 rotate-0"}
              absolute
            `}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>

          {/* Pause Icon */}
          <svg
            className={`
              w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white
              transition-all duration-300 ease-out
              ${isPlaying ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 -rotate-90"}
              absolute
            `}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>

          {/* Rotating Animation Ring */}
          <div
            className={`
              absolute inset-0 rounded-full border-2 border-transparent
              ${isPlaying ? "border-t-white/60 animate-spin" : ""}
              transition-all duration-300
            `}
          />
        </button>

        {/* Tooltip */}
        <div
          className={`
            absolute -bottom-10 sm:-bottom-12 right-0 
            bg-black/80 text-white text-xs px-2 py-1 rounded-md
            opacity-0 pointer-events-none
            transition-opacity duration-200
            whitespace-nowrap
            ${isHovered ? "opacity-100" : "opacity-0"}
            max-w-24 sm:max-w-none
          `}
        >
          <span className="block sm:hidden">{isPlaying ? "Pause" : "Play"}</span>
          <span className="hidden sm:block">{isPlaying ? "Pause Music" : "Play Music"}</span>
        </div>
      </div>
    </>
  );
});

MusicPlayer.displayName = "MusicPlayer";

export default MusicPlayer;
