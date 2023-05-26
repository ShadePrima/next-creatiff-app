import React from 'react'
import styles from './Button.module.scss'

const Button = ({ title, width, height }) => {
  const stylesBtn = {
    width: width,
    height: height,
    // padding: '7px',
  }

  return (
    <button className={styles.root} style={stylesBtn}>
      {title}
    </button>
  )
}

export default Button
