'use client'
import React from 'react'
import axios from 'axios'

import Input from '@/ui/input/Input'
import Button from '@/ui/button/Button'

import styles from './ContactForm.module.scss'

type ContactFormProps = {
  dictionary: any
}

export default function ContactForm({ dictionary }: ContactFormProps) {
  
  const [form, setForm] = React.useState<any>({
    name: '',
    email: '',
    tel: '',
    message: '',
  })

  if (!dictionary) {
    return null; 
  }

  const handleInput = (event: any) => {
    const { target } = event
    const value = target.value

    setForm((prevForm: any) => ({
      ...prevForm,
      [target.name]: value,
    }))
  }

  const handSubmit = async (event: any) => {
    event.preventDefault()

    try {
      const token = '88e021c16c9e26ef55cdae66219a2f81a6665534'

      const response = await axios.post('http://web:8000/feedback/', form, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h1 id='contactForm' className={styles.title}>
          {dictionary.contactForm.title}
        </h1>
        <form onSubmit={handSubmit}>
          <div className={styles.inputBlock}>
            <Input
              name='name'
              title={dictionary.contactForm.name}
              symbol='*'
              type='text'
              placeholder={dictionary.contactForm.namePlaceholder}
              value={form.name}
              onChange={handleInput}
            />
            <Input
              name='email'
              title={dictionary.contactForm.email}
              symbol='*'
              type='email'
              placeholder='email@example.com'
              value={form.email}
              onChange={handleInput}
            />
            <Input
              name='tel'
              title={dictionary.contactForm.tel}
              symbol=''
              type='tel'
              placeholder='+34 951 392 250'
              value={form.tel}
              onChange={handleInput}
            />
          </div>

          <div className={styles.textArea}>
            <h2>{dictionary.contactForm.leter}</h2>
            <textarea
              name='message'
              placeholder={dictionary.contactForm.leterPlaceholder}
              value={form.message}
              onChange={handleInput}
            />
          </div>
          <div className={styles.button}>
            <Button type='submit' title={dictionary.contactForm.button} />
          </div>
        </form>
      </div>
    </div>
  )
}
