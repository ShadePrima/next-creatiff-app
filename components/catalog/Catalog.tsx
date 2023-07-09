'use client'

import CatalogItem from '@/ui/catalogItem/CatalogItem'
import styles from './Catalog.module.scss'

type CatalogProps = {
  dictionary: any
}

export default function Catalog({ dictionary }: CatalogProps) {
  const catalogList = [
    {
      id: 1,
      title: dictionary.catalog.cardOne.title,
      text: dictionary.catalog.cardOne.text,
    },
    {
      id: 2,
      title: dictionary.catalog.cardTwo.title,
      text: dictionary.catalog.cardTwo.text,
    },
    {
      id: 3,
      title: dictionary.catalog.cardThree.title,
      text: dictionary.catalog.cardThree.text,
    },
    {
      id: 4,
      title: dictionary.catalog.cardFour.title,
      text: dictionary.catalog.cardFour.text,
    },
  ]

  return (
    <section className={styles.root}>
      {catalogList.map((item) => (
        <CatalogItem key={item.id} title={item.title} text={item.text} />
      ))}
    </section>
  )
}
