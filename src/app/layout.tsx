import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SocialLinks from '../components/SocialLinks'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Affiliate Marketing Site - De Beste Producten',
  description: 'Ontdek geweldige producten, speciaal voor jou geselecteerd',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <SocialLinks />
        {children}
      </body>
    </html>
  )
} 