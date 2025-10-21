// components/Testimonials.tsx
import React from 'react';
import { TestimonialCard } from './TestimonialCard';

export default function Testimonials() {
  const items = [
    { quote: 'LabVariant Pro reduced our variant triage time by 70% — reliable and reproducible.', name: 'Dr. Maria Khan', role: 'Clinical Bioinformatics Lead' },
    { quote: 'Ensembl VEP integration and the ACMG report made our internal audits effortless.', name: 'Genome Lab, U. Research' },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold text-white">Trusted by labs & researchers</h3>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {items.map((t) => <TestimonialCard key={t.name} {...t} />)}
      </div>
    </section>
  );
}
