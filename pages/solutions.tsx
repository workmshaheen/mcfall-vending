import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  imgCoffeeSnak, imgPropcallLogo, imgMerchant6, imgChatGPT0629,
  imgIMG6999, imgNectaSamba, imgCraneCali, imgCOTI, imgCoffetekNeo,
  imgCoffetekZensia, imgSquarePro, imgSquareMini, imgSquareDouble,
  imgSquareBavmax, imgChatGPT0721, imgIMG6449, imgMediacitySmart,
} from '../lib/images';

const VENDING_MACHINES = [
  { name: 'Merchant Media 6', img: imgMerchant6 },
  { name: 'Merchant Media 4', img: imgChatGPT0629 },
  { name: 'Samba Classic', img: imgNectaSamba },
  { name: 'Bevmax Media', img: imgIMG6999 },
];

const COFFEE_MACHINES = [
  { name: 'CALI', img: imgCraneCali },
  { name: 'COTI', img: imgCOTI },
  { name: 'Neo+', img: imgCoffetekNeo },
  { name: 'Zensia', img: imgCoffetekZensia },
];

const SMART_FRIDGES = [
  { name: 'AI Smart Fridge Ultra', img: imgSquareBavmax },
  { name: 'AI Smart Fridge Pro', img: imgSquarePro },
  { name: 'AI Smart Fridge Mini', img: imgSquareMini },
];

export default function Solutions() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
        <title>Vending Solutions — MCFALL Vending Services</title>
        <meta name="description" content="MCFALL Vending Services — explore our fully managed vending machines, coffee machines and smart fridges for offices and warehouses across the UK." />
      </Head>

      {/* ── HERO ── */}
      <section className="hero-form-section" style={{ background: '#fff', paddingBottom: 40 }}>
        <div className="hero-form-grid">
          <div className="hero-form-content">
            <h1>MCFALL Vending Solutions</h1>
            <p className="hero-subtitle">From vending machines and coffee machines to AI-powered smart fridges — MCFALL installs, stocks, and manages everything so your workplace runs smoothly. Explore our range below.</p>
          </div>
          <div className="hero-form-image">
            <img src={imgCoffeeSnak} alt="Vending solutions" />
          </div>
        </div>
      </section>

      {/* ── PROPCALL TESTIMONIAL ── */}
      <section className="testimonial-row">
        <p>"The vending machine has been a huge hit at PropCall. Seamless service, flexible product selection, and a welcome boost to our social budget."{' '}
          <Link href="/case-studies" style={{ color: '#000' }}><strong>See Case Study</strong></Link>
        </p>
        <div className="logo-wrap">
          <img src={imgPropcallLogo} alt="PropCall" />
        </div>
      </section>

      {/* ── VENDING MACHINES ── */}
      <section id="vending-machines" className="solutions-category-section" style={{ background: '#fff' }}>
        <div className="solutions-category-header">
          <div className="bubble-label">Vending Machines</div>
          <p className="solutions-category-desc">
            MCFALL supplies and fully manages modern vending machines — stocked, monitored, and maintained by our team. Reliable 24/7 snacks and drinks without the hassle of managing suppliers, breakdowns, or stock.
          </p>
        </div>
        <div className="machine-grid">
          {VENDING_MACHINES.map((m) => (
            <div key={m.name} className="machine-card">
              <img src={m.img} alt={m.name} />
              <div className="machine-card-body">
                <h3>{m.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COFFEE MACHINES ── */}
      <section id="coffee-machines" className="solutions-category-section" style={{ background: '#fafafa' }}>
        <div className="solutions-category-header">
          <div className="bubble-label">Coffee Machines</div>
          <p className="solutions-category-desc">
            MCFALL provides barista-quality coffee using premium Lavazza beans. Our professional machines are fully installed, serviced, and maintained by our in-house team to keep great-tasting hot drinks flowing all day, every day.
          </p>
        </div>
        <div className="machine-grid">
          {COFFEE_MACHINES.map((m) => (
            <div key={m.name} className="machine-card">
              <img src={m.img} alt={m.name} />
              <div className="machine-card-body">
                <h3>{m.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SMART FRIDGES ── */}
      <section id="smart-fridges" className="solutions-category-section" style={{ background: '#fff' }}>
        <div className="solutions-category-header">
          <div className="bubble-label">Smart Fridges</div>
          <p className="solutions-category-desc">
            MCFALL's AI-powered smart fridges offer seamless grab-and-go access to food and drinks. Fully managed with restocking, monitoring, and ongoing support included — effortless workplace retail, handled by us.
          </p>
        </div>
        <div className="machine-grid machine-grid-3">
          {SMART_FRIDGES.map((m) => (
            <div key={m.name} className="machine-card">
              <img src={m.img} alt={m.name} />
              <div className="machine-card-body">
                <h3>{m.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SMARTER MACHINES SECTION ── */}
      <div className="content-image-wrap" style={{ background: '#fafafa', maxWidth: '100%', padding: '80px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="content-image-flex image-right">
            <div className="content-image-text">
              <h2>The MCFALL Standard — Smarter Machines, Better Products</h2>
              <h4>
                Every MCFALL machine uses real-time stock tracking and market-leading card readers for fast, secure payments. Our guaranteed vend and basket technology means your team is only charged when an item is successfully dispensed. LED lighting and interactive screens make every machine easy and intuitive to use.
              </h4>
              <h4 style={{ marginTop: 20 }}>
                We stock high-quality food and drink from trusted brands including Lavazza coffee and household names like McCoy's, Coca-Cola and Cadbury. Every machine is fully maintained by the MCFALL engineering team, with proactive servicing and rapid call-outs to keep everything running smoothly.
              </h4>
            </div>
            <div className="content-image-media">
              <img src={imgChatGPT0721} alt="Smart vending technology" />
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-grid">
          <div className="cta-content">
            <h1><strong>Not sure which MCFALL solution is right for you?</strong></h1>
            {submitted ? (
              <div style={{ padding: '24px 0', textAlign: 'center' }}>
                <p style={{ fontSize: '1.8rem', fontWeight: 600, color: '#1b17ff', marginBottom: 8 }}>Thank you!</p>
                <p style={{ fontSize: '1.5rem', color: 'rgba(0,0,0,0.6)' }}>We'll be in touch within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="New Lead — Free Assessment (Solutions Page)" />
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
            <img src={imgMediacitySmart} alt="Smart fridge installation" />
          </div>
        </div>
      </section>
    </>
  );
}
