import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import { Header } from '@/components/header'
import { ProviderContextTheme } from '@/contexts/CTheme/contextTheme'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TableNews',
  description: ''
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="m-0 p-0 box-border">
      <body className={roboto.className}>
        <ProviderContextTheme>
          <Header></Header>
          {children}
        </ProviderContextTheme>
      </body>
    </html>
  )
}
