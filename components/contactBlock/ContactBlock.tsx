import Button from '@/ui/button/Button'
import styles from './ContactBlock.module.scss'
import ContactBlockButton from '../buttons/ContactBlockButton'

type ContactBlockProps = {
  dictionary: any
}

export default function ContactBlock({ dictionary }: ContactBlockProps) {
  return (
    <section className={styles.root}>
      <div className='container'>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>{dictionary.contactBlock.title}</h1>
          <ContactBlockButton dictionary={dictionary} />
        </div>
      </div>
    </section>
  )
}
