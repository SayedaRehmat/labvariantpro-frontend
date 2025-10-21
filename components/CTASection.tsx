// components/CTASection.tsx
import Link from 'next/link';
import React from 'react';

export default function CTASection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-gradient-to-r from-cyan-800/30 to-cyan-600/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">Ready to speed up variant interpretation?</h3>
          <p className="mt-1 text-slate-300">Start with a free trial — no credit card required. Upload a sample VCF and see results in minutes.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/signup" className="px-5 py-3 bg-cyan-400 text-slate-900 font-semibold rounded-md">Start free trial</Link>
          <Link href="/pricing" className="px-5 py-3 border border-white/10 rounded-md text-white/90">See pricing</Link>
        </div>
      </div>
    </section>
  );
}
