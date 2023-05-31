import styles from './page.module.scss'

export const metadata = {
  title: 'Продаж промислового обладнання',
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
          <h1>Продаж промислового обладнання</h1>
        </div>
      </div>
    </div>
  )
}
