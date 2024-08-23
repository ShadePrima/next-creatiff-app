import Image from 'next/image'
import equip from '../../../assets/image/equip.png'
import equip_1 from '../../../assets/image/equip_1.png'
import equip_2 from '../../../assets/image/equip_2.png'
import equip_3 from '../../../assets/image/equip_3.png'
import equip_4 from '../../../assets/image/equip_4.png'
import { Locale, i18n } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import styles from './page.module.scss'
import Link from 'next/link'

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

export default async function Equip({ params }: BuildProps) {
  const dictionary = await getDictionary(params.lang)

  if (!dictionary) {
    return (
      <section>
        <div className='container'>
          <p>Dictionary not found. Please check the locale or try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.equip}>
      <div className='container'>
        <div className={styles.equip__image}>
          <Image src={equip} width={800} height={600} alt='build' />
        </div>
        <div className={styles.equip__textBlock}>
          <h1 className={styles.equip__title}>{dictionary.equip.title_1}</h1>

          <p className={styles.equip__text}>{dictionary.equip.text_1}</p>
          <p className={styles.equip__text}>{dictionary.equip.text_2}</p>
          <p className={styles.equip__text}>{dictionary.equip.text_3}</p>
          <p className={styles.equip__text}>{dictionary.equip.text_4}</p>

          <h2 className={styles.equip__title_md}>
            {dictionary.equip.waste_title}
          </h2>

          <p className={styles.equip__text}>{dictionary.equip.waste_list}</p>

          <ul>
            <li>{dictionary.equip.waset_list_1}</li>
            <li>{dictionary.equip.waset_list_2}</li>
            <li>{dictionary.equip.waset_list_3}</li>
            <li>{dictionary.equip.waset_list_4}</li>
          </ul>

          <div className={styles.equip__image_wrapper}>
            <Image src={equip_1} width={400} height={300} alt={'equip'} />
            <Image src={equip_2} width={400} height={300} alt={'equip'} />
          </div>

          <h2 className={styles.equip__title_md}>
            {dictionary.equip.metal_scraping_title}
          </h2>

          <p className={styles.equip__text}>
            {dictionary.equip.metal_scraping_text}
          </p>

          <ul>
            <li>{dictionary.equip.meta_scraping_list_1}</li>
            <li>{dictionary.equip.meta_scraping_list_2}</li>
            <li>{dictionary.equip.meta_scraping_list_3}</li>
          </ul>

          <div className={styles.equip__image_wrapper}>
            <Image src={equip_3} width={400} height={300} alt={'equip'} />
            <Image src={equip_4} width={400} height={300} alt={'equip'} />
          </div>

          <h2 className={styles.equip__title_md}>
            {dictionary.equip.partners_title}
          </h2>

          <p className={styles.equip__text}>{dictionary.equip.partners_text}</p>

          <ul>
            <li>
              <Link href={'https://www.xrido.com'} target='_blank'>
                {dictionary.equip.partners_list_1}
              </Link>
            </li>
            <li>
              <Link href={'https://www.sahinlermetal.com'} target='_blank'>
                {dictionary.equip.partners_list_2}
              </Link>
            </li>
            <li>
              <Link href={'https://www.accurl.com'} target='_blank'>
                {dictionary.equip.partners_list_3}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
