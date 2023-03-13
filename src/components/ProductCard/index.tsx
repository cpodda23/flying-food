import { Link } from 'react-router-dom'
import { ValueType } from '../../api/types'
import { Size } from '../../style/theme'
import { IconButton } from '../Button'
import { ProductDescription } from './ProductDescription'
import { ProductThumb } from './ProductThumb'
import { StyledCard, StyledShopButton } from './styled'

type Props = {
  id?: string
  imgSrc: string
  name: string
  isAvailable: boolean
  rating: number
  price: ValueType
  size?: Size
  linkUrl?: string
  isNew: boolean
  isDisabled: boolean
  onClick?: () => void
}

export const priceSymbols = {
  USD: '$',
  EUR: '€',
  JPY: '¥'
} as any

export const ProductCard = ({
  imgSrc,
  name,
  rating,
  price,
  size = 'md',
  linkUrl,
  isAvailable,
  isNew,
  isDisabled,
  onClick
}: Props) => {
  const buttonSize = size === 'md' ? 'lg' : 'md'
  const content = (
    <>
      <ProductThumb size={size} src={imgSrc} isNew={isNew} alt={name} />
      <ProductDescription
        productName={name}
        stars={rating}
        price={`${priceSymbols[price.type]} ${price.value}`}
        isAvailable={isAvailable}
        size={size}
      />
    </>
  )

  return (
    <StyledCard size={size}>
      {linkUrl ? <Link to={linkUrl}>{content}</Link> : content}
      <StyledShopButton>
        <IconButton
          icon="bagShopping"
          size={buttonSize}
          color="textInverse"
          onClick={onClick}
          disabled={isDisabled}
        />
      </StyledShopButton>
    </StyledCard>
  )
}
