"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import Image from "next/image";

const GiftSection = () => {
  const gopayIMG = "/Image/gopay7196.jpg";
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const copyToClipboard = (text: string, accountType: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedAccount(accountType);
      setTimeout(() => setCopiedAccount(null), 2000);
    });
  };

  return (
    <section className="pt-12 sm:pt-16 md:pt-20 pb-24 sm:pb-32 md:pb-40 bg-[#1e1e1e] text-white w-full">
      <div className="w-full max-w-md mx-auto px-4 sm:max-w-lg sm:px-6 md:max-w-xl md:px-8 lg:max-w-2xl xl:max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-kaushian text-center mb-8 sm:mb-12 md:mb-16 text-white">Beri Hadiah</h2>

        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {/* Gopay Card - Mutiara */}
          <div className="bg-white rounded-lg px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 text-black shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4 sm:space-x-6 w-full">
                <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-14 sm:w-18 md:w-22 h-14 sm:h-18 md:h-22 bg-white rounded-md flex items-center justify-center overflow-hidden">
                    <Image
                      src={gopayIMG}
                      width={60}
                      height={60}
                      alt="GoPay"
                      className="object-contain"
                      onError={(e) => {
                        console.error("Image failed to load:", gopayIMG);
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-niramitbold text-base sm:text-lg md:text-xl lg:text-2xl">Mutiara</h3>
                  <p className="text-gray-800 font-niramit text-sm sm:text-base md:text-lg mt-1 sm:mt-2 break-all">No. E-Wallet: 0895339863338</p>
                  <button
                    onClick={() => copyToClipboard("0895339863338", "Mutiara")}
                    className="mt-2 sm:mt-3 md:mt-4 px-3 sm:px-4 md:px-6 py-1 sm:py-2 bg-amber-100 hover:bg-amber-200 rounded-lg shadow-md text-xs sm:text-sm md:text-base font-medium text-amber-800 transition-colors flex items-center space-x-1 sm:space-x-2"
                  >
                    {copiedAccount === "Mutiara" ? (
                      <>
                        <Check size={12} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                        <span className="font-niramit">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                        <span className="font-niramit">Copy Rekening</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Gopay Card - Daffa */}
          <div className="bg-white rounded-lg px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 text-black shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4 sm:space-x-6 w-full">
                <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-14 sm:w-18 md:w-22 h-14 sm:h-18 md:h-22 bg-white rounded-md flex items-center justify-center overflow-hidden">
                    <Image
                      src={gopayIMG}
                      width={60}
                      height={60}
                      alt="GoPay"
                      className="object-contain"
                      onError={(e) => {
                        console.error("Image failed to load:", gopayIMG);
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-niramitbold text-base sm:text-lg md:text-xl lg:text-2xl">Daffa</h3>
                  <p className="text-gray-800 font-niramit text-sm sm:text-base md:text-lg mt-1 sm:mt-2 break-all">No. E-Wallet: 082116990548</p>
                  <button
                    onClick={() => copyToClipboard("082116990548", "Daffa")}
                    className="mt-2 sm:mt-3 md:mt-4 px-3 sm:px-4 md:px-6 py-1 sm:py-2 bg-amber-100 hover:bg-amber-200 rounded-lg shadow-md text-xs sm:text-sm md:text-base font-medium text-amber-800 transition-colors flex items-center space-x-1 sm:space-x-2"
                  >
                    {copiedAccount === "Daffa" ? (
                      <>
                        <Check size={12} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                        <span className="font-niramit">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                        <span className="font-niramit">Copy Rekening</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
