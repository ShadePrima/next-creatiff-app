import Image from 'next/image'
import { Locale, i18n } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import styles from './page.module.scss'
import { BreadCrumb } from 'primereact/breadcrumb'
import image_1 from '@/assets/image/article-3/article-1.png'
import image_2 from '@/assets/image/article-3/article-2.png'
import image_3 from '@/assets/image/article-3/article-3.png'
import image_4 from '@/assets/image/article-3/article-4.png'
import image_5 from '@/assets/image/article-3/article-5-1.png'
import image_6 from '@/assets/image/article-3/article-5-2.png'
import image_7 from '@/assets/image/article-3/article-6-1.png'
import image_8 from '@/assets/image/article-3/article-6-2.png'
import image_9 from '@/assets/image/article-3/article-6-3.png'


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
  const dict = await getDictionary(params.lang)
  const items = [{ label: 'Article 3' }];
  const home = { label: 'Home', url: '/' }

  if (!dict) {
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
        <div className='container_article'>
            <BreadCrumb model={items} home={home} />
            <div className='title_main'>{dict.article_3.title_main}</div>
            <div className='text_bold pt_32'>{dict.article_3.text_1}</div>
            <div className='text pt_32'>{dict.article_3.text_2}</div>
            <div className='text pt_8'>{dict.article_3.text_3}</div>
            <div className='text pt_8'>{dict.article_3.text_4}</div>
            <div className='text pt_8'>{dict.article_3.text_5}</div>
            <div className='title'>{dict.article_3.title_1}</div>
            <div className='text pt_16'>{dict.article_3.text_6}</div>
            <div className='text pt_8'>{dict.article_3.text_7}</div>
            <Image className='pt_32' src={image_1} alt="Image 1" />
            <div className='title'>{dict.article_3.title_list_1}</div>
            <ul className='list_dot'>
                <li className='pt_16'>{dict.article_3.text_list_1_1}</li>
                <li>{dict.article_3.text_list_1_2}</li>
                <li>{dict.article_3.text_list_1_3}</li>
                <li>{dict.article_3.text_list_1_4}</li>
                <li>{dict.article_3.text_list_1_5}</li>
            </ul>
            <Image className='pt_32' src={image_2} alt="Image 1" />
            <div className='title'>{dict.article_3.title_list_2}</div>
            <ul className='list_dot'>
                <li className='pt_16'>{dict.article_3.text_list_2_1}</li>
                <li>{dict.article_3.text_list_2_2}</li>
                <li>{dict.article_3.text_list_2_3}</li>
                <li>{dict.article_3.text_list_2_4}</li>
            </ul>
            <Image className='pt_32' src={image_3} alt="Image 1" />
            <div className='title'>{dict.article_3.title_2}</div>
            <div className='text pt_16'>{dict.article_3.text_8}</div>
            <div className='text pt_8'>{dict.article_3.text_9}</div>
            <div className='text pt_8'>{dict.article_3.text_10}</div>
            <div className='text pt_8'>{dict.article_3.text_11}</div>
            <div className='title'>{dict.article_3.title_list_3}</div>
            <ul className='list_dot'>
                <li className='pt_16'>{dict.article_3.text_list_3_1}</li>
                <li>{dict.article_3.text_list_3_2}</li>
                <li>{dict.article_3.text_list_3_3}</li>
                <li>{dict.article_3.text_list_3_4}</li>
            </ul>
            <Image className='pt_32' src={image_4} alt="Image 1" />
            <div className='title'>{dict.article_3.title_list_4}</div>
            <ul className='list_dot'>
                <li className='pt_16'>{dict.article_3.text_list_4_1}</li>
                <li>{dict.article_3.text_list_4_2}</li>
                <li>{dict.article_3.text_list_4_3}</li>
                <li>{dict.article_3.text_list_4_4}</li>
            </ul>
            <div className={styles.equip__photo_grid}>
                <Image src={image_5} alt="Image 1" />
                <Image src={image_6} alt="Image 2" />
            </div>
            <div className='text pt_32'>{dict.article_3.text_12}</div>
            <div className={styles.equip__photo_grid_2}>
                <Image src={image_7} alt="Image 1" />
                <Image src={image_8} alt="Image 2" />
                <Image src={image_9} alt="Image 2" />
                
            </div>
        </div>
    </section>
  )
}
