import InfoCard from '@/ui/infoCard/InfoCard'
import routes from '@/utils/routes'
import { Locale } from '@/i18n-config'
import homeGreen from '../../assets/icons/home-green.svg'
import industry from '../../assets/icons/industry.svg'
import anvil from '../../assets/icons/anvil.svg'
import worker from '../../assets/icons/worker.svg'
import window from '../../assets/icons/window.svg'
import blind from '@/assets/icons/blind.svg'
import radiator from '@/assets/icons/radiator.svg'
import styles from './InfoCardBlok.module.scss'

type Props = {
  dictionary: any
  lang: Locale
}

export default function InfoCardBlock({ dictionary }: Props) {
  if (!dictionary) {
    return null; 
  }
  
  const infoCardList = [
    {
      id: 1,
      icon: anvil,
      title: dictionary.infoCard.cardOne.title,
      text: dictionary.infoCard.cardOne.text,
      link: routes.article_1,
      buttonTitle: dictionary.infoCard.infoButton,
    },
    {
      id: 2,
      icon: worker,
      title: dictionary.infoCard.cardTwo.title,
      text: dictionary.infoCard.cardTwo.text,
      link: routes.article_2,
      buttonTitle: dictionary.infoCard.infoButton,
    },
    {
      id: 3,
      icon: homeGreen,
      title: dictionary.infoCard.cardThree.title,
      text: dictionary.infoCard.cardThree.text,
      link: routes.article_3,
      buttonTitle: dictionary.infoCard.infoButton,
    },
    {
      id: 4,
      icon: blind,
      title: dictionary.infoCard.cardFourth.title,
      text: dictionary.infoCard.cardFourth.text,
      link: routes.article_4,
      buttonTitle: dictionary.infoCard.infoButton,
    },
    {
      id: 5,
      icon: industry,
      title: dictionary.infoCard.cardFifth.title,
      text: dictionary.infoCard.cardFifth.text,
      link: routes.article_5,
      buttonTitle: dictionary.infoCard.infoButton,
    },
    {
      id: 6,
      icon: radiator,
      title: dictionary.infoCard.cardSixth.title,
      text: dictionary.infoCard.cardSixth.text,
      link: routes.article_6,
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
