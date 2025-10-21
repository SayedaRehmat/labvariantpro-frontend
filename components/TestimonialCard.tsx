// components/TestimonialCard.tsx
import React from 'react';

export function TestimonialCard({ quote, name, role }: { quote: string; name: string; role?: string }) {
  return (
    <blockquote className="bg-white/3 p-5 rounded-xl">
      <p className="text-slate-200">“{quote}”</p>
      <footer className="mt-3 text-sm text-slate-400">— {name}{role ? `, ${role}` : ''}</footer>
    </blockquote>
  );
}
