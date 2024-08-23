import Number from '@/ui/number/Number'
import ChangeImage from '@/ui/changeImage/ChangeImage'
import CompanyButton from '../buttons/CompanyButton'
import styles from './Company.module.scss'

type Props = {
  dictionary: any
}

export default function Company({ dictionary }: Props) {

 
  if (!dictionary?.number) {
    return null; 
  }

  const numberList = [
    { id: 1, title: '9k', text: dictionary.number.cardOne },
    { id: 2, title: '2k', text: dictionary.number.cardTwo },
    { id: 3, title: '28', text: dictionary.number.cardThree },
  ]
  console.log('dictionary', dictionary)

  return (
    <section className={styles.root}>
      <div className='container'>
        <div className={`${styles.contentRow} ${'flex-center'}`}>
          <div className={styles.contenText}>
            <h1 data-aos='fade-right'>
              STAR CREATIFF <br /> {dictionary['company'].title}
            </h1>

            <p className={styles.text}>{dictionary.company.description}</p>
            <p className={styles.text}>{dictionary.company.description_2}</p>

            <div className={styles.button}>
              <CompanyButton dictionary={dictionary} />
            </div>

            <div className={`${'flex-between'} ${styles.numbers}`}>
              {numberList.map((number: any) => (
                <Number
                  key={number.id}
                  title={number.title}
                  text={number.text}
                />
              ))}
            </div>
          </div>

          <div className={styles.contentImage}>
            <ChangeImage />
          </div>
        </div>
      </div>
    </section>
  )
}
