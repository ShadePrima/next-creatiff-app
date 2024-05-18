import { Locale, i18n } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import cl from 'clsx'
import certificate1 from '@/assets/image/general-1.png'
import certificate2 from '@/assets/image/general-2.png'
import certificate3 from '@/assets/image/general-3.png'
import certificate4 from '@/assets/image/general-4.png'
import window1 from '@/assets/image/general-window-1.png'
import window2 from '@/assets/image/general-window-2.png'
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
          <p className={styles.general__text}>{dictionary.general.general_text_2}</p>
          <div className={styles.general__window_wrapper}>
            <div className={styles.general__window_img_wrapper}>
              <Image src={window1} width={295} height={295} alt='window one' />
              <p className={styles.general__text} style={{textAlign: "center"}}>Gealan S 9000</p>
            </div>
            <ol className={cl(styles.general__text, styles.general__window_list)} style={{ listStyleType: 'disc' }}>
              <li className={styles.general__window_list_item}>{dictionary.general.window_list_1}</li>
              <li className={styles.general__window_list_item}>{dictionary.general.window_list_2}</li>
              <li className={styles.general__window_list_item}>{dictionary.general.window_list_3}</li>
              <li className={styles.general__window_list_item}>{dictionary.general.window_list_4}</li>
              <li className={styles.general__window_list_item}>{dictionary.general.window_list_5}</li>
              <li className={styles.general__window_list_item}>{dictionary.general.window_list_6}</li>
              <li className={styles.general__window_list_item}>{dictionary.general.window_list_7}</li>
            </ol>
          </div>
          <div className={styles.general__window_wrapper}>
            <div className={styles.general__window_img_wrapper}>
              <Image src={window1} width={295} height={295} alt='window one' />
              <p className={styles.general__text} style={{textAlign: "center"}}>MegaLine 600</p>
            </div>
            <ol className={cl(styles.general__text, styles.general__window_list)} style={{ listStyleType: 'disc' }}>
              <li className={styles.general__window_list_item}>{dictionary.general.window_list_two_1}</li>
              <li className={styles.general__window_list_item}>{dictionary.general.window_list_two_2}</li>
              <li className={styles.general__window_list_item}>{dictionary.general.window_list_two_3}</li>
              <li className={styles.general__window_list_item}>{dictionary.general.window_list_two_4}</li>
              <li className={styles.general__window_list_item}>{dictionary.general.window_list_two_5}</li>
              <li className={styles.general__window_list_item}>{dictionary.general.window_list_two_6}</li>
              <li className={styles.general__window_list_item}>{dictionary.general.window_list_two_7}</li>
            </ol>
          </div>
        </div>
    </section>
  )
}
