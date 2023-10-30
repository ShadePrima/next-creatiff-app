import Image from 'next/image'
import image1 from '../../../assets/image/build-image-1.png'
import image2 from '../../../assets/image/build-image-2.png'
import image3 from '../../../assets/image/build-image-3.png'
import image4 from '../../../assets/image/build-image-4.png'
import { Locale, i18n } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
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

  return (
    <div className={styles.build}>
      <div className='container'>
        <div className={styles.build__image}>
          <Image src={image1} width={800} height={600} alt='build' />
        </div>
        <div className={styles.build__textBlock}>
          <h1 className={`${styles.build__title} ${inter.className}`}>
            {dictionary.build.sectionOne.titleOne}
          </h1>

          <p className={styles.build__text}>
            Представляємо вашій увазі ідею повноцінного автономного модульного
            будинку із морських контейнерів.
          </p>

          <p className={styles.build__text}>
            Після пандемії COVID-19 багато людей думали, що збираємо будинок
            подалі від міської галасливості буде чудовим варіантом для
            проживання або відпустки.
          </p>

          <p className={styles.build__text}>
            Попит на цей тип житла, який здобув популярність в США та Канаді,
            зрос в Іспанії в останні роки.
          </p>

          <p className={styles.build__text}>
            Виробництво будинків із морських контейнерів було обране через те,
            що конструкція морського контейнера спочатку є міцною та
            перевіреною, що надає можливість модульної збірки, поверхні та
            ефективного транспортування до місця установки. Всі модулі
            виготовляються на виробництві і потребують незначних робіт для
            установки. За допомогою модульного проектування ви можете самостійно
            спланувати будинок своєї мрії та забезпечити автономне існування без
            підключення до комунікацій. Наш будинок можна не лише встановити,
            але і швидко перенести в інше місце, оскільки з'єднання модулів
            виконується гвинтовим способом. Будинок добре ізольований, оснащений
            системами життєдіяльності. В ньому комфортно взимку і влітку, а
            система вентильованого фасаду власного виробництва та якісні вікна
            додадуть індивідуальності Вашому будинку.
          </p>

          <p className={styles.build__text}>
            Модульний будинок можна встановити на тих землях, на яких неможливо
            побудувати капітальний будинок, а також на орендованих землях.
            Зазвичай земля повинна бути міською (terreno urbano), але для
            розміщення їх в сільських районах (rústicas) останнє слово буде за
            кожною Comunidad Autónoma, компетентним органом управління
            незахопленими землями. Всі процедури для цих типів житла
            супроводжують витрати, які у разі мобільних будинків будуть нижчими.
            Дозвіл на будівництво не знадобиться, але знадобиться{''}
            <Link
              className={`${styles.build__link} ${'link'}`}
              target='_blank'
              href={
                'https://www.casasprefabricadas.mobi/normativa-y-legislacion-sobre-las-casas-prefabricadas-en-espana/?fbclid=IwAR24v0ohZYCW-RgI5cn_A2KQXg89kM0zzULslVYxo262VFbApB2X2x8d1A8'
              }
            >
              певна документація
            </Link>{' '}
            , така як licencia urbanística, за яку потрібно сплатити збір у
            розмірі від 0,5% до 2% від вашого бюджету на будинок.
          </p>

          <p className={styles.build__text}>
            Мобільні будинки звільнені від процедури легалізації їх експлуатації
            (сертифікат придатності для проживання (cédula de habitabilidad) з
            оплатою податку, який залежить від кожної Comunidad Autónoma,
            ліцензії licencia de primera ocupación, якою адміністрація
            сертифікує, що будинок відповідає проекту, з оплатою відповідного
            податку, якщо ви не хочете задекларувати витрати. У цьому випадку
            потрібно отримати
            <Link
              className={`${styles.build__link} ${'link'}`}
              target='_blank'
              href={
                'http://www.casasprefabricadas24.com/quiero-una-casa-prefabricada-que-documentacion-necesito/?fbclid=IwAR1SfsD7dq1OXswkpW9eFi8WQqC_VmWGDDq28s0w9cFbe1qHITxQolCJ040'
              }
            >
              документацію, еквівалентну нерухомим будинкам.
            </Link>
          </p>

          <p className={styles.build__text}>
            Ми пропонуємо вам не просто будинок, повністю мебльований і готовий
            до щасливого життя, ми пропонуємо вам час для спілкування та
            самосаморозвитку, подорожей та кохання, а ми поки що займемося ВАШИМ
            БУДИНКОМ.
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
    </div>
  )
}
