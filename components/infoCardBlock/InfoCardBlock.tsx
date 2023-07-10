import InfoCard from '@/ui/infoCard/InfoCard'
import styles from './InfoCardBlok.module.scss'

import routes from '@/utils/routes'
import { Locale } from '@/i18n-config'

type Props = {
  dictionary: any
  lang: Locale
}

export default function InfoCardBlock({ dictionary, lang }: Props) {
  const infoCardList = [
    {
      id: 1,
      title: dictionary.infoCard.cardOne,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: routes.buildCard,
      buttonTitle: dictionary.infoCard.infoButton,
    },
    {
      id: 2,
      title: dictionary.infoCard.cardTwo,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: routes.equipmentCard,
      buttonTitle: dictionary.infoCard.infoButton,
    },
    {
      id: 3,
      title: dictionary.infoCard.cardThree,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: routes.metalCard,
      buttonTitle: dictionary.infoCard.infoButton,
    },
    {
      id: 4,
      title: dictionary.infoCard.cardTwo,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: routes.equipCard,
      buttonTitle: dictionary.infoCard.infoButton,
    },
    {
      id: 5,
      title: dictionary.infoCard.cardFifth,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: routes.windowCard,
      buttonTitle: dictionary.infoCard.infoButton,
    },
    {
      id: 6,
      title: dictionary.infoCard.cardSixth,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
          text={card.text}
          link={card.link}
          buttonText={card.buttonTitle}
        />
      ))}
    </section>
  )
}
