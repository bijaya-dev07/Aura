"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface FeatureDetailProps {
  label: string;
  title: string;
  points: string[];
  color: string;
  imageUrl: string;
  reverse?: boolean;
}

const FeatureDetail = ({ label, title, points, color, imageUrl, reverse }: FeatureDetailProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".text-side", {
        x: reverse ? 100 : -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
      gsap.from(".image-side", {
        x: reverse ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reverse]);

  return (
    <div ref={containerRef} className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 py-16`}>
      <div className="text-side flex-1 max-w-xl">
        <span className="text-[10px] font-bold text-black/40 uppercase tracking-[0.2em] mb-6 block">
          {label}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
          {title}
        </h2>
        <div className="space-y-4">
          {points.map((point, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-xl glass border border-black/5 hover:bg-white/80 transition-colors">
              <div className={`w-8 h-8 ${color} rounded-lg flex items-center justify-center text-black/60`}>
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-sm font-medium text-black/80">{point}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="image-side flex-1 w-full h-[400px] md:h-[500px] relative">
        <div className={`w-full h-full rounded-[40px] card-shadow relative overflow-hidden group border border-black/5`}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 720px, 1200px"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
};

export const FeatureDetails = () => {
  return (
    <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto space-y-32">
      <FeatureDetail
        label="CONTENT CREATION"
        title="High-quality content that sounds like you."
        points={[
          "Turn a customer profile into Daily Content",
          "Turn meetings and emails into a Client Case Study",
          "Turn long recorded meetings into a Short Podcast"
        ]}
        color="bg-purple-200"
        imageUrl="/design1.jpg"
      />
      <FeatureDetail
        label="DATA ANALYSIS"
        title="Insights you can act on, instantly."
        points={[
          "Auto-generate progress reports every Friday",
          "Identify trends across months of customer feedback",
          "Synthesize complex research into clear action items"
        ]}
        color="bg-blue-200"
        imageUrl="/design2.jpg"
        reverse
      />
    </section>
  );
};
