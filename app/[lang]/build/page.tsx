import Image from 'next/image'
import image1 from '../../../assets/image/build-image-1.png'
import image2 from '../../../assets/image/build-image-2.png'
import image3 from '../../../assets/image/build-image-3.png'
import image4 from '../../../assets/image/build-image-4.png'
import styles from './page.module.scss'
import { Locale, i18n } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'

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

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.image}>
          <Image src={image1} alt='build' />
        </div>
        <div className={styles.textBlock}>
          <h1>{dictionary.build.sectionOne.titleOne}</h1>
          <p>{dictionary.build.sectionOne.paragraphOne}</p>
          <p>{dictionary.build.sectionOne.paragraphTwo}</p>
          <p>{dictionary.build.sectionOne.paragraphThree}</p>
          <p>{dictionary.build.sectionOne.paragraphFour}</p>
          <ul>
            <li>{dictionary.build.sectionOne.liOne}</li>
            <li>{dictionary.build.sectionOne.lineTwo}</li>
          </ul>
          <p>{dictionary.build.sectionOne.paragraphFive}</p>
          <p>{dictionary.build.sectionOne.paragraphSix}</p>
          <p>{dictionary.build.sectionOne.paragraphSeven}</p>
          <p>{dictionary.build.sectionOne.paragraphEights}</p>
          <p>{dictionary.build.sectionOne.paragraphNine}</p>
        </div>
        <div className={styles.image}>
          <Image src={image2} alt='build' />
        </div>
        <div className={styles.textBlock}>
          <h1>{dictionary.build.sectionTwo.title}</h1>
          <p>{dictionary.build.sectionTwo.paragraphOne}</p>
          <p>{dictionary.build.sectionTwo.paragraphTwo}</p>
          <p>{dictionary.build.sectionTwo.paragraphThree}</p>
          <p>{dictionary.build.sectionTwo.paragraphFour}</p>
          <p>{dictionary.build.sectionTwo.paragraphFive}</p>
          <p>{dictionary.build.sectionTwo.paragraphSix}</p>
          <p>{dictionary.build.sectionTwo.paragraphSeven}</p>
          <p>{dictionary.build.sectionTwo.paragraphEight}</p>
          <p>{dictionary.build.sectionTwo.paragraphNine}</p>
          <p>{dictionary.build.sectionTwo.paragraphTen}</p>
          <p>{dictionary.build.sectionTwo.paragraphEleven}</p>
          <p>{dictionary.build.sectionTwo.paragraphTwelve}</p>
          <p>{dictionary.build.sectionTwo.paragraphThirteen}</p>
        </div>
        <div className={styles.image}>
          <Image src={image3} alt='build' />
        </div>
        <div className={styles.textBlock}>
          <h1>{dictionary.build.sectionThree.title}</h1>
          <p>{dictionary.build.sectionThree.paragraphOne}</p>
          <p>{dictionary.build.sectionThree.paragraphTwo}</p>
          <p>{dictionary.build.sectionThree.paragraphThree}</p>
          <p>{dictionary.build.sectionThree.paragraphFour}</p>
          <p>{dictionary.build.sectionThree.paragraphFive}</p>
          <p>{dictionary.build.sectionThree.paragraphSix}</p>
          <p>{dictionary.build.sectionThree.paragraphSeven}</p>
          <p>{dictionary.build.sectionThree.paragraphEight}</p>
          <p>{dictionary.build.sectionThree.paragraphNine}</p>
          <p>{dictionary.build.sectionThree.paragraphTen}</p>
          <p>{dictionary.build.sectionThree.paragraphEleven}</p>
          <p>{dictionary.build.sectionThree.paragraphTwelve}</p>
          <p>{dictionary.build.sectionThree.paragraphThirteen}</p>
        </div>
        <div className={styles.image}>
          <Image src={image4} alt='build' />
        </div>
      </div>
    </div>
  )
}
