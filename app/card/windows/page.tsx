import styles from './page.module.scss'

export const metadata = {
  title: 'Вікна та двері',
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
          <h1>Вікна та двері</h1>
        </div>
      </div>
    </div>
  )
}
