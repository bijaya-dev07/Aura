"use client";

import React from "react";
import Link from "next/link";
import { MoveRight, Twitter, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="pt-32 pb-16 px-8 md:px-16 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-lime-300 rounded-full blur-[2px]" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Aura AI</span>
            </div>
            <p className="text-xl text-black/50 max-w-sm mb-10 leading-relaxed">
              Making AI automation accessible for everyone. 
              Built for speed, simplicity, and results.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-[10px] text-black/40">Product</h4>
            <div className="flex flex-col gap-4 text-sm font-medium text-black/60">
              <Link href="#" className="hover:text-black transition-colors">Pricing</Link>
              <Link href="#" className="hover:text-black transition-colors">Features</Link>
              <Link href="#" className="hover:text-black transition-colors">Integrations</Link>
              <Link href="#" className="hover:text-black transition-colors">Documentation</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-[10px] text-black/40">Company</h4>
            <div className="flex flex-col gap-4 text-sm font-medium text-black/60">
              <Link href="#" className="hover:text-black transition-colors">About Us</Link>
              <Link href="#" className="hover:text-black transition-colors">Blog</Link>
              <Link href="#" className="hover:text-black transition-colors">Careers</Link>
              <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-black/5">
          <p className="text-xs font-medium text-black/40">
            © 2026 Aura AI Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-bold text-black/40 uppercase tracking-widest">
            <Link href="#" className="hover:text-black transition-colors">Status</Link>
            <Link href="#" className="hover:text-black transition-colors">Cookie Policy</Link>
            <Link href="#" className="hover:text-black transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
