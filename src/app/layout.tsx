import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Syne } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Seeds the theme localStorage key from the visitor's local clock before
// next-themes' own script runs, so a first-time visitor (no stored
// preference yet) gets dark ~7pm-7am and light otherwise — the manual
// toggle still always wins from that point on, exactly like it already
// overrides the OS-preference default. Never touches an existing choice.
const THEME_TIME_SEED_SCRIPT = `
(function () {
  try {
    if (localStorage.getItem('theme')) return;
    var hour = new Date().getHours();
    var isNight = hour >= 19 || hour < 7;
    localStorage.setItem('theme', isNight ? 'dark' : 'light');
  } catch (e) {}
})();
`;

// Display / Heading Font — Syne (bold, distinctive, modern)
const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

// Body Font — Inter (clean, readable)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Mono Font — JetBrains Mono (labels, code, badges)
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Dockfinity Private Limited',
    default: 'Dockfinity — Building Tomorrow\'s Enterprise',
  },
  description: 'Dockfinity Private Limited is a technology-first holding company engineering the next generation of SaaS, financial intelligence, and corporate experiences.',
  metadataBase: new URL('https://dockfinity.com'),
  keywords: ['Dockfinity', 'holding company', 'SaaS', 'enterprise software', 'corporate gifting', 'financial education', 'India startup'],
  openGraph: {
    title: 'Dockfinity Private Limited',
    description: 'Building Tomorrow\'s Enterprise — SaaS, Financial Intelligence & Corporate Experiences.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f7f4' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Dockfinity Private Limited',
  legalName: 'Dockfinity Private Limited',
  url: 'https://dockfinity.com',
  logo: 'https://dockfinity.com/logo-mark-navy.png',
  identifier: [
    { '@type': 'PropertyValue', name: 'CIN', value: 'U66190DL2025PTC454662' },
    { '@type': 'PropertyValue', name: 'GSTIN', value: '07AAMCD0054C1Z3' },
    { '@type': 'PropertyValue', name: 'UDYAM', value: 'UDYAM-DL-06-0174779' },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-99117-21100',
      email: 'dockfinity@gmail.com',
      contactType: 'customer service',
      areaServed: 'IN',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
      </head>
      <body className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-background text-foreground relative selection:bg-brand selection:text-brand-foreground`}>
        <Script id="theme-time-seed" strategy="beforeInteractive">
          {THEME_TIME_SEED_SCRIPT}
        </Script>

        {/* Global noise texture */}
        <div className="fixed inset-0 z-[-1] bg-noise-subtle mix-blend-overlay pointer-events-none" aria-hidden="true" />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
