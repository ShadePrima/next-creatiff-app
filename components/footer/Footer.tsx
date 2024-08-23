import Image from 'next/image'
import logo from '../../assets/icons/logo.svg'
import styles from './Footer.module.scss'

import { footerContactList } from '../../helpers/footerContactList'

type FooterProps = {
  dictionary: any
}

export default function Footer({ dictionary }: FooterProps) {
  if (!dictionary || !dictionary.footer) {
    return null;  
  }

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{dictionary.footer.title}</h1>

        <div className={styles.contacts}>
          {footerContactList.map((item) => (
            <div key={item.id} className={styles.contactItem}>
              <Image src={item.icon} alt='icon' />
              <a href={item.link} target='_blank' className={styles.text}>
                {item.text}
              </a>
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
