import styles from './Input.module.scss'

type Props = {
  title: string
  symbol: string
  type: string
  placeholder: string
}

export default function Input({ title, symbol, type, placeholder }: Props) {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>
        {title} <span>{symbol}</span>
      </h2>
      <input className={styles.input} type={type} placeholder={placeholder} />
    </div>
  )
}
