import React from 'react'
import logoIcon from '../../assets/icons/Logo.svg'
import styles from './Logo.module.scss'

const LogoFooter = () => {
  return (
    <div className={styles.logoItems}>
      <img src={logoIcon} alt='Logo' />
      <p className={styles.logoTitle}>Creatiff - realizamos ideas</p>
    </div>
  )
}

export default LogoFooter
