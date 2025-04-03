import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

declare global {
  interface Window {
    wpSettings: {
      apiUrl: string;
      nonce: string;
    };
  }
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log('Next.js App mounted');
    console.log('wpSettings:', window.wpSettings);
  }, []);

  return <Component {...pageProps} />;
}
