import InfoCard from '@/ui/infoCard/InfoCard'
import styles from './InfoCardBlok.module.scss'

import { infoCardList } from '../../helpers/infoCardList'

export default function InfoCardBlock() {
  return (
    <section className={styles.root}>
      {infoCardList.map((card) => (
        <InfoCard key={card.id} title={card.title} text={card.text} />
      ))}
    </section>
  )
}
