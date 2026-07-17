import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/components/common/Navbar";
import Analytics from "@/components/analytics/Analytics";
import Footer from "@/components/layout/Footer";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
} from "@/components/seo/StructuredData";
import { getSiteUrl, isVercelProduction } from "@/lib/site";

const GA_MEASUREMENT_ID = "G-YMEB4WNX7G";
const ADSENSE_CLIENT_ID = "ca-pub-2098848132009421";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Scholarships Central",
    template: "%s | Scholarships Central",
  },
  description: "Find fully funded scholarships worldwide.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/logo-mark.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: "Scholarships Central",
    title: "Scholarships Central",
    description: "Find fully funded scholarships worldwide.",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Scholarships Central — Find scholarships worldwide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scholarships Central",
    description: "Find fully funded scholarships worldwide.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isProd = isVercelProduction();

  return (
    <html lang="en">
      <head>
        {isProd ? (
          <>
            {/* Google AdSense site ownership verification (production only) */}
            <script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
              crossOrigin="anonymous"
            />

            {/* Google Analytics (production only) */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>

            {/* Monetag In-Page Push banner (production only) */}
            <Script id="monetag-in-page-push" strategy="afterInteractive">
              {`(function(s){s.dataset.zone='11233241',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`}
            </Script>
          </>
        ) : null}
      </head>

      <body className="min-h-screen bg-gray-50 text-gray-900 flex flex-col overflow-x-clip">
        <OrganizationJsonLd />
        <WebSiteJsonLd />

        {isProd ? <Analytics measurementId={GA_MEASUREMENT_ID} /> : null}

        {/* GLOBAL NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="mx-auto w-full min-w-0 max-w-6xl flex-1 overflow-x-hidden px-4 py-6">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
