import Input from '@/ui/input/Input'

import styles from './ContactForm.module.scss'

export default function ContactForm() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>ВИНИКЛИ ПИТАННЯ? НАПИШИ НАМ</h1>
        <div className={styles.inputBlock}>
          <Input
            title='Ваше Iм’я'
            symbol='*'
            type='text'
            placeholder='Остап Бендер'
          />
          <Input
            title='Ваша Пошта'
            symbol='*'
            type='email'
            placeholder='ostapbender@gmail.com'
          />
          <Input
            title='Ваш Телефон'
            symbol=''
            type='tel'
            placeholder='+34 951 392 250'
          />
        </div>
      </div>
    </div>
  )
}
