'use client'

import Button from '@/ui/button/Button'
import { scrollToForm } from '@/utils/scrollToForm'

export default function CompanyButton() {
  return (
    <Button
      onClick={scrollToForm}
      title='Реалізувати ідею'
      maxWidth={268}
      minHeight={56}
    />
  )
}
