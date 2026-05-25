"use client";
import React from "react";
import { ModernFeed } from "@/components/ModernFeed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto w-full">
      <div className="w-full relative z-10">
        <ModernFeed />
      </div>
      <Footer />
    </div>
  );
}
