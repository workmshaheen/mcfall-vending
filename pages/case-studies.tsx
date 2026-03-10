import Head from 'next/head';
import { imgLogo } from '../lib/images';

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies — MCFALL Vending Services</title>
        <meta name="description" content="Real client case studies showing how MCFALL Vending Services solutions are designed, installed, and managed across different workplaces." />
        <link rel="canonical" href="https://www.mcfallvending.com/case-studies" />
        <meta property="og:title" content="Case Studies — MCFALL Vending Services" />
        <meta property="og:description" content="Real client case studies showing how MCFALL vending solutions are designed, installed, and managed across different workplaces." />
        <meta property="og:url" content="https://www.mcfallvending.com/case-studies" />
        <meta name="twitter:title" content="Case Studies — MCFALL Vending Services" />
        <meta name="twitter:description" content="Real client case studies showing how MCFALL vending solutions are designed, installed, and managed across different workplaces." />
      </Head>

      {/* ── COMING SOON ── */}
      <section className="coming-soon-section">
        <div className="coming-soon-inner">
          <img src={imgLogo} alt="MCFALL Vending Services" className="coming-soon-logo" />
          <h1>Case Studies</h1>
          <p className="coming-soon-label">Coming Soon</p>
          <p className="coming-soon-text">
            We're putting together real client stories showcasing how MCFALL vending solutions are designed, installed, and managed across different workplaces. Check back soon.
          </p>
        </div>
      </section>
    </>
  );
}
