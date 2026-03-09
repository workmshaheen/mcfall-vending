import { useState } from 'react';
import Head from 'next/head';
import {
  imgMediacityLogo, imgIMG6449, imgMediacitySmart,
  imgChatGPT1002, imgChatGPT0916, imgMerchant4,
  imgChatGPT0959, imgIMG4618, imgChatGPT1004, imgPropStock,
  imgIMG4020, imgSquareBavmax, imgPropcallLogo,
} from '../lib/images';

interface CaseStudy {
  id: string;
  logo: string;
  logoAlt: string;
  title: string;
  subtitle: string;
  images: string[];
  sections: { heading: string; body: string }[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'mediacity',
    logo: imgMediacityLogo,
    logoAlt: 'MediaCity',
    title: 'Smart Fridges Across a 1,000 Person Office',
    subtitle: 'MediaCity, Harlow',
    images: [imgMediacitySmart, imgIMG6449],
    sections: [
      {
        heading: 'What the Facilities Team Said',
        body: `Feedback from the MediaCity facilities team highlights that "the variety of items means that everyone can find something," with tenants particularly liking that "we have options such as porridge and pot noodles, as this allows people who work non-conventional hours the option of something warm and more sustaining," as well as "the cereal and energy bar selection." The solution has also been well received in terms of usability and design, with feedback noting that "the fridge door provides ease and eliminates any issues with items getting stuck," and that "tenants seem to like the style of the vending machine and enjoy the options." The team confirmed they would "definitely recommend it as it's a good solution with excellent customer service."`,
      },
      {
        heading: 'The Brief',
        body: `This project involved the installation of three AI Smart Fridge Pro units across MediaCity, located in the heart of Harlow, Essex. With over 1,000 staff working across the site, the client was looking for a modern refreshment solution that could serve large volumes of people while fitting seamlessly into a premium, design-led workspace. Each smart fridge was stocked with a wide range of products, including crisps, cold drinks, juices, chocolate bars, protein bars, cereal bars, porridge pots, and noodle pots. The AI technology allows users to simply scan their card, open the fridge, take what they need, and walk away. The system automatically identifies the products removed and charges the card accordingly, with all pricing clearly displayed on the screen.`,
      },
      {
        heading: 'The Outcome',
        body: `The solution delivered immediate benefits across the site. Staff gained quick, reliable access to refreshments throughout the day, supporting energy levels and morale across a large and busy office environment. The smart fridges added visible value to shared spaces, reduced friction around food access, and aligned strongly with the modern expectations of a high-profile workplace like MediaCity. Beyond functionality, the installation complemented the premium look and feel the client wanted to achieve. The smart fridges supported the client's sustainability goals through reduced waste and smarter stock control, and enhanced the overall workplace experience.`,
      },
    ],
  },
  {
    id: 'woodlands',
    logo: imgChatGPT1002,
    logoAlt: 'Woodlands Warehouse',
    title: 'Warehouse Vending Solution at Woodlands',
    subtitle: 'Woodlands Warehouse',
    images: [imgMerchant4, imgChatGPT0916],
    sections: [
      {
        heading: 'Client Feedback',
        body: `"We have recently installed our first vending machine on the new site, long overdue. We chose MCFALL Vending Services, a local business that gives back. They return a portion of sales to be spent on our employees, and also donate to our chosen charity. They have been great to work with, and the machine has already proven very popular with the team."`,
      },
      {
        heading: 'The Brief',
        body: `Woodlands Warehouse required a vending solution that could serve a large team across multiple shifts, including early mornings and late evenings when external food options are unavailable. The brief was to provide a fully stocked, maintained machine that required no management time from the site team, while also contributing something back to the workforce and a local cause.`,
      },
      {
        heading: 'The Outcome',
        body: `A Merchant Media vending machine was installed and stocked with a curated range of snacks, drinks, and hot food options suited to warehouse workers across all shifts. The machine is monitored and restocked by the MCFALL team, with zero involvement required from site management. A portion of sales is returned to the client to spend on employee welfare, and a donation is made to their chosen charity — adding social value beyond the practical benefits of the installation.`,
      },
    ],
  },
  {
    id: 'propcall',
    logo: imgPropcallLogo,
    logoAlt: 'PropCall',
    title: 'Office Vending at PropCall',
    subtitle: 'PropCall, Harlow',
    images: [imgPropStock, imgIMG4020],
    sections: [
      {
        heading: 'Client Feedback',
        body: `"The vending machine has been a huge hit at PropCall. Seamless service, flexible product selection, and a welcome boost to our social budget. MCFALL Vending Services have been great to work with and the ongoing support has been seamless."`,
      },
      {
        heading: 'The Brief',
        body: `PropCall, a growing business based in Harlow, wanted to improve the in-office experience for their team. With a busy schedule and limited time to leave the office, staff were looking for convenient access to snacks and drinks throughout the day. The client also wanted a solution that could contribute back to their social budget, supporting team activities and events.`,
      },
      {
        heading: 'The Outcome',
        body: `A fully stocked vending machine was installed in PropCall's Harlow office, providing the team with reliable access to a wide range of products. The social budget contribution has been well received, adding tangible value for the team beyond the convenience of the machine itself. The solution has required no management time and has received consistently positive feedback from staff.`,
      },
    ],
  },
  {
    id: 'merchant4',
    logo: imgChatGPT1004,
    logoAlt: 'Merchant',
    title: 'Multi-Site Vending Rollout',
    subtitle: 'Large Distribution Centre',
    images: [imgIMG4618, imgChatGPT0959],
    sections: [
      {
        heading: 'The Brief',
        body: `A large distribution centre operating across multiple shifts and sites required a standardised vending solution that could be rolled out consistently, monitored centrally, and managed without placing any burden on site operations teams. The priority was reliability, range, and 24/7 availability.`,
      },
      {
        heading: 'The Outcome',
        body: `Multiple Merchant Media machines were deployed across the sites, each stocked with a tailored selection based on local preferences and shift patterns. Real-time monitoring allows the MCFALL team to track stock levels and respond proactively, ensuring machines are always well stocked and operational. The rollout was completed on schedule with minimal disruption to site operations.`,
      },
    ],
  },
];

function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`case-study-item${open ? ' case-study-item--open' : ''}`}>
      <div className="case-study-header" onClick={() => setOpen(!open)} role="button" tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}>
        <div className="case-study-logo">
          <img src={cs.logo} alt={cs.logoAlt} />
        </div>
        <div style={{ flex: 1 }}>
          <h3 className="case-study-title">{cs.title}</h3>
          <p className="case-study-subtitle">{cs.subtitle}</p>
        </div>
        <svg
          className={`case-study-chevron${open ? ' open' : ''}`}
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" width={20} height={20}
        >
          <path fill="currentColor" d="M14.16 6.5 9 11.66 3.84 6.5l-.69.69L9 13.03l5.85-5.84-.69-.69Z" />
        </svg>
      </div>

      {open && (
        <div className="case-study-expanded">
          {/* Images */}
          <div className="case-study-images">
            {cs.images.map((src, i) => (
              <img key={i} src={src} alt="" />
            ))}
          </div>
          {/* Sections */}
          {cs.sections.map((s) => (
            <div key={s.heading} className="case-study-section">
              <h4>{s.heading}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies — MCFALL Vending Services</title>
        <meta name="description" content="Real client case studies showing how MCFALL Vending Services solutions are designed, installed, and managed across different workplaces." />
      </Head>

      {/* ── HEADING ── */}
      <section className="case-studies-hero">
        <div className="case-studies-hero-inner">
          <div className="bubble-label" style={{ marginBottom: 20 }}>Case Studies</div>
          <h1>Real MCFALL Client Case Studies</h1>
          <p>
            A curated selection of real client case studies, showcasing how MCFALL vending solutions are designed, installed, and managed across different workplaces.
          </p>
        </div>
      </section>

      {/* ── ACCORDION ── */}
      <section className="case-studies-list">
        {CASE_STUDIES.map((cs) => (
          <CaseStudyCard key={cs.id} cs={cs} />
        ))}
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="case-studies-cta">
        <div className="case-studies-cta-inner">
          <h2>Ready to be MCFALL's next success story?</h2>
          <p>
            Book a free MCFALL workplace assessment and we'll design a solution tailored to your environment.
          </p>
          <a href="/" className="btn-green" style={{ background: '#fff', color: '#1b17ff', marginTop: 8 }}>
            Book Free Assessment
          </a>
        </div>
      </section>
    </>
  );
}
