// src/components/CertificationCard.jsx
import React from 'react';
import { Award, ExternalLink, FileText } from 'lucide-react';

export default function CertificationCard({ credential }) {
  const {
    name,
    issuer,
    type,
    date,
    credentialId,
    certificateUrl,
    verificationUrl,
    verificationLabel = "Verify Credential",
    status,
    expiresOn
  } = credential;

  return (
    <article className="workspace-card p-5 flex flex-col h-full">
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 bg-workspace-surface border border-workspace-border rounded-lg text-workspace-accent shrink-0">
          <Award size={20} aria-hidden="true" />
        </div>
        <div>
          <h4 className="font-semibold text-white leading-tight">{name}</h4>
          <p className="text-sm text-workspace-text-muted mt-0.5">{issuer}</p>
        </div>
      </div>

      <div className="flex-grow space-y-1.5 mt-2">
        <div className="flex flex-wrap justify-between items-center text-xs font-mono text-gray-500 gap-2">
          <span>{type || 'Certification'}</span>
          <div className="flex items-center gap-2">
            {status && (
              <span className="px-2 py-0.5 bg-workspace-accent/10 border border-workspace-accent/30 text-workspace-accent rounded-full text-[10px] font-sans">
                {status}
              </span>
            )}
            {date && <span>{date}</span>}
          </div>
        </div>

        {expiresOn && (
          <p className="text-xs font-mono text-gray-500">
            Expires: {expiresOn}
          </p>
        )}

        {credentialId && (
          <p className="text-xs font-mono text-workspace-text-muted/60">
            ID: {credentialId}
          </p>
        )}
      </div>

      {/* Action Links - Rendered conditionally when URLs exist */}
      {(certificateUrl || verificationUrl) && (
        <div className="flex flex-wrap gap-4 mt-5 pt-4 border-t border-workspace-border/50">
          {certificateUrl && (
            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-workspace-text-muted hover:text-workspace-accent transition-colors duration-workspace-fast focus-visible:outline-workspace-accent focus-visible:outline-2 rounded-sm"
              aria-label={`View certificate PDF for ${name}`}
            >
              <FileText size={16} aria-hidden="true" /> View Certificate
            </a>
          )}
          {verificationUrl && (
            <a
              href={verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-workspace-text-muted hover:text-workspace-accent transition-colors duration-workspace-fast focus-visible:outline-workspace-accent focus-visible:outline-2 rounded-sm"
              aria-label={`Verify ${name} credential`}
            >
              <ExternalLink size={16} aria-hidden="true" /> {verificationLabel}
            </a>
          )}
        </div>
      )}
    </article>
  );
}