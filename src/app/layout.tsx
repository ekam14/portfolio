import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jay Vekariya - Full Stack Developer',
  description:
    'Jay Vekariya is a Full Stack Developer with a strong affinity for clean design and well-crafted code.',
  openGraph: {
    title: 'Jay Vekariya - Full Stack Developer',
    description:
      'Jay Vekariya is a Full Stack Developer with a strong affinity for clean design and well-crafted code.',
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
