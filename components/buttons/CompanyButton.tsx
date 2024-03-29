'use client'

import Button from '@/ui/button/Button'
import { scrollToForm } from '@/utils/scrollToForm'

type ButtonProps = {
  dictionary: any
}

export default function CompanyButton({ dictionary }: ButtonProps) {
  return <Button onClick={scrollToForm} title={dictionary.company.button} />
}
