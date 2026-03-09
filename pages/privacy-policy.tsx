import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — MCFALL Vending Services</title>
        <meta name="description" content="Privacy Policy for MCFALL Vending Services Limited. How we collect, use, and protect your personal data." />
        <link rel="canonical" href="https://www.mcfallvending.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy — MCFALL Vending Services" />
        <meta property="og:description" content="Privacy Policy for MCFALL Vending Services Limited." />
        <meta property="og:url" content="https://www.mcfallvending.com/privacy-policy" />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="privacy-page">
        <h1>Privacy Policy</h1>
        <p className="privacy-updated">Last updated: January 2026</p>

        {[
          {
            heading: '1. Who We Are',
            body: `MCFALL Vending Services Limited ("we", "our", "us") is a company registered in England and Wales (Company No. 16047692) with a registered office at Edinburgh Way, Harlow, Essex, CM20 2DA. We operate the website mcfallvending.com and provide fully managed vending, coffee, and smart fridge solutions to workplaces across the UK.`,
          },
          {
            heading: '2. What Information We Collect',
            body: `We may collect the following personal data when you interact with our website or services:\n\n• Name, email address, phone number, and company/workplace details when you complete an enquiry or assessment booking form.\n• Technical data including IP address, browser type, and pages visited when you browse our website.\n• Communication records if you contact us by phone, email, or social media.`,
          },
          {
            heading: '3. How We Use Your Information',
            body: `We use the personal data we collect to:\n\n• Respond to enquiries and arrange free workplace assessments.\n• Provide and manage the vending services you have requested.\n• Send occasional updates about our products and services, where you have agreed to receive them.\n• Improve our website and services based on how visitors use them.\n• Comply with legal and regulatory obligations.`,
          },
          {
            heading: '4. Legal Basis for Processing',
            body: `We process your personal data on the following legal bases:\n\n• Legitimate interests: to respond to enquiries and manage client relationships.\n• Contract performance: to deliver the services you have requested.\n• Consent: for marketing communications, where you have opted in.\n• Legal obligation: where we are required to comply with applicable laws.`,
          },
          {
            heading: '5. How We Share Your Information',
            body: `We do not sell your personal data. We may share your information with trusted third parties who help us operate our business, such as website hosting providers, CRM software, and email platforms. These parties are contractually required to handle your data securely and only for the purposes we specify. We may also disclose data where required by law or to protect our rights.`,
          },
          {
            heading: '6. Data Retention',
            body: `We retain personal data only for as long as necessary for the purposes for which it was collected, or as required by law. Enquiry and client data is typically retained for up to 6 years from the end of our business relationship. Website analytics data is retained in aggregated form.`,
          },
          {
            heading: '7. Your Rights',
            body: `Under UK GDPR, you have the right to:\n\n• Access the personal data we hold about you.\n• Request correction of inaccurate data.\n• Request deletion of your personal data (subject to legal obligations).\n• Object to or restrict our processing of your data.\n• Withdraw consent at any time, where processing is based on consent.\n• Lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.\n\nTo exercise any of these rights, please contact us at info@mcfallvending.com.`,
          },
          {
            heading: '8. Cookies',
            body: `Our website uses cookies to improve your browsing experience and to analyse how visitors use the site. These may include essential cookies required for the site to function, and analytics cookies (such as Google Analytics). You can manage cookie preferences through your browser settings. By continuing to use our website, you consent to our use of cookies as described.`,
          },
          {
            heading: '9. Security',
            body: `We take appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.`,
          },
          {
            heading: '10. Changes to This Policy',
            body: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated version will be posted on this page with a revised date. We encourage you to review this page periodically.`,
          },
          {
            heading: '11. Contact Us',
            body: `If you have any questions about this Privacy Policy or how we handle your personal data, please contact us:\n\nMCFALL Vending Services Limited\nEdinburgh Way\nHarlow, Essex, CM20 2DA\n\nEmail: info@mcfallvending.com\nPhone: +44 7470 264909`,
          },
        ].map((s) => (
          <div key={s.heading} className="privacy-section">
            <h2>{s.heading}</h2>
            {s.body.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
