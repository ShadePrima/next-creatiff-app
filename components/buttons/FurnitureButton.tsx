'use client'

import { scrollToForm } from '@/utils/scrollToForm'
import Button from '../../ui/button/Button'

type ButtonProps = {
  dictionary: any
}

export default function FurnitureButton({ dictionary }: ButtonProps) {
  return <Button onClick={scrollToForm} title={dictionary.furniture.button} />
}
