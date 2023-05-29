import Image from 'next/image'
import styles from './page.module.scss'
import Company from '@/components/company/Company'
import InfoCardBlock from '@/components/infoCardBlock/InfoCardBlock'
import Partners from '@/components/partners/Partners'
import Services from '@/components/services/Services'
import ContactBlock from '@/components/contactBlock/ContactBlock'

export default function Home() {
  return (
    <main className={styles.root}>
      <Company />
      <div className='container'>
        <InfoCardBlock />
        <Partners />
        <Services />
      </div>
      <ContactBlock />
    </main>
  )
}
