import styles from './Button.module.scss'

type Props = {
  title: string
  maxWidth: number
  minHeight: number
  type?: 'button' | 'submit' | 'reset' | undefined
}

export default function Button({ title, maxWidth, minHeight, type }: Props) {
  console.log(type, 'type')
  return (
    <button type={type} className={styles.root} style={{ maxWidth, minHeight }}>
      {title}
    </button>
  )
}
