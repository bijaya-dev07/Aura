"use client";

import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 px-8 md:px-16 flex items-center justify-between glass border-b border-black/5">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-lime-300 rounded-full blur-[2px]" />
        </div>
        <span className="text-2xl font-bold tracking-tight">Aura AI</span>
      </div>

      <div className="hidden md:flex items-center gap-10 text-sm font-medium text-black/60">
        <Link href="#" className="hover:text-black transition-colors">Pricing</Link>
        <Link href="#" className="hover:text-black transition-colors">Blog</Link>
        <Link href="#" className="hover:text-black transition-colors">Documentation</Link>
      </div>

      <button className="bg-lime-300 hover:bg-lime-400 text-black px-6 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2">
        Request Access
        <MoveRight className="w-4 h-4" />
      </button>
    </nav>
  );
};
