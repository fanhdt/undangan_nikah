"use client";
import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const MainSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-07-19T08:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAddressClick = () => {
    window.open("https://maps.app.goo.gl/gV2bHx1NgxebaDqP8", "_blank");
  };

  return (
    <section className="bg-cream">
      <div className="min-h-screen  p-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8 pt-8">
            <p className="text-gray-600 mb-10 font-niramit text-xl">Acara akan diselenggarakan</p>

            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 mb-8 space-x-8">
              <div className="text-center ">
                <div className="text-2xl font-kaushian text-gray-800 mb-1">{timeLeft.days.toString().padStart(2, "0")}</div>
                <div className="mt-3 text-sm font-niramit text-gray-600">Hari</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-kaushian text-gray-800 mb-1">{timeLeft.hours.toString().padStart(2, "0")}</div>
                <div className="mt-3 text-sm font-niramit text-gray-600">Jam</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-kaushian text-gray-800 mb-1">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                <div className="mt-3 text-sm font-niramit text-gray-600">Menit</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-kaushian text-gray-800 mb-1">{timeLeft.seconds.toString().padStart(2, "0")}</div>
                <div className="mt-3 text-sm font-niramit text-gray-600">Detik</div>
              </div>
            </div>
          </div>

          {/* Akad Nikah Card */}
          <div className="bg-white rounded-lg shadow-lg px-6 py-8 mb-6">
            <h2 className="text-4xl font-bold font-kaushian text-center mb-4 text-gray-800">Akad Nikah</h2>

            <div className="space-y-3 text-center">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700 font-niramitbold">Sabtu, 19 Juli 2025</span>
              </div>
              <div className="text-gray-700 font-niramitmedium">09:00 - 10.30</div>

              <div className="flex items-start justify-center gap-2 mt-4">
                <div className="w-4 h-4 text-gray-600 mt-1 flex" />
                <div className="text-center">
                  <div className="font-niramitsemibold text-gray-800">Kediaman Mempelai Wanita</div>
                  <div className="text-sm text-gray-600 font-niramit leading-relaxed">
                    Kp. Pasar Kemis Blok. Sukaninggal RT. 01/14 Manggahang, Kec. Baleendah
                    <br />
                    Kab. Bandung, Jawa Barat 40375
                  </div>
                </div>
              </div>

              <button onClick={handleAddressClick} className="group mt-4 px-6 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 mx-auto outline outline-black outline-1 hover:bg-gray-800 hover:scale-105 hover:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="transition-colors duration-300 text-black group-hover:text-white">
                  <path
                    fill="currentColor"
                    d="M14.485 19.737L9 17.823l-3.902 1.509q-.21.084-.401.053q-.192-.03-.354-.132t-.252-.274T4 18.583V6.41q0-.282.13-.499t.378-.303l3.957-1.344q.124-.05.257-.075q.134-.025.278-.025t.277.025t.257.075L15 6.177l3.902-1.508q.21-.084.401-.054t.354.132q.161.102.252.274t.091.396v12.259q0 .284-.159.495q-.158.212-.426.298l-3.9 1.287q-.13.05-.256.065q-.125.015-.26.015q-.136 0-.26-.024t-.255-.075m.016-1.033v-11.7l-5-1.746v11.7z"
                  />
                </svg>
                <span className="transition-colors duration-300 group-hover:text-white text-black">Lihat alamat</span>
              </button>
            </div>
          </div>

          {/* Resepsi Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-4xl font-kaushian font-bold text-center mb-4 text-gray-800">Walimatul &apos;Ursy</h2>

            <div className="space-y-3 text-center">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-gray-600" />
                <span className=" text-gray-700 font-niramitbold">Sabtu, 19 Juli 2025</span>
              </div>
              <div className=" text-gray-700 font-niramitmedium">10.30 - Selesai</div>

              <div className="flex items-start justify-center gap-2 mt-4">
                <div className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div className="text-center">
                  <div className="font-semibold font-niramit text-gray-800">Kediaman Mempelai Wanita</div>
                  <div className="text-sm font-niramit text-gray-600 leading-relaxed">
                    Kp. Pasar Kemis Blok. Sukaninggal RT. 01/14 Manggahang, Kec. Baleendah
                    <br />
                    Kab. Bandung, Jawa Barat 40375
                  </div>
                </div>
              </div>

              <button onClick={handleAddressClick} className="group mt-4 px-6 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 mx-auto outline outline-black outline-1 hover:bg-gray-800 hover:scale-105 hover:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="transition-colors duration-300 text-black group-hover:text-white">
                  <path
                    fill="currentColor"
                    d="M14.485 19.737L9 17.823l-3.902 1.509q-.21.084-.401.053q-.192-.03-.354-.132t-.252-.274T4 18.583V6.41q0-.282.13-.499t.378-.303l3.957-1.344q.124-.05.257-.075q.134-.025.278-.025t.277.025t.257.075L15 6.177l3.902-1.508q.21-.084.401-.054t.354.132q.161.102.252.274t.091.396v12.259q0 .284-.159.495q-.158.212-.426.298l-3.9 1.287q-.13.05-.256.065q-.125.015-.26.015q-.136 0-.26-.024t-.255-.075m.016-1.033v-11.7l-5-1.746v11.7z"
                  />
                </svg>
                <span className="transition-colors duration-300 group-hover:text-white text-black">Lihat alamat</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative pt-24">
        <div className="absolute inset-x-0 -bottom-2">
          <svg className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#1E1E1E"
              fillOpacity="1"
              d="M0,288L80,240C160,192,320,96,480,90.7C640,85,800,171,960,213.3C1120,256,1280,256,1360,256L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
