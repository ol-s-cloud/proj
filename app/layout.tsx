import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RWA.defi - Real World Assets DeFi Platform',
  description: 'Trade, stake, and invest in tokenized real-world assets including renewable energy, carbon credits, and green bonds.',
  keywords: 'RWA, DeFi, Real World Assets, Tokenization, Renewable Energy, Carbon Credits, Green Finance',
  authors: [{ name: 'RWA.defi Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' }
  ],
  openGraph: {
    title: 'RWA.defi - Real World Assets DeFi Platform',
    description: 'Trade, stake, and invest in tokenized real-world assets',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RWA.defi - Real World Assets DeFi Platform',
    description: 'Trade, stake, and invest in tokenized real-world assets',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}