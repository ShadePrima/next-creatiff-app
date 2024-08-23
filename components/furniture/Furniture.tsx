import Image from 'next/image'

import image from '../../assets/image/furniture-image.png'
import lukas from '../../assets/icons/lukas-green.svg'
import tool from '../../assets/icons/tool-new.svg'
import heart from '../../assets/icons/heart-green.svg'

import FurnitureButton from '../buttons/FurnitureButton'

import styles from './Furniture.module.scss'

type FurnitureProps = {
  dictionary: any
}

export default function Furniture({ dictionary }: FurnitureProps) {
  if (!dictionary?.contactBlock) {
    return null; 
  }
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
      <div className={styles.content}>
        <h1 className={styles.title}>{dictionary.furniture.title}</h1>
        <div className={styles.contentContainer}>
          <p className={styles.textTop}>{dictionary.furniture.text}</p>

          {furnitureList.map((item) => (
            <div key={item.id} className={styles.contantItem}>
              <Image src={tool} alt='icone' />
              <div className={styles.contentItemText}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}

          <p className={styles.textBottom}>{dictionary.furniture.textBottom}</p>
          <div className={styles.button}>
            <FurnitureButton dictionary={dictionary} />
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={image} alt='image' width={504} />
      </div>
    </div>
  )
}
