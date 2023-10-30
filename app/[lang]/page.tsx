import React from 'react'
import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import Company from '@/components/company/Company'
import InfoCardBlock from '@/components/infoCardBlock/InfoCardBlock'
import Services from '@/components/services/Services'
import ContactBlock from '@/components/contactBlock/ContactBlock'
import Furniture from '@/components/furniture/Furniture'
import Gallery from '@/components/gallery/Gallery'
import styles from './page.module.scss'

type Props = {
  params: { lang: Locale }
}

export default async function Home({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang)

  return (
    <main className={styles.root}>
      <Company dictionary={dictionary} />
      <div className='container'>
        <InfoCardBlock dictionary={dictionary} lang={lang} />
        {/* <Partners dictionary={dictionary} /> */}
        <Services dictionary={dictionary} />
      </div>
      <ContactBlock dictionary={dictionary} />
      <div className='container'>
        <Gallery dictionary={dictionary} />
        <Furniture dictionary={dictionary} />
      </div>
    </main>
  )
}
