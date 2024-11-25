import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Mikko McMenamin',
  description: 'Senior Software Developer',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} bg-gradient-to-b from-gray-900 to-black text-white min-h-screen`}>{children}</body>
      </html>
  )
}

