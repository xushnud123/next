import type { ReactElement, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import "@/components/navbar.css";
import "@/styles/globals.css";
// import "@/styles/layout.css";
import Navbar from "@/components/navbar";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <div>
      <SessionProvider session={pageProps.session}>
        {/* <Header /> */}
        <Navbar />
        <div className='container'>
          <Component {...pageProps} />
        </div>
        {/* <Footer /> */}
      </SessionProvider>
    </div>
  );
}
