import GalleryCard from '@/ui/galleryCard/GallleryCard'

import styles from './Galllery.module.scss'

type GalleryProps = {
  dictionary: any
}

export default function Gallery({ dictionary }: GalleryProps) {
  const galleryList = [
    { id: 1, title: dictionary.gallery.button },
    { id: 2, title: dictionary.gallery.button },
    { id: 3, title: dictionary.gallery.button },
    { id: 4, title: dictionary.gallery.button },
    { id: 5, title: dictionary.gallery.button },
    { id: 6, title: dictionary.gallery.button },
  ]

  return (
    <section className={styles.root}>
      <h1 className={styles.title}>{dictionary.gallery.title}</h1>
      <div className={styles.wrapper}>
        {galleryList.map((item) => (
          <GalleryCard key={item.id} title={item.title} />
        ))}
      </div>
    </section>
  )
}
