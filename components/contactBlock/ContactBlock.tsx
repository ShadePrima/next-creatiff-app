import Button from '@/ui/button/Button'
import styles from './ContactBlock.module.scss'
import ContactBlockButton from '../buttons/ContactBlockButton'

export default function ContactBlock() {
  return (
    <section className={styles.root}>
      <div className='container'>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Вас зацікавили наші пропозиції?</h1>
          <ContactBlockButton />
        </div>
      </div>
    </section>
  )
}
