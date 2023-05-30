import { ChangeEventHandler } from 'react'
import styles from './Input.module.scss'

type Props = {
  name: string
  title: string
  symbol: string
  type: string
  placeholder: string
  value?: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function Input({
  name,
  title,
  symbol,
  type,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>
        {title} <span>{symbol}</span>
      </h2>
      <input
        name={name}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
