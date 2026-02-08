"use client";

import React from "react";
import { MoveRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-32 px-8 flex justify-center">
      <div className="bg-black w-full max-w-7xl rounded-[60px] p-12 md:p-32 text-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400 opacity-20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 opacity-20 blur-[120px]" />
        
        <h2 className="text-4xl md:text-7xl font-normal text-white mb-12 relative z-10 leading-tight">
          Ready to automate <br /> 
          your <span className="font-serif italic text-lime-300">entire</span> workflow?
        </h2>
        
        <div className="flex flex-col items-center gap-6 relative z-10">
          <button className="bg-lime-300 hover:bg-lime-400 text-black px-12 py-6 rounded-full text-2xl font-bold transition-all transform hover:scale-105 active:scale-95 flex items-center gap-4 group">
            Get Access Now
            <MoveRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </button>
          <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">
            Limited availability for beta waitlist
          </p>
        </div>
      </div>
    </section>
  );
};
