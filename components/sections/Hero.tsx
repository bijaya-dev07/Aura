"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MoveRight } from "lucide-react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2,
      });
      gsap.from(subheadlineRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.4,
      });
      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.6,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-48 pb-32 px-8 flex flex-col items-center text-center overflow-hidden">
      {/* Decorative Orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-orange-200/50 via-pink-100/30 to-transparent blur-[120px] -z-10 animate-pulse" />
      
      <div className="max-w-4xl mx-auto">
        <h1 ref={headlineRef} className="text-6xl md:text-8xl font-normal tracking-tight mb-8">
          AI automation <br /> 
          for <span className="font-serif italic">everyone.</span>
        </h1>
        
        <p ref={subheadlineRef} className="text-xl md:text-2xl text-black/60 mb-12 max-w-2xl mx-auto font-medium">
          Ready to stop rewriting ChatGPT prompts? <br className="hidden md:block" />
          Aura AI streamlines your daily workflows automatically.
        </p>

        <div ref={ctaRef} className="flex flex-col items-center gap-4">
          <button className="bg-lime-300 hover:bg-lime-400 text-black px-10 py-5 rounded-full text-xl font-semibold transition-all shadow-xl shadow-lime-300/20 flex items-center gap-3 group">
            Request Access
            <MoveRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <span className="text-[10px] md:text-xs font-bold text-black/40 uppercase mt-4 tracking-[0.2em]">
            FREE FOREVER, NO CREDIT CARD REQUIRED
          </span>
        </div>
      </div>
    </section>
  );
};
