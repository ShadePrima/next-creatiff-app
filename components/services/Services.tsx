import Image from 'next/image'

import Catalog from '../catalog/Catalog'

import image from '../../assets/image/serveces-image.png'
import styles from './Services.module.scss'

type ServicesProps = {
  dictionary: any
}

export default function Services({ dictionary }: ServicesProps) {
  if (!dictionary?.contactBlock) {
    return null; 
  }
  return (
    <section className={styles.root}>
      <Image src={image} alt='Kitchen' width={465} height={674} />
      <div className={styles.content}>
        <h1 className={styles.title}>{dictionary.services.title}</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Catalog dictionary={dictionary} />
      </div>
    </section>
  )
}
