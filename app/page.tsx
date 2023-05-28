import Image from 'next/image'
import styles from './page.module.scss'
import Company from '@/components/company/Company'
import InfoCardBlock from '@/components/infoCardBlock/InfoCardBlock'

export default function Home() {
  return (
    <main className={styles.root}>
      <Company />
      <div className='container'>
        <InfoCardBlock />
      </div>
    </main>
  )
}
