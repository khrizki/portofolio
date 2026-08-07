import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import LayoutClient from './LayoutClient';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portofolio | Khairul Rizky - Developer & Programmer',
  description:
    'Portfolio profesional Khairul Rizky, Developer & Programmer. Spesialis dalam pengembangan web modern dengan teknologi terkini.',
  keywords: [
    'portfolio',
    'web developer',
    'programmer',
    'Khairul Rizky',
    'React',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: 'Khairul Rizky' }],
  openGraph: {
    title: 'Portofolio | Khairul Rizky',
    description: 'Portfolio profesional - Developer & Programmer',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portofolio | Khairul Rizky',
    description: 'Portfolio profesional - Developer & Programmer',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
