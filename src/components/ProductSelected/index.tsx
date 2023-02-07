import { ProductThumb } from '../ProductCard/ProductThumb'
import { Rating } from '../Rating'
import { SectionTitle } from '../SectionTitle'
import { Tag } from '../Tag'
import { Text } from '../Text'
import { StyledProductSelected, StyledProductSelectedContainer } from './styled'

type Props = {
  imgSrc: string
  isNew?: boolean
  productName: string
  stars: number
  description: string
  productTag: string[]
}

export const ProductSelected = ({
  imgSrc,
  isNew,
  productName,
  stars,
  description,
  productTag
}: Props) => {
  return (
    <StyledProductSelectedContainer>
      <StyledProductSelected size="md">
        <ProductThumb size="sm" src={imgSrc} isNew={isNew} alt={productName} />
        <SectionTitle
          main={productName.split(' ')[0]}
          secondary={productName.split(' ')[1]}
          // usare altro metodo
        />
        {productTag.map((tag) => (
          <Tag rounded bgColor="textInverse" color="text" title={tag} />
        ))}
      </StyledProductSelected>
      <Rating value={stars} />
      <Text>{description}</Text>
    </StyledProductSelectedContainer>
  )
}
