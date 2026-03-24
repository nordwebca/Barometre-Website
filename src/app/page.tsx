"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detect preferred language using browser APIs
    const preferredLang = navigator.language.toLowerCase().startsWith('en') ? 'en' : 'fr';
    
    // Perform robust next.js redirect handling trailing slashes/base paths
    router.replace(`/${preferredLang}`);
  }, [router]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#0d121f]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-highlight mb-4"></div>
      <p className="text-[#a0a8cc] animate-pulse">Redirection vers votre langue locale...</p>
    </div>
  );
}
