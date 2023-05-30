'use client'

import { scrollToForm } from '@/utils/scrollToForm'
import Button from '../../ui/button/Button'

export default function FurnitureButton() {
  return (
    <Button
      onClick={scrollToForm}
      title='Зв’язатися з нами'
      maxWidth={526}
      minHeight={56}
    />
  )
}
