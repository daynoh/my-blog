import type { Metadata } from "next";
import { Inter,Manrope } from "next/font/google";
import "./globals.css";
import { cx } from "./utils";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { siteMetadata } from "./utils/site-metadata";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], display: 'swap', variable: "--font-in" });
const manrope = Manrope({ subsets: ["latin"],display: 'swap', variable: "--font-mr" });
export const metadata: Metadata = {
  title: {
    template: `%s | ${siteMetadata.siteUrl}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      {
        url: siteMetadata.socialBanner, // Must be an absolute URL
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    images: siteMetadata.socialBanner, // Must be an absolute URL
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      className = {cx(inter.variable, manrope.variable, "font-mr bg-light dark:bg-dark")}
      >

        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
