'use client'

import { usePathname, useRouter } from 'next/navigation'

import styles from './LocaleSwitcherCustom.module.scss'
import React from 'react'

import verticalLineIcone from '../../assets/icons/vertical-line.svg'
import globeIcone from '../../assets/icons/globe.svg'
import arrowDownIcone from '../../assets/icons/arrow-down.svg'
import checker from '../../assets/icons/checker.svg'
import checkerSelected from '../../assets/icons/checker-selected.svg'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import Image from 'next/image'

const selectedList = [
  {
    id: 1,
    value: 'es',
    title: 'Español',
    icon: checker,
    iconSelect: checkerSelected,
  },
  {
    id: 2,
    value: 'en',
    title: 'English',
    icon: checker,
    iconSelect: checkerSelected,
  },
  {
    id: 3,
    value: 'uk',
    title: 'Українська',
    icon: checker,
    iconSelect: checkerSelected,
  },
]

export default function LocaleSwitcherCustom() {
  const [open, setOpen] = React.useState(false)

  const router = useRouter()
  const [language, setLanguage] = React.useState('')
  const pathName = usePathname()

  React.useEffect(() => {
    // Set the initial language state based on the current language in the URL
    const segments = pathName.split('/')
    if (segments.length > 1) {
      const storedLanguage = localStorage.getItem('selectedLanguage')
      if (!storedLanguage) {
        setLanguage(segments[1])
        localStorage.setItem('selectedLanguage', segments[1])
      } else {
        setLanguage(storedLanguage)
      }
    }
  }, [pathName])

  // const handleChange = (event: SelectChangeEvent) => {
  //   const selectedLanguage = event.target.value as string
  //   setLanguage(selectedLanguage)
  //   localStorage.setItem('selectedLanguage', selectedLanguage)
  // }

  const redirectedPathName = () => {
    if (!pathName) return '/'
    const segments = pathName.split('/')

    const storedLanguage = localStorage.getItem('selectedLanguage')
    if (segments.length > 1 && storedLanguage) {
      segments[1] = storedLanguage
    }
    return segments.join('/')
  }

  React.useEffect(() => {
    if (language) {
      router.push(redirectedPathName())
    }
  }, [language])

  React.useEffect(() => {
    // Set the initial language state based on the current language in the URL
    const segments = pathName.split('/')
    if (segments.length > 1) {
      setLanguage(segments[1])
    }
  }, [pathName])

  const handleOpen = () => {
    setOpen(!open)
  }

  const selectLang = (selectId: number) => {
    if (selectId === 1) {
      setLanguage('es')
      localStorage.setItem('selectedLanguage', 'es')
    }

    if (selectId === 2) {
      setLanguage('en')
      localStorage.setItem('selectedLanguage', 'en')
    }

    if (selectId === 3) {
      setLanguage('uk')
      localStorage.setItem('selectedLanguage', 'uk')
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Image src={verticalLineIcone} alt='line' />
        <div className={styles.globeContainer}>
          <Image
            className={styles.globe}
            height={24}
            width={24}
            src={globeIcone}
            alt='globe'
          />
        </div>
        <button onClick={handleOpen} className='flex-center'>
          <p className={`${styles.lang} ${inter.className}`}>{language}</p>
          <Image className={styles.arrow} src={arrowDownIcone} alt='arrow' />
        </button>
      </div>

      {open && (
        <div className={`${styles.select} ${open ? styles.open : ''}`}>
          {selectedList.map((item) => (
            <div
              key={item.id}
              onClick={() => selectLang(item.id)}
              className={styles.selectItem}
            >
              <Image
                src={item.value === language ? item.iconSelect : item.icon}
                alt='checker'
              />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
