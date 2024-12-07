import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import { Metadata } from 'next';
import ScrollToTop from '@/components/ScrollToTop';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mikko McMenamin',
  description: 'Senior Software Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
          <title>Mikko McMenamin</title>
      </head>
      <body
        className={`${spaceGrotesk.className} overflow-x-hidden bg-gradient-to-b from-black from-5% via-gray-950 via-40% to-black text-white`}
      >
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
