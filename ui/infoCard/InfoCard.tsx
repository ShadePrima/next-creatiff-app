import Image from 'next/image'

import homeIcon from '../../assets/icons/home-green.svg'
import styles from './InfoCard.module.scss'

type Props = {
  title: string
  text: string
}

export default function InfoCard({ title, text }: Props) {
  return (
    <div className={styles.root}>
      <Image src={homeIcon} alt='home' />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <button className={styles.button}>Читати далі</button>
    </div>
  )
}
