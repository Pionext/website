import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from './components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Product Name',
  description: 'A simple and elegant product website',
} satisfies Metadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

