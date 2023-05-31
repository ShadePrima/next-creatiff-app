import styles from './page.module.scss'

export const metadata = {
  title: 'Виробництво металоконструкцій',
  description: 'CREATIFF',
}

export default function Equipment() {
  return (
    <div className={styles.root}>
      <div className='container'>
        {/* <div className={styles.image}>
          <Image src={image1} alt='build' />
        </div> */}
        <div className={styles.textBlock}>
          <h1>Виробництво металоконструкцій</h1>
        </div>
      </div>
    </div>
  )
}
