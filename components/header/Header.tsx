import Image from 'next/image'

import styles from './Header.module.scss'
import logo from '../../assets/icons/logo.svg'
import email from '../../assets/icons/email.svg'
import telephone from '../../assets/icons/telephone.svg'

import { segoeScript } from '../../styles/fonts'

export default function Header() {
  return (
    <header className={styles.root}>
      <div className='container'>
        <div className={`${styles.contentRow} ${'flex-between'}`}>
          <div className={`${styles.logoIconRow} ${'flex-between'}`}>
            <Image
              className={styles.logoIcon}
              src={logo}
              alt='Logo'
              width={104}
              height={104}
            />
            <h1 className={`${styles.logoText} ${segoeScript}`}>
              Creatiff - realizamos ideas
            </h1>
          </div>

          <div className={`${styles.contactRow} ${'flex-between'}`}>
            <div className={`${styles.email} ${'flex-between'}`}>
              <Image src={email} alt='Email' />
              <p>star.creatiff@gmail.com</p>
            </div>

            <div className={`${styles.tel} ${'flex-between'}`}>
              <Image src={telephone} alt='Telephone' />
              <p>951 392 250</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
