import Button from '@/ui/button/Button'
import styles from './ContactBlock.module.scss'

export default function ContactBlock() {
  return (
    <section className={styles.root}>
      <div className='container'>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Вас зацікавили наші пропозиції?</h1>
          <Button title="Зв'язатись з консультантом" width={399} height={56} />
        </div>
      </div>
    </section>
  )
}
