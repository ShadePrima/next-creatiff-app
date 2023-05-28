import Image from 'next/image'
import styles from './page.module.scss'
import Company from '@/components/company/Company'

export default function Home() {
  return (
    <main className={styles.root}>
      <Company />
    </main>
  )
}
