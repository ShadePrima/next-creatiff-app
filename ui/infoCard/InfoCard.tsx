import Image from 'next/image'
import Link from 'next/link'
import styles from './InfoCard.module.scss'

type Props = {
  title: string
  icon: string
  text: string
  link: string
  buttonText: string
}

export default function InfoCard({
  icon,
  title,
  text,
  link,
  buttonText,
}: Props) {
  return (
    <div className={styles.root}>
      <Image src={icon} alt='home' />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <Link href={link}>
        <button className={styles.button}>{buttonText}</button>
      </Link>
    </div>
  )
}
