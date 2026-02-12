"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    num: "01",
    title: "Dinner Plan Autopilot",
    desc: "Personalized recipes and grocery lists delivered to you weekly.",
    color: "bg-[#F3E8FF]",
    glow: "from-purple-400/20 to-transparent",
    image: "/s1.png",
  },
  {
    num: "02",
    title: "B2B Blog Writer",
    desc: "Create engaging blog posts that resonate with your audience.",
    color: "bg-[#FFFBF0]",
    glow: "from-orange-400/20 to-transparent",
    image: "/s2.png",
  },
  {
    num: "03",
    title: "Founder Reflections",
    desc: "Turn your reflections into a strategic advantage.",
    color: "bg-[#ECFDF5]",
    glow: "from-emerald-400/20 to-transparent",
    image: "/s3.png",
  },
];

export const FeatureCards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          rotate: i % 2 === 0 ? -2 : 2,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.1,
        });

        // Floating sequence
        gsap.to(card, {
          y: -12,
          duration: 4 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-16 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-lime-200 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-200 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8">
        {features.map((feature, i) => (
          <div
            key={i}
            ref={(el) => { cardsRef.current[i] = el; }}
            className={`${feature.color} w-full md:flex-1 min-h-[420px] md:min-h-[520px] rounded-[40px] md:rounded-[56px] p-8 md:p-10 flex flex-col justify-between border border-black/[0.03] relative group transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)]`}
          >
            {/* Unique Ghost Number */}
            <span className="absolute top-8 right-12 text-8xl font-black text-black/[0.03] pointer-events-none select-none group-hover:text-black/[0.05] transition-colors duration-500">
              {feature.num}
            </span>

            <div className="relative z-10">
              <div className="w-12 h-[2px] bg-black/10 mb-8 group-hover:w-20 transition-all duration-500" />
              <h3 className="text-4xl font-bold mb-6 tracking-tight leading-[1.1] max-w-[200px]">
                {feature.title}
              </h3>
            </div>
            
            <div className="relative z-10 mt-auto">
              {/* Refined Image Container with Glass Blob */}
              <div className="w-full flex justify-center mb-8 relative group/image">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br ${feature.glow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="w-32 h-32 md:w-44 md:h-44 flex items-center justify-center relative">
                  <Image 
                    src={feature.image} 
                    alt={feature.title} 
                    fill
                    className="object-contain drop-shadow-2xl translate-y-2 group-hover:translate-y-0 group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg font-medium text-black/50 leading-relaxed max-w-[260px] group-hover:text-black/80 transition-colors duration-500">
                  {feature.desc}
                </p>
                
                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black/30 group-hover:text-black transition-all duration-500 overflow-hidden group/btn">
                  <span className="relative">
                    Learn More
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-500" />
                  </span>
                  <MoveRight className="w-4 h-4 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
