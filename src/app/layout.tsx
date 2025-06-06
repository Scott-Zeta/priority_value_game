import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Priority Value Sorting Game',
  description:
    'A fun and interactive activity to help you identify your top 5 personal values through a process of elimination.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen`}
      >
        <Header />
        <div className="min-h-screen flex flex-col bg-gray-100">
          <div className="container max-w-screen-xl mx-auto px-4 pt-6 flex-grow ">
            <main className="flex-grow ">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
