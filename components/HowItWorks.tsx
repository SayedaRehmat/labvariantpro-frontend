// components/HowItWorks.tsx
import React from 'react';

const Step: React.FC<{ idx: number; title: string; text: string }> = ({ idx, title, text }) => (
  <div className="flex gap-4">
    <div className="flex-none">
      <div className="h-12 w-12 rounded-full bg-cyan-600/20 flex items-center justify-center font-semibold text-cyan-200">{idx}</div>
    </div>
    <div>
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="mt-1 text-sm text-slate-300">{text}</p>
    </div>
  </div>
);

export default function HowItWorks() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold text-white">How it works — simple, auditable</h3>
      <p className="mt-2 text-slate-300">Three steps from raw file to clinical-grade report.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/3 p-6 rounded-2xl">
          <Step idx={1} title="Upload VCF" text="Drag & drop a single VCF or upload a compressed batch. We validate format and estimate job time." />
        </div>
        <div className="bg-white/3 p-6 rounded-2xl">
          <Step idx={2} title="Annotate & Classify" text="We run VEP, population lookups, and automated ACMG scoring. Every decision is versioned and stored." />
        </div>
        <div className="bg-white/3 p-6 rounded-2xl">
          <Step idx={3} title="Review & Export" text="Interactively inspect variants, approve edits, and export PDF/CSV with a full provenance header." />
        </div>
      </div>
    </section>
  );
}
