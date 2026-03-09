import { useState } from 'react';
import Head from 'next/head';
import { imgIMG6999, imgVending2 } from '../lib/images';
import { imgLogo } from '../lib/images';

export default function AboutUs() {
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
        <title>About Us — MCFALL Vending Services</title>
        <meta name="description" content="Learn about MCFALL Vending Services — founded in Harlow, built to improve workplaces across the UK." />
      </Head>

      {/* ── ABOUT HERO ── */}
      <section className="about-hero-section">
        <div className="about-hero-inner">
          <h1>About Us</h1>
          <div className="about-hero-text">
            <p>
              MCFALL Vending Services was founded after years of experience working inside offices and warehouses across the country. Seeing first hand how often teams lacked convenient food and drink options and how frequently staff were leaving the workplace during the day, we set out to build a better workplace solution.
            </p>
            <p>
              What began as a simple idea in Harlow has quickly grown into a modern people focused vending business. MCFALL Vending Services works with offices and warehouses to provide modern vending, coffee, and smart fridge solutions that support productivity throughout the working day.
            </p>
            <p>
              By giving teams reliable access to quality food and drinks, we help maintain energy levels, improve morale, and create a more comfortable and well supported workplace environment. Every solution is designed around the space and the people using it, with installation, restocking, maintenance, and ongoing support fully managed by our team.
            </p>
          </div>
          <div className="about-hero-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39614.26!2d0.0577!3d51.7672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a3c7b5b8c8c7%3A0x4a3a89c40b6c2e0!2sHarlow%2C%20UK!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MCFALL Vending Services - Harlow, England"
            />
          </div>
        </div>
      </section>

      {/* ── FREE ASSESSMENT CTA BOX ── */}
      <section className="about-assessment-section">
        <div className="about-assessment-inner">
          <h2>Book a Free Workplace Assessment Today</h2>
          <p>
            If you are considering a vending solution for your workplace, we offer a free workplace assessment with no obligation. We will visit your office or warehouse to understand your space, footfall, and team preferences, then recommend a bespoke solution tailored to your team.
          </p>
          {submitted ? (
            <div className="about-assessment-success">
              <p className="about-assessment-success-title">Thank you!</p>
              <p className="about-assessment-success-body">We'll be in touch within 1 business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Lead — Free Assessment (About Us Page)" />
              <input type="hidden" name="_template" value="table" />
              <div className="about-assessment-fields">
                <input className="input-gray" type="text" name="staff" placeholder="Approximate number of staff" required />
                <input className="input-gray" type="email" name="email" placeholder="Work email address" required />
                <button type="submit" className="btn-green-rounded">Book Free Assessment</button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── OUR MISSION ── */}
      <div className="content-image-wrap">
        <div className="content-image-flex image-right">
          <div className="content-image-text">
            <h2>Our Mission</h2>
            <h4>
              Since launching, MCFALL Vending Services has grown quickly in a short space of time, with machines now placed across the UK. We have secured major client wins across large warehouses, office hubs, and high footfall locations across the South East and beyond.
            </h4>
            <h4 style={{ marginTop: 16 }}>
              With the average person spending around one third of their adult life at work, we believe workplace amenities matter more than ever. While we are proud to support large scale environments, our core focus remains on offices and warehouses where a reliable and well managed vending solution can make the biggest day to day impact.
            </h4>
            <h4 style={{ marginTop: 16 }}>
              Having worked in high-pressure workplaces with long working hours, our aim is to improve the everyday experience for people at work. Based in Harlow, Essex, we help businesses provide easy access to food and drink on site, improving morale, reducing time away from the workplace, and supporting productivity throughout the day.
            </h4>
          </div>
          <div className="content-image-media">
            <img src={imgIMG6999} alt="Vending machine" />
          </div>
        </div>
      </div>

      {/* ── WAREHOUSE FOCUS ── */}
      <div className="content-image-wrap" style={{ paddingTop: 0 }}>
        <div className="content-image-flex">
          <div className="content-image-text">
            <h2>Built for the Workplace</h2>
            <h4>
              In warehouse environments especially, small conveniences can have an outsized impact. The average warehouse worker can walk several miles per shift and burn hundreds of calories during a working day, often in physically demanding conditions.
            </h4>
            <h4 style={{ marginTop: 16 }}>
              Our machines are available 24 hours a day, 7 days a week, all year round, ensuring teams always have access to food and drinks across every shift. That is why we use high-quality vending machines and technology from leading suppliers, including modern card readers, touchscreen basket technology, and real-time stock monitoring.
            </h4>
          </div>
          <div className="content-image-media">
            <img src={imgVending2} alt="Vending machine installation" />
          </div>
        </div>
      </div>

      {/* ── LOGO / BRAND SECTION ── */}
      <section className="about-brand-section">
        <div className="about-brand-inner">
          <div className="about-brand-logo">
            <img src={imgLogo} alt="MCFALL Vending Services" />
          </div>
          <p>Based in Harlow, Essex. Serving offices and warehouses across the UK.</p>
          <div className="about-brand-line" />
        </div>
      </section>
    </>
  );
}
