import { IconButton } from '../Button'
import { Text } from '../Text'
import { StyledQuantitySelector } from './styled'

type Props = {
  quantity: number
  max: number
  onClick: (q: number) => void
}
export const QuantitySelector = ({ quantity, max, onClick }: Props) => {
  const onDecrement = () => {
    if (quantity - 1 >= 0) onClick(quantity - 1)
  }
  const onIncrement = () => {
    if (quantity + 1 <= max) onClick(quantity + 1)
  }
  return (
    <StyledQuantitySelector>
      <IconButton bgColor="backgroundDark" icon="minus" onClick={onDecrement} />
      <Text bold>{quantity}</Text>
      <IconButton bgColor="backgroundDark" icon="plus" onClick={onIncrement} />
    </StyledQuantitySelector>
  )
}
