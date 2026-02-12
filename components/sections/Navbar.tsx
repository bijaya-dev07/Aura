"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MoveRight, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 px-4 md:py-6 md:px-16 flex items-center justify-between glass border-b border-black/5">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-lime-300 rounded-full blur-[2px]" />
        </div>
        <span className="text-lg md:text-2xl font-bold tracking-tight">Aura AI</span>
      </div>

      <div className="hidden md:flex items-center gap-10 text-sm font-medium text-black/60">
        <Link href="#" className="hover:text-black transition-colors">Pricing</Link>
        <Link href="#" className="hover:text-black transition-colors">Blog</Link>
        <Link href="#" className="hover:text-black transition-colors">Documentation</Link>
      </div>

      <div className="flex items-center gap-2">
        <button className="hidden md:inline-flex bg-lime-300 hover:bg-lime-400 text-black px-6 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2">
          Request Access
          <MoveRight className="w-4 h-4" />
        </button>

        {/* Mobile menu button */}
        <button aria-label="Open menu" onClick={() => setOpen(true)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md bg-black/5 hover:bg-black/7">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-60 bg-white/95 flex flex-col items-center justify-center p-8">
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="absolute top-6 right-6 p-3 rounded-md">
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col items-center gap-6 text-xl font-semibold">
            <Link href="#" onClick={() => setOpen(false)} className="hover:text-black">Pricing</Link>
            <Link href="#" onClick={() => setOpen(false)} className="hover:text-black">Blog</Link>
            <Link href="#" onClick={() => setOpen(false)} className="hover:text-black">Documentation</Link>
            <button onClick={() => setOpen(false)} className="btn-primary mt-4">Request Access</button>
          </div>
        </div>
      )}
    </nav>
  );
};
