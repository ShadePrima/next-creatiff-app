import styles from './Partners.module.scss'
import partnerImg from '../../assets/image/partners.png'
import Image from 'next/image'

export default function Partners() {
  return (
    <div className={styles.root}>
      <h1>Наші партери:</h1>
      <div className={styles.imgRow}>
        <Image src={partnerImg} alt='partner' />
        <Image src={partnerImg} alt='partner' />
        <Image src={partnerImg} alt='partner' />
        <Image src={partnerImg} alt='partner' />
        <Image src={partnerImg} alt='partner' />
        <Image src={partnerImg} alt='partner' />
      </div>
    </div>
  )
}
