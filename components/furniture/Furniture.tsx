import Image from 'next/image'

import image from '../../assets/image/furniture-image.png'
import lukas from '../../assets/icons/lukas-green.svg'
import tool from '../../assets/icons/tools.svg'
import heart from '../../assets/icons/heart-green.svg'

import FurnitureButton from '../buttons/FurnitureButton'

import styles from './Furniture.module.scss'

type FurnitureProps = {
  dictionary: any
}

export default function Furniture({ dictionary }: FurnitureProps) {
  const furnitureList = [
    {
      id: 1,
      icon: tool,
      title: dictionary.furniture.cardOne.title,
      text: dictionary.furniture.cardOne.text,
    },
    {
      id: 2,
      icon: tool,
      title: dictionary.furniture.cardTwo.title,
      text: dictionary.furniture.cardTwo.text,
    },
    {
      id: 3,
      icon: tool,
      title: dictionary.furniture.cardThree.title,
      text: dictionary.furniture.cardThree.text,
    },
  ]

  return (
    <div className={styles.root}>
      <div>
        <h1 className={styles.title}>
          {dictionary.furniture.titleLineOne} <br />
          {dictionary.furniture.titleLineTwo}
        </h1>
        <div className={styles.content}>
          <p className={styles.text}>{dictionary.furniture.text}</p>

          <div className={styles.table}>
            {furnitureList.map((item) => (
              <div key={item.id} className={styles.tableItem}>
                <Image src={item.icon} alt={item.text} />
                <div className={styles.tableContainer}>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className={styles.textBottom}>
            Довірте нам свої бажання, а ми перетворимо їх на реальність.
            Ознайомтесь з нашим портфоліо!
          </p>
          <div className={styles.button}>
            <FurnitureButton dictionary={dictionary} />
          </div>
        </div>
      </div>
      <Image
        className={styles.image}
        src={image}
        alt='furniture'
        width={504}
        height={714}
      />
    </div>
  )
}
