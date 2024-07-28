import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignUp
} from '@clerk/nextjs'
import Authentication from "./components/Authentication";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rush Solutions",
  description: "Developed By Rush Developers",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey="pk_test_bmV4dC1zdHVyZ2Vvbi01MC5jbGVyay5hY2NvdW50cy5kZXYk">
    <html lang="en" className="bg-black text-white">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-00VV2N25KV"></Script>
        <Script id="google-analytics">
        {`  
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-00VV2N25KV');
        `}
        </Script>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
            rel="stylesheet"
          />
      </head>
      <body className={inter.className} >
        <SignedOut>
          <Authentication/>
        </SignedOut>
        <SignedIn>
          <Navbar />
          {children}
          <Footer/>
        </SignedIn>
      </body>
    </html>
    </ClerkProvider>
  );
}
