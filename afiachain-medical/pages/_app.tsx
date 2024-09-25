// pages/_app.tsx
import '../styles/globals.css'; // Assurez-vous que le chemin est correct
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
