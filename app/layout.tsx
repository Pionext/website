import './globals.css'
import type { Metadata } from 'next'
import { Inter, Crimson_Text } from 'next/font/google'
import { Navigation } from './components/navigation'

const inter = Inter({ subsets: ['latin'] })
const crimsonText = Crimson_Text({ 
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
})

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

