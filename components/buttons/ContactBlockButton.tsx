'use client'

import { scrollToForm } from '@/utils/scrollToForm'
import Button from '../../ui/button/Button'

export default function ContactBlockButton() {
  return (
    <Button
      onClick={scrollToForm}
      title="Зв'язатись з консультантом"
      maxWidth={399}
      minHeight={56}
    />
  )
}
