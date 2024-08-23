import Image from 'next/image'
import image1 from '../../../assets/image/build-image-1.png'
import image2 from '../../../assets/image/build-image-2.png'
import image3 from '../../../assets/image/build-image-3.png'
import image4 from '../../../assets/image/build-image-4.png'
import { Locale, i18n } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import Link from 'next/link'
import styles from './page.module.scss'

export const metadata = {
  title: 'Виготовлення будинків з морських контейнерів',
  description: 'CREATIFF',
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

type BuildProps = {
  params: { lang: Locale }
}

export default async function Build({ params }: BuildProps) {
  
  const dictionary = await getDictionary(params.lang)

  if (!dictionary) {
    return (
      <section className={styles.build}>
        <div className='container'>
          <p>Dictionary not found. Please check the locale or try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.build}>
      <div className='container'>
        <div className={styles.build__image}>
          <Image src={image1} width={800} height={600} alt='build' />
        </div>
        <div className={styles.build__textBlock}>
          <h1 className={styles.build__title}>
            {dictionary.build.sectionOne.titleOne}
          </h1>

          <p className={styles.build__text}>
            {dictionary.build.sectionOne.paragraphOne}
          </p>

          <p className={styles.build__text}>
            {dictionary.build.sectionOne.paragraphTwo}
          </p>

          <p className={styles.build__text}>
            {dictionary.build.sectionOne.paragraphThree}
          </p>

          <p className={styles.build__text}>
            {dictionary.build.sectionOne.paragraphFour}
          </p>

          <p className={styles.build__text}>
            {dictionary.build.sectionOne.paragraphFive_1}
            <Link
              className={`${styles.build__link} ${'link'}`}
              target='_blank'
              href={
                'https://www.casasprefabricadas.mobi/normativa-y-legislacion-sobre-las-casas-prefabricadas-en-espana/?fbclid=IwAR24v0ohZYCW-RgI5cn_A2KQXg89kM0zzULslVYxo262VFbApB2X2x8d1A8'
              }
            >
              {dictionary.build.sectionOne.link_five}
            </Link>
            {dictionary.build.sectionOne.paragraphFive_2}
          </p>

          <p className={styles.build__text}>
            {dictionary.build.sectionOne.paragraphSix}
            <Link
              className={`${styles.build__link} ${'link'}`}
              target='_blank'
              href={
                'http://www.casasprefabricadas24.com/quiero-una-casa-prefabricada-que-documentacion-necesito/?fbclid=IwAR1SfsD7dq1OXswkpW9eFi8WQqC_VmWGDDq28s0w9cFbe1qHITxQolCJ040'
              }
            >
              {dictionary.build.sectionOne.link_six}
            </Link>
          </p>

          <p className={styles.build__text}>
            {dictionary.build.sectionOne.paragraphSeven}
          </p>
        </div>
        <div className={styles.build__image}>
          <Image src={image2} alt='build' />
        </div>

        <div className={styles.build__image}>
          <Image src={image3} alt='build' />
        </div>

        <div className={styles.build__image}>
          <Image src={image4} alt='build' />
        </div>
      </div>
    </section>
  )
}
