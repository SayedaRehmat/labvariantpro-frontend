// components/HeroSection.tsx
import Link from 'next/link';
import React from 'react';
import AnimatedBackground from './AnimatedBackground';

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
              From raw VCF to clinical insight — <span className="text-cyan-300">in minutes</span>.
            </h1>
            <p className="mt-5 text-lg text-slate-200 max-w-2xl">
              LabVariant Pro runs VEP-backed annotation, automated ACMG classification, and produces clinic-ready reports — reproducible, auditable, and scaled for research and clinical labs.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/signup" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-cyan-400 text-slate-900 font-semibold shadow hover:brightness-105">
                Start free trial
              </Link>
              <a href="#demo" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/10 text-white/90 bg-white/3">
                View demo
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-xs text-slate-300">
              <div>
                <div className="text-xl font-semibold text-white">VEP</div>
                <div className="opacity-80">Ensembl annotations</div>
              </div>
              <div>
                <div className="text-xl font-semibold text-white">ACMG</div>
                <div className="opacity-80">Automated classification</div>
              </div>
              <div>
                <div className="text-xl font-semibold text-white">Secure</div>
                <div className="opacity-80">AWS storage & encryption</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-b from-white/6 to-white/2 rounded-2xl p-4 shadow-md border border-white/5">
              <video
                id="demo"
                src="/demo.mp4"
                controls
                playsInline
                className="rounded-lg w-full object-cover aspect-video bg-black/40"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-sm font-semibold text-white">Avg job time</div>
                <div className="text-lg font-bold mt-1">~ 2–7 min</div>
                <div className="text-xs opacity-80 mt-1">depends on VCF size & options</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-sm font-semibold text-white">Uptime</div>
                <div className="text-lg font-bold mt-1">99.9%</div>
                <div className="text-xs opacity-80 mt-1">monitored & alerting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
    </header>
  );
}
