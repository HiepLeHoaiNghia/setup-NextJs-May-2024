import '~/app/globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: 'Learning Next js',
  description: 'Learning Next js with Tailwind CSS and TypeScript'
}

const sansitaLocal = localFont({
  src: [
    { path: 'fonts/Sansita/Sansita-Regular.ttf', weight: '400' },
    { path: 'fonts/Sansita/Sansita-Bold.ttf', weight: '700' }
  ],
  display: 'swap',
  variable: '--font-sansita'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={sansitaLocal.variable}>
        <header>Root Layout</header>
        {children}
      </body>
    </html>
  )
}
