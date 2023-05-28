import styles from './Number.module.scss'

type Props = {
  title: string
  text: string
}

export default function Number({ title, text }: Props) {
  return (
    <div className={styles.root}>
      <div className={`${'flex-center'}`}>
        <h3>{title}</h3>
        <div className={styles.plus}>+</div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
