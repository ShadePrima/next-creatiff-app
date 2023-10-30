import { Locale, i18n } from '../../i18n-config'
import Header from '@/components/header/Header'
import ContactForm from '@/components/contactForm/ContactForm'
import Footer from '@/components/footer/Footer'
import { getDictionary } from '@/get-dictionary'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import './globals.scss'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(params.lang)

  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Header />
        {children}
        <ContactForm dictionary={dictionary} />
        <Footer dictionary={dictionary} />
      </body>
    </html>
  )
}

export const metadata = {
  title: 'CREATIFF - REALIZAMOS IDEAS',
  description: 'CREATIFF',
}
