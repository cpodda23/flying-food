import { Link } from 'react-router-dom'
import { Size } from '../../style/theme'
import { IconButton } from '../Button'
import { ProductDescription } from './ProductDescription'
import { ProductThumb } from './ProductThumb'
import { StyledCard, StyledShopButton } from './styled'

type Props = {
  id?: string
  imgSrc: string
  name: string
  isAvailable?: boolean
  rating: number
  price: string
  size?: Size
  linkUrl: string
  onClick?: () => void
}

export const ProductCard = ({
  imgSrc,
  name,
  rating,
  price,
  size = 'md',
  linkUrl,
  onClick
}: Props) => {
  const buttonSize = size === 'md' ? 'lg' : 'md'
  return (
    <Link to={linkUrl}>
      <StyledCard size={size}>
        <ProductThumb size={size} src={imgSrc} isNew alt={name} />
        <ProductDescription
          productName={name}
          stars={rating}
          price={price}
          isAvailable
          size={size}
        />
        <StyledShopButton>
          <IconButton
            icon="bagShopping"
            size={buttonSize}
            color="textInverse"
            onClick={onClick}
          />
        </StyledShopButton>
      </StyledCard>
    </Link>
  )
}
