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
          <h1>Какой материал лучше всего подходит для сборного дома?</h1>
          <p>
            Самые современные сборные дома - это модульные, потому что они
            адаптируются к потребностям своих владельцев. Это дома, построенные
            в мастерских или на фабриках, и некоторые крупные застройщики, такие
            как Vía Célere или Aedas, уже работают в этой сфере производства, и
            которые они предпочитают называть промышленными домами (viviendas
            industrializadas).
          </p>
          <p>
            Что касается материалов, древесина отличается невысокой стоимостью.
            Но необходимо учитывать, что их эксплуатация дороже и срок службы
            меньше, чем у других сборных металлических или бетонных домов.
          </p>
          <p>
            Стальные конструкции предлагают домовладельцу большую прочность и
            долговечность, хотя на самом деле именно бетонные конструкции
            завоевали наибольшую долю рынка в последние годы. В любом случае,
            независимо от выбранного материала, покупатель должен ознакомиться с
            гарантией, предлагаемой каждым производителем.
          </p>
          <p>
            Кроме того, новые европейские правила, регулирующие
            энергоэффективность дома должны вступить в силу в 2020 году, также
            влияют на сборные дома.
          </p>
          <p>
            «Производители сборных домов должны предоставить вам 10-летнюю
            гарантию на конструкцию (для остальных компонентов дома - 3 года),
            если это дом со строительным проектом (construcción). Юридическая
            гарантия на мобильные дома - два года».
          </p>
          <p>
            Исходя из вышеизложенного предлагаю долевое участие в производстве
            типовых модульных домов из морских контейнеров на базе моего
            предприятия.
          </p>
          <p>
            В настоящий момент разработаны типовые эскизные проекты и требуется
            финансирование производства двух модулей (кухня и спальня) для
            презентации потенциальным покупателям. Наши дома будут оснащены
            солнечными батареями и экономной системой отопления, укомплектованы
            всей мебелью собственного производства (дизайн согласовывается с
            заказчиком), оконными системами Ecoline 600 или Salamander. Наружная
            отделка может быть произведена как композитными так и натуральными
            материалами. Также можем предложить обустройство придомовой
            территории.
          </p>
          <p>
            Существующие производственные площади дают возможность производить
            любой типовой модульный дом сроком до трех месяцев.
          </p>
          <p>Примерная стоимость 1 м.кв. – 500 евро</p>
          <p>Сумма первоначальной одноразовой инвестиции – 15000 евро.</p>
          <p>
            Сумма производственной инвестиции – до 70 000 евро (в зависимости от
            выбранного проекта)
          </p>
          <p>Срок окупаемости – один проект.</p>
          <p>
            Также можно рассматривать строительство дома на приобретенном
            участке с последующей продажей.
          </p>
        </div>
        <div className={styles.image}>
          <Image src={image4} alt='build' />
        </div>
      </div>
    </div>
  )
}
