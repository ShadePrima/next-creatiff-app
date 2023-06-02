import styles from './Company.module.scss'
import useTranslation from 'next-translate/useTranslation'

import Number from '@/ui/number/Number'

import { numberList } from '../../helpers/numberList'
import ChangeImage from '@/ui/changeImage/ChangeImage'
import CompanyButton from '../buttons/CompanyButton'
import LocaleSwitcher from '@/app/components/locale-switcher'

type Props = {
  dictionary: any
}

export default function Company({ dictionary }: Props) {
  return (
    <section className={styles.root}>
      <div className='container'>
        <div className={`${styles.contentRow} ${'flex-center'}`}>
          <div className={styles.contenText}>
            <h1 data-aos='fade-right'>
              CREATIFF <br /> {dictionary['company'].title}
            </h1>

            <p className={styles.text}>
              Тут буде текст про те, яка в нас класна компанія, який в нас
              великий спектр послуг, та що прям зараз ви можете замовити роботу,
              та замовити модульний будинок, меблі
            </p>
            <div className={styles.button}>
              <CompanyButton />
            </div>

            <div className={`${'flex-between'} ${styles.numbers}`}>
              {numberList.map((number: any) => (
                <Number
                  key={number.id}
                  title={number.title}
                  text={number.text}
                />
              ))}
            </div>
          </div>

          <div className={styles.contentImage}>
            <ChangeImage />
          </div>
        </div>
      </div>
    </section>
  )
}
