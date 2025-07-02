"use client";
import React from "react";
import Image from "next/image";

const BrideName = () => {
  const bride = "/Image/Mutiara.png";
  const groom = "/Image/Daffa.png";

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <section className="max-w-md w-full bg-white p-8 flex flex-col items-center space-y-10">
          {/* Top Section: Mutiara */}
          <div className="flex flex-col items-center text-center">
            <div className="w-60 h-60 rounded-xl overflow-hidden shadow-md mb-6 relative">
              <Image src={bride} className="object-cover w-full h-full" width={100} height={100} alt="Portrait of a young woman named Mutiara with soft natural lighting and modern style" />
            </div>
            <h2 className="text-3xl font-kaushian text-gray-900 mb-4">Mutiara</h2>
            <p className="text-xl font-kaushian text-gray-700 mb-4">Mutiara Az Zahra</p>
            <p className="text-md text-gray-600 font-niramit">
              Putra pertama dari pasangan <br /> Bapak & Ibu
            </p>
          </div>

          {/* Bottom Section: Daffa */}
          <div className="flex flex-col items-center text-center mt-10">
            <div className="mt-10 w-60 h-60 rounded-xl overflow-hidden shadow-md mb-6 relative">
              <Image src={groom} className="object-cover w-full h-full" width={100} height={100} alt="Portrait of a young man named Daffa with soft natural lighting and modern style" />
            </div>
            <h2 className="text-3xl font-kaushian text-gray-900 mb-4">Daffa</h2>
            <p className="text-xl font-kaushian text-gray-700 mb-4">Muhammad Tsahat Daffa Ash-Shiddiq</p>
            <p className="text-md text-gray-600 font-niramit">
              Putra pertama dari pasangan <br /> Bapak & Rika
            </p>
          </div>
        </section>
      </div>

      {/* SVG Wave at Bottom */}
      <div className="relative pt-5 md:pt-40">
        <div className="absolute -bottom-1 right-0 overflow-hidden block w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="#F7F0E5"
              fillOpacity="1"
              d="M0,320L40,309.3C80,299,160,277,240,234.7C320,192,400,128,480,128C560,128,640,192,720,229.3C800,267,880,277,960,282.7C1040,288,1120,288,1200,256C1280,224,1360,160,1400,128L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BrideName;
