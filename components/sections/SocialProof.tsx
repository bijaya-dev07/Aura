"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const partners = [
  "Symmetric", "Human Ventures", "Green Field", "Vitalize", "Remote First Capital", "Lerer Hippeau",
  "Symmetric", "Human Ventures", "Green Field", "Vitalize", "Remote First Capital", "Lerer Hippeau"
];

const testimonials = [
  { name: "Scott Belsky", title: "CSO, Adobe", color: "bg-lime-100", image: "/design3.jpg" },
  { name: "Eric Ries", title: "Author, The Lean Startup", color: "bg-purple-100", image: "/design4.jpg" },
  { name: "Mariano Battan", title: "Cofounder, Mural", color: "bg-orange-100", image: "/design1.jpg" },
  { name: "Brian Sugar", title: "Founder, PopSugar", color: "bg-blue-100", image: "/design2.jpg" },
  { name: "Scott Belsky", title: "CSO, Adobe", color: "bg-lime-100", image: "/design3.jpg" },
  { name: "Eric Ries", title: "Author, The Lean Startup", color: "bg-purple-100", image: "/design4.jpg" },
  { name: "Mariano Battan", title: "Cofounder, Mural", color: "bg-orange-100", image: "/design1.jpg" },
  { name: "Brian Sugar", title: "Founder, PopSugar", color: "bg-blue-100", image: "/design2.jpg" },
];

export const SocialProof = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite Partner Marquee
      if (partnersRef.current) {
        const w = partnersRef.current.scrollWidth / 2;
        gsap.to(partnersRef.current, {
          x: -w,
          duration: 30,
          ease: "none",
          repeat: -1,
        });
      }

      // Infinite Testimonial Marquee (Opposite Direction)
      if (testimonialsRef.current) {
        const w = testimonialsRef.current.scrollWidth / 2;
        gsap.fromTo(testimonialsRef.current, 
          { x: -w },
          {
            x: 0,
            duration: 40,
            ease: "none",
            repeat: -1,
          }
        );
      }

      // Initial reveal
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 overflow-hidden flex flex-col items-center">
      <h2 className="text-3xl font-serif italic mb-16 text-black/80 tracking-wide px-8 text-center">
        Backing our vision
      </h2>

      {/* Partners Marquee */}
      <div className="w-full mb-20 relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FCFCF9] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FCFCF9] to-transparent z-10" />
        
        <div ref={partnersRef} className="flex gap-20 opacity-30 grayscale whitespace-nowrap px-10">
          {partners.map((partner, i) => (
            <span key={i} className="text-2xl font-bold tracking-tighter uppercase inline-block">
              {partner}
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials Marquee */}
      <div className="w-full relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FCFCF9] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FCFCF9] to-transparent z-10" />

        <div ref={testimonialsRef} className="flex gap-6 px-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`testimonial-card ${t.color} px-6 py-4 rounded-3xl flex items-center gap-4 border border-black/5 shadow-sm transform hover:scale-105 transition-transform cursor-pointer flex-shrink-0 min-w-[300px]`}
            >
              <div className="w-12 h-12 bg-white rounded-full flex-shrink-0 border-2 border-white overflow-hidden shadow-sm relative">
                 <Image
                    src={t.image}
                    alt={t.name}
                  fill
                  sizes="48px"
                    className="object-cover"
                 />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-extrabold leading-none mb-1 text-black/80">{t.name}</h4>
                <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
