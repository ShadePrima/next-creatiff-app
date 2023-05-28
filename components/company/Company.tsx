import Image from 'next/image'
import styles from './Company.module.scss'
import image1 from '../../assets/image/header1.png'
import Button from '@/ui/button/Button'
import Number from '@/ui/number/Number'

import { numberList } from '../../helpers/number'

export default function Company() {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`${styles.contentRow} ${'flex-center'}`}>
          <div className={styles.contenText}>
            <h1>
              CREATIFF <br /> Ми робимо все
            </h1>
            <p className={styles.text}>
              Тут буде текст про те, яка в нас класна компанія, який в нас
              великий спектр послуг, та що прям зараз ви можете замовити роботу,
              та замовити модульний будинок, меблі
            </p>
            <div className={styles.button}>
              <Button title='Реалізувати ідею' width={263} height={56} />
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
            <Image src={image1} alt='build' width={520} height={670} />
          </div>
        </div>
      </div>
    </div>
  )
}
