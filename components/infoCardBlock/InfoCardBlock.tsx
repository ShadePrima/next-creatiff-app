import InfoCard from '@/ui/infoCard/InfoCard'
import styles from './InfoCardBlok.module.scss'

import { infoCardList } from '../../helpers/infoCardList'

export default function InfoCardBlock() {
  return (
    <div className={styles.root}>
      {infoCardList.map((card) => (
        <InfoCard key={card.id} title={card.title} text={card.text} />
      ))}
    </div>
  )
}
