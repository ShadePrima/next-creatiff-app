import Image from 'next/image'

import icon from '../../assets/icons/email.svg'
import logo from '../../assets/icons/logo.svg'

import styles from './Footer.module.scss'

import { footerContactList } from '../../helpers/footerContactList'

export default function Footer() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Зворотній в’язок</h1>

        <div className={styles.contacts}>
          {footerContactList.map((item) => (
            <div key={item.id} className={styles.contactItem}>
              <Image src={item.icon} alt='icon' />
              <p className={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.logoRow}>
          <div className={styles.logo}>
            <Image src={logo} alt='logo' width={48} height={48} />
            <h2>Creatiff - realizamos ideas</h2>
          </div>

          <h2 className={styles.author}>
            © 2022 Creatiff. All Rights Reserved.
          </h2>
        </div>
      </div>
    </div>
  )
}