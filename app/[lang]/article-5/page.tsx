import Image from 'next/image'
import metal from '../../../assets/image/metal.png'
import metal_1 from '../../../assets/image/metal_1.png'
import metal_2 from '../../../assets/image/metal_2.png'
import metal_3 from '../../../assets/image/metal_3.png'
import metal_4 from '../../../assets/image/metal_4.png'
import { Locale, i18n } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import styles from './page.module.scss'
import { BreadCrumb } from 'primereact/breadcrumb'

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

export default async function Metal({ params }: BuildProps) {
  const dictionary = await getDictionary(params.lang)
  const items = [{ label: 'Article 3' }];
  const home = { label: 'Home', url: '/' }
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
    <section className={styles.metal}>
      <div className='container'>
      <BreadCrumb model={items} home={home} />
        <div className={styles.metal_image}>
          <Image src={metal} width={800} height={600} alt='build' />
        </div>
        <div className={styles.metal_textBlock}>
          <h1 className={styles.metal_title}>{dictionary.metal.metal_title}</h1>

          <p className={styles.metal_text}>{dictionary.metal.metal_text_1}</p>
          <p className={styles.metal_text}>{dictionary.metal.metal_text_2}</p>

          <p className={styles.metal_text}>
            {dictionary.metal.metal_list_text}
          </p>

          <ul>
            <li>{dictionary.metal.metal_list_1}</li>
            <li>{dictionary.metal.metal_list_2}</li>
            <li>{dictionary.metal.metal_list_3}</li>
            <li>{dictionary.metal.metal_list_4}</li>
            <li>{dictionary.metal.metal_list_5}</li>
          </ul>

          <p className={styles.metal_text}>{dictionary.metal.metal_text_3}</p>

          <div className={styles.metal_image_wrapper}>
            <Image src={metal_1} width={400} height={300} alt={'equip'} />
            <Image src={metal_2} width={400} height={300} alt={'equip'} />
          </div>

          <h2 className={styles.metal_title_md}>
            {dictionary.metal.metal_title_2}
          </h2>

          <p className={styles.metal_text}>{dictionary.metal.metal_text_4}</p>

          <div className={styles.metal_image_wrapper}>
            <Image src={metal_3} width={400} height={300} alt={'equip'} />
            <Image src={metal_4} width={400} height={300} alt={'equip'} />
          </div>
        </div>
      </div>
    </section>
  )
}
