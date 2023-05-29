import GalleryCard from '@/ui/galleryCard/GallleryCard'

import { galleryList } from '../../helpers/galleryList'

import styles from './Galllery.module.scss'

export default function Galllery() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Галерея наших робіт</h1>
      <div className={styles.wrapper}>
        {galleryList.map((item) => (
          <GalleryCard key={item.id} title={item.title} />
        ))}
      </div>
    </div>
  )
}
