// page.tsx - Main App with URL parameter handling
import React, { Suspense } from "react";
import WrapperPage from "@/Assets/Section/WrapperPage";

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading invitation...</p>
    </div>
  </div>
);

const Page: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <WrapperPage />
    </Suspense>
  );
};

export default Page;
