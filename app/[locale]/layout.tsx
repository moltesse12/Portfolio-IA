import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";

import Layout from "@/components/layout";
import Footer from "@/components/layout/Footer";
import { routing } from "@/i18n/routing";
import { METADATA } from "@/lib/constants/metadata";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    default: `${METADATA.creator} | Portfolio`,
    template: `%s ${METADATA.exTitle}`,
  },
  description: METADATA.description,
  keywords: METADATA.keyword,
  authors: {
    name: METADATA.creator,
  },
  openGraph: {
    title: `${METADATA.creator} | Portfolio`,
    description: METADATA.description,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const LocaleLayout = async ({ children, params }: LocaleLayoutProps) => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: METADATA.creator,
              description: METADATA.description,
              url: process.env.DOMAIN || "https://portfolio-ia.vercel.app",
              jobTitle: "Etudiant en Data & Intelligence Artificielle",
              knowsAbout: [
                "Data Science",
                "Machine Learning",
                "Intelligence Artificielle",
                "Python",
                "Deep Learning",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white font-sans antialiased dark:bg-neutral-950 dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages} locale={locale}>
            <Layout>
              {children}
            </Layout>
            <Footer locale={locale} />
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
};

export default LocaleLayout;
