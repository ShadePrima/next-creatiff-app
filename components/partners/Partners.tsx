import styles from './Partners.module.scss'
import partnerImg from '../../assets/image/partners.png'
import Image from 'next/image'
import React from 'react'

type Props = {
  dictionary: any
}

export default function Partners({ dictionary }: Props) {
  return (
    <section className={styles.root}>
      <h1>{dictionary.partners.title}:</h1>
      <div className={styles.imgRow}>
        <Image src={partnerImg} alt='partner' />
        <Image src={partnerImg} alt='partner' />
        <Image src={partnerImg} alt='partner' />
        <Image src={partnerImg} alt='partner' />
        <Image src={partnerImg} alt='partner' />
        <Image src={partnerImg} alt='partner' />
      </div>
    </section>
  )
}
