import ContactBlockButton from '../buttons/ContactBlockButton'

import styles from './ContactBlock.module.scss'

type ContactBlockProps = {
  dictionary: any
}

export default function ContactBlock({ dictionary }: ContactBlockProps) {
  return (
    <section className={styles.root}>
      <div className='container'>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>{dictionary.contactBlock.title}</h1>
          <div className={styles.button}>
            <ContactBlockButton dictionary={dictionary} />
          </div>
        </div>
      </div>
    </section>
  )
}
