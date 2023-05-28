'use client'

import Image from 'next/image'

import doorIcon from '../../assets/icons/door-green.svg'
import arrowBottom from '../../assets/icons/arrow-bottom.svg'
import arrowUp from '../../assets/icons/arrow-up.svg'

import styles from './CatalogItem.module.scss'
import React from 'react'

type Props = {
  title: string
  text: string
}

export default function CatalogItem({ title, text }: Props) {
  const [isOpen, setIsOpen] = React.useState<any>(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={styles.root} onClick={handleClick}>
      <div className={styles.topContent}>
        <div
          className={`${'flex-between'} ${'gap-24'} ${styles.flexContainer}`}
        >
          <Image src={doorIcon} alt='Icon' />
          <h2 className={styles.title}>{title}</h2>
        </div>
        <Image src={isOpen ? arrowBottom : arrowUp} alt='arrw-bottom' />
      </div>
      {isOpen && <p className={styles.bottomContent}>{text}</p>}
    </div>
  )
}
