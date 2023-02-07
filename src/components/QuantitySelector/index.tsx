import { useState } from 'react'
import { IconButton } from '../Button'
import { Text } from '../Text'
import { StyledQuantitySelector } from './styled'

export const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(0)
  return (
    <StyledQuantitySelector>
      <IconButton
        bgColor="backgroundDark"
        icon="minus"
        onClick={() => setQuantity(quantity - 1)}
      />
      <Text bold>{quantity}</Text>
      <IconButton
        bgColor="backgroundDark"
        icon="plus"
        onClick={() => setQuantity(quantity + 1)}
      />
    </StyledQuantitySelector>
  )
}
