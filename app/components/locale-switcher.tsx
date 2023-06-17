'use client'

import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '../../i18n-config'

import styles from './LocaleSwitcher.module.scss'
import React from 'react'
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'

export default function LocaleSwitcher() {
  const router = useRouter()

  console.log(router, 'router')
  const [language, setLanguage] = React.useState('')

  console.log(language, 'language')

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string)
  }

  React.useEffect(() => {
    if (language) {
      router.push(`/${language}`)
    }
  }, [language, router])

  const pathName = usePathname()

  React.useEffect(() => {
    // Set the initial language state based on the current language in the URL
    const segments = pathName.split('/')
    if (segments.length > 1) {
      setLanguage(segments[1])
    }
  }, [pathName])

  console.log(pathName, 'pathName')

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <>
      <Box sx={{ minWidth: 80 }} className={styles.box}>
        <FormControl className={styles.formControl} fullWidth>
          <InputLabel id='demo-simple-select-label' className={styles.label}>
            Lang
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={language}
            label='Lang'
            onChange={handleChange}
            className={styles.select}
          >
            <MenuItem className={styles.menuItem} value={'en'}>
              En
            </MenuItem>
            <MenuItem className={styles.menuItem} value={'uk'}>
              Uk
            </MenuItem>
            <MenuItem className={styles.menuItem} value={'es'}>
              Es
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* <div>
        <p>Lang</p>
        <ul>
          {i18n.locales.map((locale) => {
            return (
              <li key={locale}>
                <Link href={redirectedPathName(locale)}>{locale}</Link>
              </li>
            )
          })}
        </ul>
      </div> */}
    </>
  )
}
