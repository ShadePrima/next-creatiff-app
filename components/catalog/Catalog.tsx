'use client'

import CatalogItem from '@/ui/catalogItem/CatalogItem'
import styles from './Catalog.module.scss'

import { catalogList } from '../../helpers/catalogList'

export default function Catalog() {
  return (
    <section className={styles.root}>
      {catalogList.map((item) => (
        <CatalogItem key={item.id} title={item.title} text={item.text} />
      ))}
    </section>
  )
}
