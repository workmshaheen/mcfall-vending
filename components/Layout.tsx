import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { imgLogo } from '../lib/images';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Offices', href: '/offices' },
  { label: 'Warehouses', href: '/warehouses' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About us', href: '/about-us' },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Announcement Bar ── */}
      <div className="announcement-bar">
        <Link href="/solutions">Explore MCFALL Vending Solutions — Free Workplace Assessment Available</Link>
      </div>

      {/* ── Header ── */}
      <header className="site-header">
        <div className="header-inner">
          {/* Hamburger */}
          <button
            className={`hamburger-btn${menuOpen ? ' hamburger-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          {/* Logo */}
          <Link href="/" className="header-logo">
            <img src={imgLogo} alt="MCFALL Vending Services" />
          </Link>

          {/* Desktop Nav */}
          <nav className="header-nav">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={router.pathname === l.href ? 'active' : ''}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="header-icons">
            <Link href="/contact" className="header-contact-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer Overlay ── */}
      <div className={`drawer-overlay${menuOpen ? ' drawer-overlay--visible' : ''}`} onClick={() => setMenuOpen(false)} />

      {/* ── Mobile Drawer ── */}
      <nav className={`mobile-drawer${menuOpen ? ' mobile-drawer--open' : ''}`}>
        <div className="mobile-drawer-header">
          <Link href="/" className="mobile-drawer-logo" onClick={() => setMenuOpen(false)}>
            <img src={imgLogo} alt="MCFALL Vending Services" />
          </Link>
          <button className="mobile-drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div className="mobile-drawer-links">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={router.pathname === l.href ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="mobile-drawer-footer">
          <Link href="/contact" className="mobile-drawer-cta" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
          <div className="mobile-drawer-contact">
            <p>info@mcfallvending.com</p>
            <p>+44 7470 264909</p>
          </div>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <main id="MainContent">{children}</main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-grid">
            {/* Quick Links */}
            <div className="footer-block">
              <h2>Quick Links</h2>
              <Link href="/contact">Contact Us</Link>
              <a href="#">LinkedIn</a>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
            </div>

            {/* Contact Details */}
            <div className="footer-block">
              <h2>Contact Details</h2>
              <p>Email: info@mcfallvending.com</p>
              <p>Call: +44 7470 264909</p>
              <p>Address: MCFALL Vending Services, Edinburgh Way, Harlow, Essex, CM20 2DA</p>
            </div>

            {/* Company Details */}
            <div className="footer-block">
              <h2>Company Details</h2>
              <p>
                <strong>MCFALL Vending Services</strong><br />
                Registered in England
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <small>
              © 2026, <Link href="/">MCFALL Vending Services</Link>
            </small>
            <Link href="/privacy-policy" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.75)' }}>
              Privacy policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
