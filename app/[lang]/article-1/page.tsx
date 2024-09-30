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

export default async function Build({ params }: BuildProps) {
  const dictionary = await getDictionary(params.lang)
  const items = [{ label: dictionary?.build.article }];
  const home = { label: dictionary?.build.home, url: '/' }

  if (!dictionary) {
    return (
      <section className={styles.build}>
        <div className='container'>
          <p>Dictionary not found. Please check the locale or try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.build}>
      <div className='container_article'>
        <BreadCrumb model={items} home={home} />
        <div className="title_main">{dictionary.build.title_main}</div>
        <div className='text_bold'>{dictionary.build.text_1}</div>
        <div className='text pt_32'>{dictionary.build.text_2}</div>
        <div className='title'>{dictionary.build.title_list_1}</div>
        <ul className='list_dot'>
          <li>{dictionary.build.text_list_1_1}</li>
          <li>{dictionary.build.text_list_1_2}</li>
          <li>{dictionary.build.text_list_1_3}</li>
          <li>{dictionary.build.text_list_1_4}</li>
          <li>{dictionary.build.text_list_1_5}</li>
        </ul>
        <div className='title'>{dictionary.build.title_list_2}</div>
        <ul className='list_dot'>
          <li>{dictionary.build.text_list_2_1}</li>
          <li>{dictionary.build.text_list_2_2}</li>
          <li>{dictionary.build.text_list_2_3}</li>
          <li>{dictionary.build.text_list_2_4}</li>
          <li>{dictionary.build.text_list_2_5}</li>
        </ul>
        <div className='text pt_32'>{dictionary.build.text_3}</div>
        <div className='text pt_8'>{dictionary.build.text_4}</div>
        <div className='text pt_8'>{dictionary.build.text_5}</div>
      </div>
    </section>
  )
}
