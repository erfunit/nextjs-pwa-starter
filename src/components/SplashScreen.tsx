"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed flex-col gap-4 inset-0 flex h-screen bg-cyan-800 z-[500] items-center justify-center bg-primary">
      <Image src="/icons/512.png" width={100} height={100} alt="icon" />
      <div className="text-2xl font-bold text-white">Your App Name</div>
    </div>
  );
}
