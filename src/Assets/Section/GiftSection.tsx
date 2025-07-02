"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

const GiftSection = () => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const copyToClipboard = (text: string, accountType: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedAccount(accountType);
      setTimeout(() => setCopiedAccount(null), 2000);
    });
  };

  return (
    <section className="pt-16 pb-32 px-4 bg-[#1e1e1e] text-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-kaushian  text-center mb-12 text-white">Beri Hadiah</h2>

        <div className="space-y-6">
          {/* BCA Card */}
          <div className="bg-white rounded-lg px-4 py-8 text-black shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center">
                    <div className="text-blue-600 font-bold text-sm">BCA</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-niramitbold text-lg">Bank BCA</h3>
                  <p className="text-gray-800 font-niramit text-sm mt-1">No. Rekening: 1234567890</p>
                  <button onClick={() => copyToClipboard("1234567890", "bca")} className="mt-2 px-4 py-1 bg-amber-100 hover:bg-amber-200 rounded-lg shadow-md text-xs font-medium text-amber-800 transition-colors flex items-center space-x-1">
                    {copiedAccount === "bca" ? (
                      <>
                        <Check size={12} />
                        <span className="font-niramit">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span className="font-niramit">Copy Rekening</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* OVO Card */}
          <div className="bg-white rounded-lg px-4 py-8 text-black shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center">
                    <div className="text-purple-600 font-bold text-sm">OVO</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-niramitbold text-lg">OVO</h3>
                  <p className="text-gray-800 font-niramit text-sm mt-1">No. Rekening: 085712345678</p>
                  <button
                    onClick={() => copyToClipboard("085712345678", "ovo")}
                    className="mt-2 px-4 py-1 bg-amber-100 hover:bg-amber-200 rounded-lg shadow-md text-xs font-medium text-amber-800 transition-colors flex items-center space-x-1"
                  >
                    {copiedAccount === "ovo" ? (
                      <>
                        <Check size={12} />
                        <span className="font-niramit">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span className="font-niramit">Copy Rekening</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* QRIS Card */}
          <div className="bg-white rounded-lg px-4 py-8 text-black shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center">
                    {/* QR Code Placeholder */}
                    <div className="w-10 h-10 bg-gray-800 rounded-sm">
                      <svg viewBox="0 0 40 40" className="w-full h-full">
                        <rect x="0" y="0" width="6" height="6" fill="white" />
                        <rect x="8" y="0" width="6" height="6" fill="white" />
                        <rect x="16" y="0" width="6" height="6" fill="white" />
                        <rect x="24" y="0" width="6" height="6" fill="white" />
                        <rect x="32" y="0" width="6" height="6" fill="white" />
                        <rect x="0" y="8" width="6" height="6" fill="white" />
                        <rect x="16" y="8" width="6" height="6" fill="white" />
                        <rect x="32" y="8" width="6" height="6" fill="white" />
                        <rect x="8" y="16" width="6" height="6" fill="white" />
                        <rect x="24" y="16" width="6" height="6" fill="white" />
                        <rect x="0" y="24" width="6" height="6" fill="white" />
                        <rect x="16" y="24" width="6" height="6" fill="white" />
                        <rect x="32" y="24" width="6" height="6" fill="white" />
                        <rect x="8" y="32" width="6" height="6" fill="white" />
                        <rect x="24" y="32" width="6" height="6" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-niramitbold text-lg">QRIS</h3>
                  <p className="text-gray-800 font-niramit text-sm mt-1">Nama : Asan Sigma</p>
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
