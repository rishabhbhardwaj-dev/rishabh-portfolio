import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import Background from '../components/Background';

export default function Terms() {
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

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Terms & Conditions</h1>
        <p className="text-xs font-mono text-gray-400 mb-10">Last updated: October 2026</p>

        <div className="space-y-8 text-sm md:text-base text-gray-300 leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and viewing this personal portfolio website of {siteConfig.name}, you agree to comply with these terms of use.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">2. Intellectual Property & Code Samples</h2>
            <p>
              The design, text content, project descriptions, and structural code of this website represent original work by {siteConfig.name}. Open-source code samples and project repositories referenced on GitHub are subject to their respective open-source licenses.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">3. Disclaimer</h2>
            <p>
              This website and its associated project case studies are provided for informational and demonstration purposes to present engineering capabilities. No formal warranty is provided for external services or third-party links linked from this site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">4. Contact</h2>
            <p>
              For questions regarding these terms or technical inquiries, contact{' '}
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
