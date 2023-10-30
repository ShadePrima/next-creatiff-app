import Image from 'next/image'
import logo from '../../assets/icons/logo.svg'
import email from '../../assets/icons/email.svg'
import telephone from '../../assets/icons/telephone.svg'
import { segoeScript } from '../../styles/fonts'
import Link from 'next/link'
import LocaleSwitcherCustom from '../locale-switcher/LocaleSwitcherCustom'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.root}>
      <div className='container'>
        <div className={`${styles.contentRow} ${'flex-between'}`}>
          <Link href='/'>
            <div className={`${styles.logoIconRow} ${'flex-between'}`}>
              <Image
                className={styles.logoIcon}
                src={logo}
                alt='Logo'
                width={104}
                height={104}
              />
              <h1 className={styles.logoText}>Creatiff - realizamos ideas</h1>
            </div>
          </Link>

          <div className={`${styles.contactRow} ${'flex-between'}`}>
            <div className={`${styles.email} ${'flex-between'}`}>
              <Image src={email} alt='Email' />
              <a href='mailto:star.creatiff@gmail.com'>
                star.creatiff@gmail.com
              </a>
            </div>

            <div className={`${styles.tel} ${'flex-between'}`}>
              <Image src={telephone} alt='Telephone' />
              <a href='tel:951-392-250'>951 392 250</a>
            </div>

            <LocaleSwitcherCustom />
          </div>
        </div>
      </div>
    </header>
  )
}
