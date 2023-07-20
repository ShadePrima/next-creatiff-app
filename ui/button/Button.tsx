import { MouseEventHandler } from 'react'
import styles from './Button.module.scss'

type Props = {
  title: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ title, type, onClick }: Props) {
  return (
    <button onClick={onClick} type={type} className={styles.root}>
      {title}
    </button>
  )
}
