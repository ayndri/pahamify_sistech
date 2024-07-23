import type { AppProps } from 'next/app'
import './global.css';
import { Poppins } from '@next/font/google';

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

function MyApp({ Component, pageProps }: any) {
  return (
    <div className={poppins.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;