'use client'

import React from 'react'

import Image from 'next/image'
import image1 from '../../assets/image/header1.png'
import image2 from '../../assets/image/header2.png'
import styles from './ChangeImage.module.scss'

const images = [image1, image2]

export default function ChangeImage() {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % images.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [index])

  const currentImage = images[index]

  return (
    <Image
      className={styles.image}
      src={currentImage}
      alt='build'
      width={520}
      height={670}
    />
  )
}
