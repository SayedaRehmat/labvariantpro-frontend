// components/FeaturesGrid.tsx
import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const FeatureCard: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <div className="bg-white/3 rounded-2xl p-6 border border-white/5 h-full">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-md bg-cyan-800/20">
        <CheckIcon className="h-6 w-6 text-cyan-300" />
      </div>
      <h4 className="font-semibold text-white">{title}</h4>
    </div>
    <p className="mt-3 text-sm text-slate-300">{text}</p>
  </div>
);

export default function FeaturesGrid() {
  const features = [
    {
      title: 'VEP-backed annotations',
      text: 'Ensembl VEP integration with HGVS, consequence, and transcript-aware annotations.',
    },
    {
      title: 'Automated ACMG classification',
      text: 'Rule-based ACMG scoring, customizable thresholds, and evidence tracking for audit.',
    },
    {
      title: 'Clinic-ready reports',
      text: 'Download CSV and PDF reports with per-variant notes and provenance metadata.',
    },
    {
      title: 'Scalable AWS processing',
      text: 'Workers scale with queue depth — from small labs to large datasets.',
    },
    {
      title: 'Fine-grained access & audit',
      text: 'Per-user & per-team permissions, job logs, and pipeline versioning for reproducibility.',
    },
    {
      title: 'Integrations & API',
      text: 'Integrate with your pipeline via API, S3, or export connectors for LIS/EMR systems.',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold text-white">What LabVariant Pro does</h3>
      <p className="mt-2 text-slate-300 max-w-2xl">A reproducible VCF annotation and classification suite built for research and clinical workflows.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f) => (
          <FeatureCard key={f.title} title={f.title} text={f.text} />
        ))}
      </div>
    </section>
  );
}
