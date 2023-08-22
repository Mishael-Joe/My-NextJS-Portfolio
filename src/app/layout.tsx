import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mishael Joseph Etukudo | Web Developer',
  description: 'Get a creative web developer like Mishael Joseph to handle your next website project. See his projects',
  keywords: "Frontend Developer, Web Developer, Website Design, Web Development, professional Website, Mishael, Mishael Etukudo, Mishael Joseph, Mishael Joseph Etukudo",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
