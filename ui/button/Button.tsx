import styles from './Button.module.scss'

type Props = {
  title: string
  width: number
  height: number
}

export default function Button({ title, width, height }: Props) {
  return (
    <div className={styles.root} style={{ width, height }}>
      {title}
    </div>
  )
}
