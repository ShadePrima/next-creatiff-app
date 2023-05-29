import Image from 'next/image'

import image from '../../assets/image/furniture-image.png'
import lukas from '../../assets/icons/lukas-green.svg'
import Button from '@/ui/button/Button'

import styles from './Furniture.module.scss'

import { furnitureList } from '../../helpers/furnitureList'

export default function Furniture() {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Ми можемо відтворити все, що <br />
          ви тільки забажаєте!
        </h1>
        <p className={styles.text}>
          Тут буде текст про те, як ми вміємо робити меблі на замовлення,
          наприклад через картинки з Pinterest, враховуючи всі побажання. А
          знизу ми покажемо наші переваги, або щось на вибір.
        </p>

        <div className={styles.table}>
          {furnitureList.map((item) => (
            <div key={item.id} className={styles.tableItem}>
              <Image src={item.icon} alt={item.text} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.button}>
          <Button title='зв’язатися з нами' maxWidth={526} minHeight={56} />
        </div>
      </div>
      <Image src={image} alt='furniture' width={504} height={570} />
    </div>
  )
}
