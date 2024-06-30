import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ekam Singh Chahal - Full Stack Developer',
  description:
    'Ekam is a Full Stack Developer with a strong affinity for clean design and well-crafted code.',
  icons: {
    icon: '/portfolio.png',
  },
  openGraph: {
    title: 'Ekam Singh Chahal - Full Stack Developer',
    description:
      'Ekam is a Full Stack Developer with a strong affinity for clean design and well-crafted code.',
    url: 'https://web.jayv.tech',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body className="bg-neutral-950">{children}</body>
    </html>
  )
}
