import Image from 'next/image'

import homeIcon from '../../assets/icons/home-green.svg'
import styles from './InfoCard.module.scss'
import Link from 'next/link'

type Props = {
  title: string
  text: string
  link: string
}

export default function InfoCard({ title, text, link }: Props) {
  return (
    <div className={styles.root}>
      <Image src={homeIcon} alt='home' />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <Link href={link}>
        <button className={styles.button}>Читати далі</button>
      </Link>
    </div>
  )
}
