
import { Locale, i18n } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import { BreadCrumb } from 'primereact/breadcrumb'
import styles from './page.module.scss'
import Image from 'next/image'
import image_1 from '@/assets/image/article-6/image-11.png'
import image_2 from '@/assets/image/article-6/image-12.png'
import image_3 from '@/assets/image/article-6/image-13.png'
import image_4 from '@/assets/image/article-6/image-14.png'
import image_5 from '@/assets/image/article-6/image-15.png'
import image_6 from '@/assets/image/article-6/article-4.png'
import Link from 'next/link'
import Slider_6 from './slider-6'
import cl from "clsx";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }))
}  

export const metadata = {
  title: 'Вікна та двері',
  description: 'CREATIFF',
}

type Props = {
    params: { lang: Locale }
  }

export default async function Article_6({ params }: Props) {
    const dict = await getDictionary(params.lang)
    const items = [{ label: dict?.article_6.article }];
    const home = { label: dict?.article_6.home, url: '/' }
    
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
        <div className={styles.article_6}>
            <div className='container_article'>
                <BreadCrumb model={items} home={home} />
                <Slider_6 />
                <div className='title_main'>{dict.article_6.title_main}</div>
                <div className={styles.article_6__wrapper}>
                    <div className={styles.article_6__image_block}>
                        <Image src={image_6} alt='image 3' />
                        <div className='text'>{dict.article_6.text_1_5}</div>
                    </div>
                    <div className={styles.article_6__text_block}>
                        <div className='text_bold pt_0'>{dict.article_6.title_1}</div>
                        <div className='text pt_8'>{dict.article_6.text_1_1}</div>
                        <div className='text pt_8'>{dict.article_6.text_1_2}</div>
                        <div className='text pt_8'>{dict.article_6.text_1_3}</div>
                        <div className='text pt_8'>{dict.article_6.text_1_4}</div>
                    </div>
                </div>
                <div className='title'>{dict.article_6.title_list_1}</div>
                <ul className='list_dot'>
                    <li><span className='text_bold'>{dict.article_6.text_list_1_1_slogan}</span>{' '}{dict.article_6.text_list_1_1}</li>
                    <li><span className='text_bold'>{dict.article_6.text_list_1_2_slogan}</span>{' '}{dict.article_6.text_list_1_2}</li>
                    <li><span className='text_bold'>{dict.article_6.text_list_1_3_slogan}</span>{' '}{dict.article_6.text_list_1_3}</li>
                    <li><span className='text_bold'>{dict.article_6.text_list_1_4_slogan}</span>{' '}{dict.article_6.text_list_1_4}</li>
                </ul>
                <div className={cl(styles.article_6__photo_table, 'pt_32')}>
                    <Image src={image_1} alt="Image 1" />
                    <Image src={image_2} alt="Image 2" />
                    <Image src={image_3} alt="Image 3" />
                </div>
                <div className={cl(styles.article_6__photo_table, 'pt_16')}>
                    <Image src={image_4} alt="Image 4" />
                    <Image src={image_5} alt="Image 5" />
                </div>
                <div className='title'>{dict.article_6.title_list_2}</div>
                <ul className='list_dot'>
                    <li><span className='text_bold'>{dict.article_6.text_list_2_1_slogan}</span>{' '}{dict.article_6.text_list_2_1}</li>
                    <li><span className='text_bold'>{dict.article_6.text_list_2_2_slogan}</span>{' '}{dict.article_6.text_list_2_2}</li>
                    <li><span className='text_bold'>{dict.article_6.text_list_2_3_slogan}</span>{' '}{dict.article_6.text_list_2_3}</li>
                    <li><span className='text_bold'>{dict.article_6.text_list_2_4_slogan}</span>{' '}{dict.article_6.text_list_2_4}</li>
                    <li><span className='text_bold'>{dict.article_6.text_list_2_5_slogan}</span>{' '}{dict.article_6.text_list_2_5}</li>
                </ul>
                <div className='text'>{dict.article_6.text_2}</div>
                <Link className={styles.article_6__link} href={'https://www.brw.pl/'} target='_blank'>https://www.brw.pl/</Link>
                <div className='text pt_32'>{dict.article_6.text_3}</div>
            </div>
        </div>
    )
}
