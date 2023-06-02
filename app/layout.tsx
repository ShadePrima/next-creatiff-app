import Header from '@/components/header/Header'
import './globals.scss'
import { Inter } from 'next/font/google'
import ContactForm from '@/components/contactForm/ContactForm'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CREATIFF - REALIZAMOS IDEAS',
  description: 'CREATIFF',
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
