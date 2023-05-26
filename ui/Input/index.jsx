import React from 'react'
import styles from './Input.module.scss'

const Input = ({
  id,
  name,
  type,
  title,
  placeholder,
  value,
  onChange,
  disabled,
}) => {
  return (
    <div className={styles.root}>
      <img src={title} alt='Name' className={styles.titleIcon} />
      <input
        disabled={disabled}
        className={styles.input}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
