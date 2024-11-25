import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mikko McMenamin | Quantum Code Architect',
  description: 'Portfolio of Mikko McMenamin, a visionary quantum code architect shaping the future of technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-b from-gray-900 to-black text-white min-h-screen`}>{children}</body>
    </html>
  )
}

