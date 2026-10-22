// src/pages/Certifications.jsx
import React from 'react';
import { Award } from 'lucide-react';
import SEO from '../components/SEO';
import { certifications } from '../data/certifications';
import CertificationCard from '../components/CertificationCard';

export default function Certifications() {
  return (
    <div className="animate-fade-in pb-20">
      <SEO
        title="Certifications & Credentials"
        description="A record of my cybersecurity certifications, course completions, and job simulations, with certificate and verification links where available."
      />

      {/* Header Section */}
      <header className="bg-workspace-surface/30 border-b border-workspace-border py-16 md:py-24">
        <div className="workspace-container max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center p-4 bg-workspace-surface border border-workspace-border rounded-xl text-workspace-accent shadow-glow mb-4">
            <Award size={32} aria-hidden="true" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Certifications & Credentials
          </h1>
          <p className="text-lg text-workspace-text-muted max-w-2xl mx-auto leading-relaxed">
            A record of my cybersecurity certifications, achievements and course completions, with certificate and verification links where available.
          </p>
        </div>
      </header>

      {/* Grid Layout for all credentials */}
      <section className="py-16">
        <div className="workspace-container max-w-5xl mx-auto">
           <div className="grid md:grid-cols-2 gap-6">
             {certifications.map(cert => (
               <CertificationCard key={cert.id} credential={cert} />
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}