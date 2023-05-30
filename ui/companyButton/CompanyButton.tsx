'use client'

import { scrollToForm } from '@/utils/scrollToForm'
import Button from '../button/Button'

export default function CompanyButton() {
  return (
    <Button
      onClick={scrollToForm}
      title='Реалізувати ідею'
      maxWidth={263}
      minHeight={56}
    />
  )
}
