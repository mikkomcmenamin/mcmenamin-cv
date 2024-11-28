import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import { Metadata } from 'next';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mikko McMenamin',
  description: 'Senior Software Developer',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body
        className={`${spaceGrotesk.className} bg-gradient-to-b from-black from-5% via-gray-950 via-40% to-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
