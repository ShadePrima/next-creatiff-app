import styles from './Button.module.scss'

type Props = {
  title: string
  maxWidth: number
  minHeight: number
}

export default function Button({ title, maxWidth, minHeight }: Props) {
  return (
    <div className={styles.root} style={{ maxWidth, minHeight }}>
      {title}
    </div>
  )
}
