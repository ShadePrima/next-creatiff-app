import Image from 'next/image'
import image_1 from '@/assets/image/article-5/article-1.png'
import image_2 from '@/assets/image/article-5/article-2.png'
import image_3 from '@/assets/image/article-5/article-3.png'
import image_4 from '@/assets/image/article-5/article-4.png'
import image_5 from '@/assets/image/article-5/article-5.png'
import image_6 from '@/assets/image/article-5/article-6.png'
import image_7 from '@/assets/image/article-5/article-7.png'
import image_8 from '@/assets/image/article-5/article-8.png'
import image_9 from '@/assets/image/article-5/article-9.png'
import image_10 from '@/assets/image/article-5/article-10.png'
import image_11 from '@/assets/image/article-5/article-11.png'
import image_12 from '@/assets/image/article-5/article-12.png'
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
  const dict = await getDictionary(params.lang)
  const items = [{ label: 'Article 5' }];
  const home = { label: 'Home', url: '/' }
  if (!dict) {
    return (
      <section>
        <div className='container_article'>
          <p>Dictionary not found. Please check the locale or try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.article_5}>
      <div className='container_article'>
        <BreadCrumb model={items} home={home} />
        <div className='title_main'>{dict.article_5.title_main}</div>
        <div className='title'>{dict.article_5.title_1}</div>
        <div className='text pt_32'>{dict.article_5.text_1}</div>
        <ol className='list'>
            <li className='pt_8'>{dict.article_5.text_list_1}</li>
            <li>{dict.article_5.text_list_2}</li>
            <li>{dict.article_5.text_list_3}</li>
        </ol>
        <div className='text pt_8'>{dict.article_5.text_2}</div>
        <div className={styles.article_5__wrapper}>
          <div className={styles.article_5__image_block}>
            <Image src={image_1} alt='image 1' />
            <Image src={image_2} alt='image 2' />
            <div className='text'>{dict.article_5.text_2_4}</div>
          </div>
          <div className={styles.article_5__text_block}>
            <div className='text_bold pt_0'>{dict.article_5.title_2}</div>
            <div className='text pt_8'>{dict.article_5.text_2_1}</div>
            <div className='text pt_8'>{dict.article_5.text_2_2}</div>
            <div className='text pt_8'>{dict.article_5.text_2_3}</div>
          </div>
        </div>
        <div className={styles.article_5__wrapper}>
          <div className={styles.article_5__image_block}>
            <Image src={image_3} alt='image 3' />
          </div>
          <div className={styles.article_5__text_block}>
            <div className='text_bold pt_0'>{dict.article_5.title_3}</div>
            <div className='text pt_8'>{dict.article_5.text_3_1}</div>
            <div className='text pt_8'>{dict.article_5.text_3_2}</div>
          </div>
        </div>
        <div className={styles.article_5__wrapper}>
          <div className={styles.article_5__image_block}>
            <Image src={image_4} alt='image 4' />
          </div>
          <div className={styles.article_5__text_block}>
            <div className='text_bold pt_0'>{dict.article_5.title_4}</div>
            <div className='text pt_8'>{dict.article_5.text_4_1}</div>
            <div className='text pt_8'>{dict.article_5.text_4_2}</div>
          </div>
        </div>
        <div className={styles.article_5__wrapper}>
          <div className={styles.article_5__image_block}>
            <Image src={image_5} alt='image 5' />
          </div>
          <div className={styles.article_5__text_block}>
            <div className='text_bold pt_0'>{dict.article_5.title_5}</div>
            <div className='text pt_8'>{dict.article_5.text_5_1}</div>
            <div className='text pt_8'>{dict.article_5.text_5_2}</div>
          </div>
        </div>
        <div className={styles.article_5__wrapper}>
            <div className={styles.article_5__image_block}>
                <Image src={image_6} alt='image 6' />
            </div>
            <div className={styles.article_5__text_block}>
                <div className='text_bold pt_0'>{dict.article_5.title_6}</div>
                <div className='text pt_8'>{dict.article_5.text_6_1}</div>
                <div className='text pt_8'>{dict.article_5.text_6_2}</div>
            </div>
        </div>
        <div className={styles.article_5__wrapper}>
            <div className={styles.article_5__image_block}>
                <Image src={image_7} alt='image 7' />
            </div>
            <div className={styles.article_5__text_block}>
                <div className='text_bold pt_0'>{dict.article_5.title_7}</div>
                <div className='text pt_8'>{dict.article_5.text_7_1}</div>
            </div>
        </div>
        <div className={styles.article_5__wrapper}>
            <div className={styles.article_5__image_block}>
                <Image src={image_8} alt='image 8' />
            </div>
            <div className={styles.article_5__text_block}>
                <div className='text_bold pt_0'>{dict.article_5.title_8}</div>
                <div className='text pt_8'>{dict.article_5.text_8_1}</div>
                <div className='text pt_8'>{dict.article_5.text_8_2}</div>
                <div className='text pt_8'>{dict.article_5.text_8_3}</div>
            </div>
        </div>
        <div className={styles.article_5__wrapper}>
            <div className={styles.article_5__image_block}>
                <Image src={image_9} alt='image 9' />
            </div>
            <div className={styles.article_5__text_block}>
                <div className='text_bold pt_0'>{dict.article_5.title_9}</div>
                <div className='text pt_8'>{dict.article_5.text_9_1}</div>
                <div className='text pt_8'>{dict.article_5.text_9_2}</div>
            </div>
        </div> 
        <div className='title_main'>{dict.article_5.title_10}</div>
        <div className='title'>{dict.article_5.title_11}</div>
        <div className='text pt_16'>{dict.article_5.text_11_1}</div>
        <div className='text pt_8'>{dict.article_5.text_11_2}</div>
        <div className='text pt_8'>{dict.article_5.text_11_3}</div>
        <Image className='pt_72' src={image_10} alt='image 10' />
        <div className={styles.article_5__wrapper}>
            <div className={styles.article_5__image_block}>
                <Image src={image_11} alt='image 11' />
                <div className='text'>{dict.article_5.text_11_4}</div>
            </div>
            <div className={styles.article_5__text_block}>
            <ul className='list_dot'>
                <li className='pt_16'>{dict.article_5.text_list_11_1}</li>
                <li>{dict.article_5.text_list_11_2}</li>
                <Image src={image_12} alt='image 12' />
            </ul>
            </div>
        </div>
      </div>
    </section>
  )
}
