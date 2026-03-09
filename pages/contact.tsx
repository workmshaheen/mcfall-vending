import { useState } from 'react';
import Head from 'next/head';

export default function Contact() {
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
      window.location.href = `mailto:info@mcfallvending.com?subject=Contact Form Submission&body=Name: ${data.get('name')}%0AEmail: ${data.get('email')}%0ACompany: ${data.get('company')}%0AStaff: ${data.get('staff')}%0AMessage: ${data.get('message')}`;
    }
  }

  return (
    <>
      <Head>
        <title>Contact Us — MCFALL Vending Services</title>
        <meta name="description" content="Get in touch with MCFALL Vending Services for enquiries, support, or to book a free workplace assessment." />
      </Head>

      {/* ── PAGE HEADER ── */}
      <section className="contact-page-header">
        <h1>Contact Us</h1>
        <p>
          If you're experiencing any issues when purchasing from one of our vending machines, or if you'd like to speak with a member of our team regarding an enquiry or a technical matter, please don't hesitate to get in touch. We'll be happy to assist you as quickly as possible.
        </p>
      </section>

      <div className="contact-grid">
        {/* ── LEFT: Contact Info ── */}
        <div className="contact-info">
          <div className="contact-cards-group">
            <div className="contact-card">
              <span className="contact-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </span>
              <div>
                <strong>Phone</strong>
                <span><a href="tel:+447470264909">+44 7470 264909</a></span>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </span>
              <div>
                <strong>Email</strong>
                <span><a href="mailto:info@mcfallvending.com">info@mcfallvending.com</a></span>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </span>
              <div>
                <strong>Address</strong>
                <span>MCFALL Vending Services, Edinburgh Way, Harlow, Essex, CM20 2DA</span>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <div>
                <strong>Business Hours</strong>
                <span>Monday – Friday, 9:00am – 5:30pm</span>
              </div>
            </div>
          </div>

          <div className="contact-social-section">
            <h3>Social Media</h3>
            <p>
              Alternatively, you can reach out to us through our social media channels. Follow us to stay updated with our latest news, special offers, and a behind-the-scenes look at what we do.
            </p>
            <div className="contact-social-links">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Instagram
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
            </div>
          </div>

        </div>

        {/* ── RIGHT: Contact Form ── */}
        <div className="contact-form-box">
          {submitted ? (
            <div className="contact-success">
              <div className="contact-success-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h2>Message Sent!</h2>
              <p>Thank you for getting in touch. We'll respond within 1 business day.</p>
            </div>
          ) : (
            <>
              <h2>Send us a message</h2>
              <p className="contact-form-subtitle">Fill in the form below and we'll get back to you promptly.</p>
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="New Contact Form Submission" />
                <input type="hidden" name="_template" value="table" />
                <div className="form-field">
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder="Your name" required />
                </div>
                <div className="form-field">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="your@email.com" required />
                </div>
                <div className="form-field">
                  <label>Company / Workplace</label>
                  <input type="text" name="company" placeholder="Company name" />
                </div>
                <div className="form-field">
                  <label>Approximate Number of Staff</label>
                  <select name="staff">
                    <option value="">Select range</option>
                    <option>1–25</option>
                    <option>25–50</option>
                    <option>50–100</option>
                    <option>100–250</option>
                    <option>250–500</option>
                    <option>500+</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your workplace or enquiry..."
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className="btn-green contact-submit-btn">
                  Send Message
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* ── BOTTOM BANNER ── */}
      <section className="contact-banner">
        <div className="contact-banner-inner">
          <h2>Based in Harlow, Essex</h2>
          <p>Serving offices and warehouses across the UK</p>
          <div className="contact-banner-line" />
        </div>
      </section>
    </>
  );
}
