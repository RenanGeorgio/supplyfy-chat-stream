import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react'
import { FC, useEffect } from 'react';
import { SocketProvider } from '@contexts/socketcontext';
import { AuthProvider } from '@contexts/AuthContext';

import 'tailwindcss/tailwind.css';
import '@styles/globals.css';

const Main: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;

  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <SocketProvider>
      <Analytics />
      <AnyComponent {...pageProps} />
    </SocketProvider>
    //<AuthProvider>
    //  <AnyComponent {...pageProps} />
    //<Analytics />
    //</AuthProvider>
  )
}

export default Main