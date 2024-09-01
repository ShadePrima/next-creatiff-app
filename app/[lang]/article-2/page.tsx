import { BreadCrumb } from 'primereact/breadcrumb'
import styles from './page.module.scss'
import { Locale, i18n } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import Image from 'next/image'
import image_1 from '@/assets/image/equipment/epuipment-1.png'
import image_2 from '@/assets/image/equipment/epuipment-2.png'
import image_3 from '@/assets/image/equipment/epuipment-3.png'
import image_4 from '@/assets/image/equipment/epuipment-4.png'
import image_5 from '@/assets/image/equipment/epuipment-5.png'
import image_6 from '@/assets/image/equipment/epuipment-6.png'
import image_7 from '@/assets/image/equipment/epuipment-7.png'
import image_2_1 from '@/assets/image/equipment/equipment-2-1.png'
import image_2_2 from '@/assets/image/equipment/equipment-2-2.png'
import image_2_3 from '@/assets/image/equipment/equipment-2-3.png'

export const metadata = {
  title: 'Продаж промислового обладнання',
  description: 'CREATIFF',
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

type Props = {
  params: { lang: Locale }
}

export default async function Equipment({ params }: Props) {
  const dict = await getDictionary(params.lang)
  const items = [{ label: 'Article 2' }];
  const home = { label: 'Home', url: '/' }

  if (!dict) {
    return (
      <section className={styles.build}>
        <div className='container'>
          <p>Dictionary not found. Please check the locale or try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <div className={styles.equipment}>
      <div className='container_article'>
      <BreadCrumb model={items} home={home} />
        <div className='title_main'>{dict.equipment.title_main}</div>
        <div className='text pt_32'>{dict.equipment.text_1}</div>
        <div className='title'>{dict.equipment.title_list_1}</div>
        <ul className='list_dot'>
          <li><span className='text_bold'>{dict.equipment.text_list_1_1_slogan}</span>{' '}{dict.equipment.text_list_1_1}</li>
          <li><span className='text_bold'>{dict.equipment.text_list_1_2_slogan}</span>{' '}{dict.equipment.text_list_1_2}</li>
          <li><span className='text_bold'>{dict.equipment.text_list_1_3_slogan}</span>{' '}{dict.equipment.text_list_1_3}</li>
          <li><span className='text_bold'>{dict.equipment.text_list_1_4_slogan}</span>{' '}{dict.equipment.text_list_1_4}</li>
        </ul>
        <div className={styles.equipment__photo_grid}>
            <Image src={image_1} alt="Image 1" />
            <Image src={image_2} alt="Image 2" />
            <Image src={image_3} alt="Image 3" />
            <Image src={image_4} alt="Image 4" />
            <Image src={image_5} alt="Image 5" />
            <Image src={image_6} alt="Image 6" />
            <Image src={image_7} alt="Image 7" />
        </div>
        <div className='text pt_32'>{dict.equipment.text_2}</div>
        <div className={styles.equipment__photo_2_grid}>
            <Image src={image_2_1} alt="Image 1" />
            <Image src={image_2_2} alt="Image 2" />
            <Image src={image_2_3} alt="Image 3" />
        </div>
      </div>
    </div>
  )
}