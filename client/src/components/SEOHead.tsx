import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Zenko Digital - Professional Digital Agency | Web Development & Marketing",
  description = "Transform your business with Zenko Digital's professional web development, design, and digital marketing services. We create innovative solutions that drive growth and engagement.",
  keywords = "web development, digital marketing, web design, e-commerce, mobile apps, branding, SEO, digital agency, business websites, online presence",
  image = "/og-image.png",
  url = "https://zenko.com",
  type = "website",
  author = "Zenko Digital Team",
  publishedTime,
  modifiedTime,
}) => {
  const fullTitle = title.includes('Zenko Digital') ? title : `${title} | Zenko Digital`;
  const fullUrl = url.startsWith('http') ? url : `https://zenko.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://zenko.com${image}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zenko Digital",
    "description": description,
    "url": "https://zenko.com",
    "logo": "https://zenko.com/Zenko.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "email": "hello@zenko.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/zenkodigital",
      "https://www.instagram.com/zenkodigital",
      "https://www.linkedin.com/company/zenkodigital",
      "https://twitter.com/zenkodigital"
    ],
    "services": [
      {
        "@type": "Service",
        "name": "Web Development",
        "description": "Custom website development and e-commerce solutions"
      },
      {
        "@type": "Service",
        "name": "Digital Marketing",
        "description": "SEO, social media marketing, and online advertising"
      },
      {
        "@type": "Service",
        "name": "Brand Design",
        "description": "Logo design, branding, and visual identity creation"
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Zenko Digital" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@zenkodigital" />
      <meta name="twitter:creator" content="@zenkodigital" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="theme-color" content="#F25C23" />
      
      {/* Time-based Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/Zenko.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEOHead;