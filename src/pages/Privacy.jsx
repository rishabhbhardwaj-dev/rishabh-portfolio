import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import Background from '../components/Background';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen text-gray-100 bg-background py-20 px-6">
      <Background />
      <div className="container mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors mb-10 focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-xs font-mono text-gray-400 mb-10">Last updated: October 2026</p>

        <div className="space-y-8 text-sm md:text-base text-gray-300 leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">1. Overview</h2>
            <p>
              This personal portfolio website is maintained by {siteConfig.name}. This Privacy Policy explains how information is handled when visiting this site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">2. Information Collection</h2>
            <p>
              This website is a static portfolio showcasing personal software engineering projects and technical experience. It does not run tracking cookies, third-party analytics scripts, or user account databases.
            </p>
            <p>
              If you initiate contact directly via email ({siteConfig.email}) or external professional profiles (LinkedIn, GitHub), the information you provide is used solely to respond to your inquiry.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">3. Third-Party Links</h2>
            <p>
              This website contains external links to third-party platforms including GitHub, LinkedIn, and live project demonstrations (Vercel). Visiting external sites is governed by their respective privacy policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">4. Contact Information</h2>
            <p>
              For any questions regarding this portfolio, you may reach out directly via email at{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                {siteConfig.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
