import { Size } from '../../style/theme'
import { Rating } from '../Rating'
import { Text } from '../Text'
import { StyledProductDescription } from './styled'

type Props = {
  productName: string
  isAvailable: boolean
  stars: number
  price: string
  title?: string
  size?: Size
}

export const ProductDescription = ({
  productName,
  isAvailable,
  size,
  stars,
  price
}: Props) => {
  const textSize = size === 'sm' ? 'md' : 'lg'

  return (
    <StyledProductDescription direction="vertical" gap={size === 'sm' ? 8 : 14} centered>
      <Text capitalize bold size={textSize}>
        {productName}
      </Text>
      <Text bold color="lightGrey" size="sm">
        {isAvailable ? 'Available' : 'Not Avaible'}
      </Text>
      <Rating value={stars} />
      <Text size={textSize} bold>
        {price}
      </Text>
    </StyledProductDescription>
  )
}
