import React, { useState } from 'react';
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

  return (
    <>
      {/* ── Announcement Bar ── */}
      <div className="announcement-bar">
        <Link href="/solutions">Explore Our Vending Solutions</Link>
      </div>

      {/* ── Header ── */}
      <header className="site-header">
        <div className="header-inner">
          {/* Hamburger */}
          <button
            className="hamburger-btn"
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

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            {NAV_LINKS.map((l) => (
              <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </header>

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
                <strong>MCFALL Vending Services Limited</strong><br />
                Registered in England and Wales | Company No. 16047692 | VAT Registration No. 493 9775 19
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
