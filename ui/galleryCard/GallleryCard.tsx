import Image from 'next/image'

import image from '../../assets/image/gallery-card.png'
import styles from './GalleryCard.module.scss'

type Props = {
  title: string
}

export default function GalleryCard({ title }: Props) {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  )
}
