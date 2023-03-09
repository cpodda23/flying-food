import { IconButton } from '../Button'
import { Text } from '../Text'
import { StyledQuantitySelector } from './styled'

type Props = {
  quantity: number
  max?: number
  min?: number
  onClick: (q: number) => void
}
export const QuantitySelector = ({ quantity, max, min = 0, onClick }: Props) => {
  const onDecrement = () => {
    if (!min || quantity - 1 >= min) onClick(quantity - 1)
  }

  const onIncrement = () => {
    if (!max || quantity + 1 <= max) onClick(quantity + 1)
  }
  return (
    <StyledQuantitySelector>
      <IconButton
        bgColor="backgroundDark"
        icon="minus"
        onClick={onDecrement}
        disabled={quantity === min}
      />
      <Text bold>{quantity}</Text>
      <IconButton
        bgColor="backgroundDark"
        icon="plus"
        onClick={onIncrement}
        disabled={quantity === max}
      />
    </StyledQuantitySelector>
  )
}
