import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import Layout from '../components/Layout';
import '../styles/globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={montserrat.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
