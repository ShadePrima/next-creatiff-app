'use client'

import { scrollToForm } from '@/utils/scrollToForm'
import Button from '../../ui/button/Button'

type Props = {
  dictionary: any
}

export default function ContactBlockButton({ dictionary }: Props) {
  return (
    <Button onClick={scrollToForm} title={dictionary.contactBlock.button} />
  )
}
