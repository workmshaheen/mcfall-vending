import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  imgChatVMs, imgMediacityLogo, imgIMG5331,
  imgIMG6445, imgIMG5233, imgCoffeeSnak, imgIMG3775,
  imgClient2Logo, imgIMG6999, imgCraneCali, imgSquarePro,
  imgMediacitySmart,
} from '../lib/images';

export default function Home() {
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [ctaSubmitted, setCtaSubmitted] = useState(false);

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>, setSubmitted: (v: boolean) => void) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch('https://formsubmit.co/ajax/info@mcfallvending.com', {
        method: 'POST',
        body: data,
      });
      setSubmitted(true);
      form.reset();
    } catch {
      window.location.href = `mailto:info@mcfallvending.com?subject=Free Assessment Request&body=Staff: ${data.get('staff')}%0AEmail: ${data.get('email')}`;
    }
  }

  return (
    <>
      <Head>
        <title>MCFALL Vending Services — Fully Managed Vending for Offices and Warehouses</title>
        <meta name="description" content="MCFALL Vending Services provides fully managed vending machines, coffee machines and smart fridges for offices and warehouses across the UK." />
      </Head>

      {/* ── HERO ── */}
      <section id="free-assessment" className="hero-form-section">
        <div className="hero-form-grid">
          <div className="hero-form-content">
            <h1>Fully Managed Vending for Offices and Warehouses</h1>
            <p className="hero-subtitle">We install, stock, and maintain vending machines, coffee machines, and smart fridges — so you don't have to.</p>
            {heroSubmitted ? (
              <div style={{ padding: '24px 0', textAlign: 'center' }}>
                <p style={{ fontSize: '1.8rem', fontWeight: 600, color: '#1b17ff', marginBottom: 8 }}>Thank you!</p>
                <p style={{ fontSize: '1.5rem', color: 'rgba(0,0,0,0.6)' }}>We'll be in touch within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={(e) => handleFormSubmit(e, setHeroSubmitted)}>
                <input type="hidden" name="_subject" value="New Lead — Free Assessment (Homepage Hero)" />
                <input type="hidden" name="_template" value="table" />
                <div className="hero-form-fields">
                  <input className="input-black" type="text" name="staff" placeholder="Approximate number of staff in your workplace" required />
                  <input className="input-black" type="email" name="email" placeholder="Work Email Address" required />
                  <button type="submit" className="btn-green" style={{ width: '100%' }}>Book Free Assessment</button>
                </div>
              </form>
            )}
          </div>
          <div className="hero-form-image">
            <img src={imgChatVMs} alt="Vending machines" />
          </div>
        </div>
      </section>

      {/* ── FIRST TESTIMONIAL ── */}
      <section className="testimonial-row">
        <p>"Great selection, and a service we'd happily recommend."{' '}
          <Link href="/case-studies" style={{ color: '#000' }}><strong>See Case Study</strong></Link>
        </p>
        <div className="logo-wrap" style={{ width: 100, height: 100 }}>
          <img src={imgMediacityLogo} alt="MediaCity" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
      </section>

      {/* ── EDITORIAL / 78% ── */}
      <section className="editorial-section">
        <div className="editorial-inner">
          <div className="editorial-content">
            <div style={{ margin: '20px 0' }}>
              <div className="editorial-stat-number">78%</div>
              <div className="editorial-stat-label">feel more valued when food and drink is available at work</div>
            </div>
            <div className="editorial-body">
              <p>Small workplace amenities have a big impact. Access to food and drink supports energy, productivity, and engagement throughout the working day.</p>
              <p>Over <strong>60%</strong> report improved energy and productivity, and more engaged workplaces see <strong>20–25%</strong> lower staff turnover over time.</p>
              <p><Link href="#free-assessment"><strong>Book a free workplace assessment</strong></Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT DOES THIS LOOK LIKE ── */}
      <div className="content-image-wrap">
        <div className="content-image-flex image-right">
          <div className="content-image-text">
            <h2>What does this look like in practice?</h2>
            <h4>A fully managed food and drink solution that improves how workplaces feel and function.</h4>
          </div>
          <div className="content-image-media">
            <img src={imgIMG5331} alt="Vending solution in practice" />
          </div>
        </div>
      </div>

      {/* ── OUR FOCUS ── */}
      <section className="focus-section">
        <div className="focus-inner">
          <div className="focus-header">
            <div className="bubble-label">Our Focus</div>
            <h2 className="focus-heading">Offices and warehouses are our core focus</h2>
            <p className="focus-subtext">We service these environments day to day and understand how they operate.</p>
          </div>
          <div className="focus-grid">
            {[
              { src: imgIMG6445, label: 'Office Breakrooms' },
              { src: imgIMG5233, label: 'Reception Areas' },
              { src: imgCoffeeSnak, label: 'Coffee & Snacks' },
              { src: imgIMG3775, label: 'Warehouse Floors' },
            ].map((item, i) => (
              <div key={i} className="focus-card">
                <img src={item.src} alt={item.label} />
                <div className="focus-card-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECOND TESTIMONIAL ── */}
      <section className="testimonial-row">
        <p>"MCFALL Vending Services have been great to work with and the ongoing support has been seamless."{' '}
          <Link href="/case-studies" style={{ color: '#000' }}><strong>See Case Study</strong></Link>
        </p>
        <div className="logo-wrap">
          <img src={imgClient2Logo} alt="Client" />
        </div>
      </section>

      {/* ── PRODUCT CARDS ── */}
      <div className="product-cards-container">
        {[
          { href: '/solutions#vending-machines', img: imgIMG6999, title: 'Vending Machines' },
          { href: '/solutions#coffee-machines', img: imgCraneCali, title: 'Coffee Machines' },
          { href: '/solutions#smart-fridges', img: imgSquarePro, title: 'Smart Fridges' },
        ].map((c) => (
          <Link key={c.title} href={c.href} className="product-card">
            <img src={c.img} alt={c.title} className="product-card-img" />
            <div className="product-card-overlay">
              <h3>{c.title}</h3>
            </div>
          </Link>
        ))}
      </div>

      {/* ── SECOND CTA HERO ── */}
      <section className="cta-section">
        <div className="cta-grid">
          <div className="cta-content">
            <h1><strong>Ready to see what would work in your workplace?</strong></h1>
            {ctaSubmitted ? (
              <div style={{ padding: '24px 0', textAlign: 'center' }}>
                <p style={{ fontSize: '1.8rem', fontWeight: 600, color: '#1b17ff', marginBottom: 8 }}>Thank you!</p>
                <p style={{ fontSize: '1.5rem', color: 'rgba(0,0,0,0.6)' }}>We'll be in touch within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={(e) => handleFormSubmit(e, setCtaSubmitted)}>
                <input type="hidden" name="_subject" value="New Lead — Free Assessment (Homepage CTA)" />
                <input type="hidden" name="_template" value="table" />
                <div className="cta-form-fields">
                  <input className="input-gray" type="text" name="staff" placeholder="Approximate number of staff in your workplace" required />
                  <input className="input-gray" type="email" name="email" placeholder="Work email address" required />
                  <button type="submit" className="btn-green-rounded" style={{ width: '100%' }}>Book Free Assessment</button>
                </div>
              </form>
            )}
          </div>
          <div className="cta-image">
            <img src={imgMediacitySmart} alt="Smart fridge at MediaCity" />
          </div>
        </div>
      </section>
    </>
  );
}
