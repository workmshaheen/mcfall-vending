import { useState } from 'react';
import Head from 'next/head';
import { imgNickFewings, imgIMG4020, imgOfficeNight, imgIMG6999 } from '../lib/images';

export default function Offices() {
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
        <title>Offices — MCFALL Vending Services</title>
        <meta name="description" content="Fully managed vending solutions designed specifically for office environments." />
      </Head>

      {/* ── BANNER ── */}
      <div className="page-banner">
        <img src={imgNickFewings} alt="Office environment" />
        <div className="page-banner-text">
          <h1>A Smarter Way to Support Office Productivity</h1>
        </div>
      </div>

      {/* ── TWO-COL INTRO ── */}
      <div className="two-col-text">
        <div>
          <p>
            Productivity in an office is shaped by how supported people feel throughout the working day. Long periods of screen time, meetings, and focused work place real demands on energy and concentration. When food, drinks, and quality coffee are readily available within the office, employees are better able to sustain focus and maintain consistent energy levels across the day.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
            <a href="#free-assessment" className="btn-green">Book a free workplace assessment</a>
          </div>
        </div>
        <div>
          <p>
            Reliable access to refreshments plays an important role in reducing energy dips, particularly in the afternoon. Office teams can refuel at the right moments, without needing to plan ahead or rely on limited options. This supports steadier concentration during meetings, collaborative work, and individual tasks that require attention and accuracy.
          </p>
          <p>
            Office productivity is also influenced by the overall feel of the workplace. A well considered refreshment setup makes the office more comfortable and welcoming, which directly affects morale. Providing vending machines, smart fridges, or coffee solutions shows employees that their day to day experience has been thought about, helping people feel valued and supported by their employer.
          </p>
        </div>
      </div>

      {/* ── CONTENT + IMAGE ── */}
      <div className="content-image-wrap">
        <div className="content-image-flex">
          <div className="content-image-text">
            <h2>24/7 Access for Flexible Workplaces</h2>
            <h4>
              Access to food and drinks at all times is especially important in office environments, where working patterns are increasingly flexible. Early starts, late finishes, hybrid schedules, and varied team hours are now the norm. Having refreshments available twenty-four hours a day ensures everyone has the same level of support, regardless of when they are in the office.
            </h4>
          </div>
          <div className="content-image-media">
            <img src={imgOfficeNight} alt="Office at night" />
          </div>
        </div>
      </div>

      {/* ── CONTENT + IMAGE 2 ── */}
      <div className="content-image-wrap" style={{ paddingTop: 0 }}>
        <div className="content-image-flex image-right">
          <div className="content-image-text">
            <h2>A Tailored Full-Service Approach</h2>
            <h4>
              We take a full service approach tailored specifically to offices. Rather than supplying a single machine, we design a refreshment setup that fits your space, your team size, and how the office is used. Vending machines, smart fridges, and coffee solutions are combined with full restocking, servicing, and maintenance, so the setup works reliably without creating extra tasks for office managers.
            </h4>
          </div>
          <div className="content-image-media">
            <img src={imgIMG4020} alt="Office vending setup" />
          </div>
        </div>
      </div>

      {/* ── IMPACT SECTION ── */}
      <section style={{ background: '#fafafa', padding: '60px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            {[
              { stat: '78%', label: 'of employees feel more valued when food and drink is provided at work' },
              { stat: '60%+', label: 'report improved energy and productivity with on-site refreshments' },
              { stat: '20–25%', label: 'lower staff turnover in workplaces with engaged, supported teams' },
            ].map((s) => (
              <div key={s.stat} style={{ textAlign: 'center', padding: '32px 20px', background: '#fff', borderRadius: 12, border: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '5rem', fontWeight: 700, color: '#1b17ff', letterSpacing: '-0.03em', marginBottom: 8 }}>{s.stat}</div>
                <p style={{ fontSize: '1.5rem', color: 'rgba(0,0,0,0.55)', lineHeight: 1.5 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT + IMAGE 3 ── */}
      <div className="content-image-wrap">
        <div className="content-image-flex">
          <div className="content-image-text">
            <h2>Measurable Impact</h2>
            <h4>
              The impact of these improvements is both noticeable and measurable. We use a short set of simple questions, before and after installation, to understand changes in energy levels, morale, and perceived productivity. Offices consistently report a more positive working environment, better focus, and improved morale.
            </h4>
          </div>
          <div className="content-image-media">
            <img src={imgIMG6999} alt="Vending machine in office" />
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
                <input type="hidden" name="_subject" value="New Lead — Free Assessment (Offices Page)" />
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
            <img src={imgIMG4020} alt="Office vending installation" />
          </div>
        </div>
      </section>
    </>
  );
}
