"use client";
import React from "react";
import { HomePage } from "@/components/sections/HomePage";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto w-full">
      <div className="w-full relative z-10">
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}
