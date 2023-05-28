import Image from 'next/image'

import Catalog from '../catalog/Catalog'

import image from '../../assets/image/serveces-image.png'
import styles from './Services.module.scss'

export default function Services() {
  return (
    <div className={styles.root}>
      <Image src={image} alt='Kitchen' width={465} height={674} />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Також ми маємо все необхідне для вашого дому
        </h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Catalog />
      </div>
    </div>
  )
}
