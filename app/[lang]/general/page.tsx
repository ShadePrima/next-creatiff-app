import { Locale, i18n } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import certificate1 from '@/assets/image/general-1.png'
import certificate2 from '@/assets/image/general-2.png'
import certificate3 from '@/assets/image/general-3.png'
import certificate4 from '@/assets/image/general-4.png'
import styles from './page.module.scss'
import Image from 'next/image'

export const metadata = {
  title: 'Загальнобудівельні види робіт',
  description: 'CREATIFF',
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

type EquipmentProps = {
  params: { lang: Locale }
}

export default async function General({ params }: EquipmentProps) {
  const dictionary = await getDictionary(params.lang)
  return (
    <section className={styles.general}>
        <div className={styles.general__wrapper}>
          <h1 className={styles.general__title}>{dictionary.general.general_title}</h1>
          <p className={styles.general__text}>{dictionary.general.general_text_1}</p>
          <h2 className={styles.general__text}>{dictionary.general.general_list_title}</h2>
          <ol className={styles.general__list}>
            <li>{dictionary.general.general_list_text_1}</li>
            <li>{dictionary.general.general_list_text_2}</li>
          </ol>
          <div className={styles.general__certificates}>
            <Image src={certificate1} width={193} height={272} alt='certificat one' />
            <Image src={certificate2} width={193} height={272} alt='certificat two'/>
            <Image src={certificate3} width={193} height={272} alt='certificat three'/>
            <Image src={certificate4} width={193} height={272} alt='certificat fourth'/>
          </div>
        </div>
    </section>
  )
}
