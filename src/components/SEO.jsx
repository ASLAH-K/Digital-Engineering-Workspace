import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://mhdaslah.vercel.app';
const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/og-default.png`;
const DEFAULT_IMAGE_ALT =
  'Digital Engineering Workspace — Muhammed Aslah K';

export default function SEO({
  title,
  description,
  name = 'Muhammed Aslah K',
  type = 'website',
  url,
  image,
  imageAlt = DEFAULT_IMAGE_ALT,
}) {
  const siteTitle = title
    ? `${title} | ${name}`
    : `Digital Engineering Workspace | ${name}`;

  const siteDescription =
    description ||
    'Digital Engineering Workspace of Muhammed Aslah K, documenting cybersecurity projects, experiments, and learning notes.';

  // Use the primary domain and the current route for canonical URLs.
  // An explicit url prop can override this when needed.
  const pagePath =
    typeof window !== 'undefined' ? window.location.pathname : '/';

  const pageUrl = url || `${SITE_URL}${pagePath}`;
  const socialImage = image || DEFAULT_SOCIAL_IMAGE;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph metadata */}
      <meta property="og:site_name" content="Digital Engineering Workspace" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:alt" content={imageAlt} />

      {/* X/Twitter metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={socialImage} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Helmet>
  );
}