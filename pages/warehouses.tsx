import { useState } from 'react';
import Head from 'next/head';
import { imgShutterstock, imgChatGPT0916, imgIMG6282, imgChatGPT0629 } from '../lib/images';

export default function Warehouses() {
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
        <title>Warehouses — MCFALL Vending Services</title>
        <meta name="description" content="Fully managed vending solutions designed for warehouse environments and shift workers." />
      </Head>

      {/* ── BANNER ── */}
      <div className="page-banner">
        <img src={imgShutterstock} alt="Warehouse environment" />
        <div className="page-banner-text">
          <h1>Supporting Energy Across Every Shift</h1>
        </div>
      </div>

      {/* ── TWO-COL INTRO ── */}
      <div className="two-col-text">
        <div>
          <p>
            Energy levels play a direct role in how warehouse teams perform throughout the day. Warehouse roles are physically demanding, with many workers walking several miles per shift, lifting repeatedly, and spending long periods on their feet. Studies consistently show that manual and warehouse roles can burn hundreds of calories per shift, often comparable to light to moderate exercise sustained over many hours.
          </p>
          <p>
            Without reliable access to food, drinks, and hot beverages, it becomes harder for staff to maintain consistent energy and output.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
            <a href="#free-assessment" className="btn-green">Book a free workplace assessment</a>
          </div>
        </div>
        <div>
          <p>
            Ready access to refreshments supports timely refuelling during natural energy dips. Long shifts and physical work increase the body's need for hydration and calories, particularly in temperature controlled or high movement environments. Having food and drinks available on site helps staff replenish energy when they need to, supporting endurance, concentration, and steady performance across the shift.
          </p>
          <p>
            Energy is also closely linked to safety on the warehouse floor. Fatigue is a recognised risk factor in environments involving machinery, vehicles, lifting, and fast paced movement. Better hydration and nutrition support alertness, reaction time, and focus, helping reduce the likelihood of errors caused by low energy levels during physically demanding work.
          </p>
        </div>
      </div>

      {/* ── CONTENT + IMAGE ── */}
      <div className="content-image-wrap">
        <div className="content-image-flex image-right">
          <div className="content-image-text">
            <h2>24/7 Access for Shift Workers</h2>
            <h4>
              Shift patterns make access even more important. Many warehouse teams work early mornings, late nights, weekends, or rotating shifts, when external food options are limited or unavailable. On site vending machines, smart fridges, and coffee solutions provide twenty four hour access, ensuring every shift is equally supported regardless of working hours.
            </h4>
          </div>
          <div className="content-image-media">
            <img src={imgIMG6282} alt="Warehouse vending" />
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <section style={{ background: '#fafafa', padding: '60px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            {[
              { stat: 'Miles', label: 'The average warehouse worker walks several miles per shift during a working day' },
              { stat: 'Calories', label: 'Warehouse roles can burn hundreds of calories per shift, comparable to light exercise' },
              { stat: '24/7', label: 'Our machines are available around the clock to support every shift, every day' },
            ].map((s) => (
              <div key={s.stat} style={{ textAlign: 'center', padding: '32px 20px', background: '#fff', borderRadius: 12, border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '4rem', fontWeight: 700, color: '#1b17ff', letterSpacing: '-0.03em', marginBottom: 8 }}>{s.stat}</div>
                <p style={{ fontSize: '1.5rem', color: 'rgba(0,0,0,0.55)', lineHeight: 1.5 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT + IMAGE 2 ── */}
      <div className="content-image-wrap">
        <div className="content-image-flex">
          <div className="content-image-text">
            <h2>Designed for Warehouse Environments</h2>
            <h4>
              We take a full service approach designed specifically for warehouse environments. Rather than supplying a single machine, we design a refreshment setup around footfall, break schedules, and space constraints. Vending machines, smart fridges, and hot drink solutions are installed, stocked, serviced, and maintained as part of a managed service that operates reliably without adding work for site or operations teams.
            </h4>
          </div>
          <div className="content-image-media">
            <img src={imgChatGPT0916} alt="Warehouse vending solution" />
          </div>
        </div>
      </div>

      {/* ── CONTENT + IMAGE 3 ── */}
      <div className="content-image-wrap" style={{ paddingTop: 0 }}>
        <div className="content-image-flex image-right">
          <div className="content-image-text">
            <h2>Measurable Results</h2>
            <h4>
              The impact of improved access to refreshments is both noticeable and measurable. We use a short set of simple questions, before and after installation, to understand changes in energy levels, alertness, and shift experience. Sites consistently report better sustained energy, improved morale, and teams who feel more supported during physically demanding work.
            </h4>
          </div>
          <div className="content-image-media">
            <img src={imgChatGPT0629} alt="Results" />
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <section id="free-assessment" className="cta-section">
        <div className="cta-grid">
          <div className="cta-content">
            <h1><strong>Book a Free Workplace Assessment Today</strong></h1>
            <p style={{ fontSize: '1.6rem', color: 'rgba(0,0,0,0.55)', marginBottom: 24 }}>No obligation. Clear recommendations based on your workplace and staff numbers.</p>
            {submitted ? (
              <div style={{ padding: '24px 0', textAlign: 'center' }}>
                <p style={{ fontSize: '1.8rem', fontWeight: 600, color: '#1b17ff', marginBottom: 8 }}>Thank you!</p>
                <p style={{ fontSize: '1.5rem', color: 'rgba(0,0,0,0.6)' }}>We'll be in touch within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="New Lead — Free Assessment (Warehouses Page)" />
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
            <img src={imgIMG6282} alt="Warehouse vending" />
          </div>
        </div>
      </section>
    </>
  );
}
