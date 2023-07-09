import Image from 'next/image'

import image from '../../assets/image/furniture-image.png'
import lukas from '../../assets/icons/lukas-green.svg'
import tool from '../../assets/icons/tools.svg'
import heart from '../../assets/icons/heart-green.svg'

import styles from './Furniture.module.scss'

import FurnitureButton from '../buttons/FurnitureButton'

type FurnitureProps = {
  dictionary: any
}

export default function Furniture({ dictionary }: FurnitureProps) {
  const furnitureList = [
    { id: 1, icon: lukas, text: dictionary.furniture.lukas },
    { id: 2, icon: tool, text: dictionary.furniture.tool },
    { id: 3, icon: heart, text: dictionary.furniture.heart },
    { id: 4, icon: lukas, text: dictionary.furniture.lukas },
    { id: 5, icon: tool, text: dictionary.furniture.tool },
    { id: 6, icon: heart, text: dictionary.furniture.heart },
  ]

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {dictionary.furniture.titleLineOne} <br />
          {dictionary.furniture.titleLineTwo}
        </h1>
        <p className={styles.text}>{dictionary.furniture.text}</p>

        <div className={styles.table}>
          {furnitureList.map((item) => (
            <div key={item.id} className={styles.tableItem}>
              <Image src={item.icon} alt={item.text} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.button}>
          <FurnitureButton dictionary={dictionary} />
        </div>
      </div>
      <Image src={image} alt='furniture' width={504} height={570} />
    </div>
  )
}
