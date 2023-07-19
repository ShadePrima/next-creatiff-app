import InfoCard from '@/ui/infoCard/InfoCard'
import styles from './InfoCardBlok.module.scss'

import routes from '@/utils/routes'
import { Locale } from '@/i18n-config'

import homeGreen from '../../assets/icons/home-green.svg'
import industry from '../../assets/icons/industry.svg'
import anvil from '../../assets/icons/anvil.svg'
import worker from '../../assets/icons/worker.svg'
import window from '../../assets/icons/window.svg'

type Props = {
  dictionary: any
  lang: Locale
}

export default function InfoCardBlock({ dictionary, lang }: Props) {
  const infoCardList = [
    {
      id: 1,
      icon: homeGreen,
      title: dictionary.infoCard.cardOne.title,
      text: dictionary.infoCard.cardOne.text,
      link: routes.buildCard,
      buttonTitle: dictionary.infoCard.infoButton,
    },
    {
      id: 2,
      icon: industry,
      title: dictionary.infoCard.cardTwo.title,
      text: dictionary.infoCard.cardTwo.text,
      link: routes.equipmentCard,
      buttonTitle: dictionary.infoCard.infoButton,
    },
    {
      id: 3,
      icon: anvil,
      title: dictionary.infoCard.cardThree.title,
      text: dictionary.infoCard.cardThree.text,
      link: routes.metalCard,
      buttonTitle: dictionary.infoCard.infoButton,
    },
    {
      id: 4,
      icon: industry,
      title: dictionary.infoCard.cardTwo.title,
      text: dictionary.infoCard.cardTwo.text,
      link: routes.equipCard,
      buttonTitle: dictionary.infoCard.infoButton,
    },
    {
      id: 5,
      icon: window,
      title: dictionary.infoCard.cardFifth.title,
      text: dictionary.infoCard.cardFifth.text,
      link: routes.windowCard,
      buttonTitle: dictionary.infoCard.infoButton,
    },
    {
      id: 6,
      icon: worker,
      title: dictionary.infoCard.cardSixth.title,
      text: dictionary.infoCard.cardSixth.text,
      link: routes.generalCard,
      buttonTitle: dictionary.infoCard.infoButton,
    },
  ]

  return (
    <section className={styles.root}>
      {infoCardList.map((card) => (
        <InfoCard
          key={card.id}
          title={card.title}
          icon={card.icon}
          text={card.text}
          link={card.link}
          buttonText={card.buttonTitle}
        />
      ))}
    </section>
  )
}
