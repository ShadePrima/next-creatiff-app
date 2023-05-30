import { MouseEventHandler } from 'react'
import styles from './Button.module.scss'

type Props = {
  title: string
  maxWidth: number
  minHeight: number
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({
  title,
  maxWidth,
  minHeight,
  type,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={styles.root}
      style={{ maxWidth, minHeight }}
    >
      {title}
    </button>
  )
}
