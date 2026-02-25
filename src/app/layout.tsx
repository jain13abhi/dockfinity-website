import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Syne } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-background text-foreground relative selection:bg-brand selection:text-brand-foreground`}>
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
      </body>
    </html>
  );
}
