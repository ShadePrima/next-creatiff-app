import { i18n } from '../../i18n-config'

import './globals.scss'
import { Inter } from 'next/font/google'

import Header from '@/components/header/Header'
import ContactForm from '@/components/contactForm/ContactForm'
import Footer from '@/components/footer/Footer'
import LocaleSwitcher from '../components/locale-switcher'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CREATIFF - REALIZAMOS IDEAS',
  description: 'CREATIFF',
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <div style={{ padding: '10px', marginLeft: '100px' }}>
          <LocaleSwitcher />
        </div>
        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
