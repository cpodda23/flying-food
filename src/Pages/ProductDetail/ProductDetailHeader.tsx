import { TagDto } from '../../api/types'
import { ProductThumb } from '../../components/ProductCard/ProductThumb'
import { SectionTitle } from '../../components/SectionTitle'
import { Stack } from '../../components/Stack'
import { StyledDescription, StyledProductDetailHeader, StyledTag } from './styled'

type Props = {
  imgSrc: string
  isNew: boolean
  productName: string
  productTags?: TagDto[]
}

export const ProductDetailHeader = ({
  imgSrc,
  isNew,
  productName,
  productTags
}: Props) => {
  const split = (i: number) => {
    return productName.split(' ')[i]
  }
  return (
    <StyledProductDetailHeader size="md">
      <ProductThumb size="sm" src={imgSrc} isNew={isNew} alt={productName} />
      <StyledDescription>
        <SectionTitle main={split(0)} secondary={split(1)} />
        <Stack gap={10}>
          {productTags?.map((t) => (
            <StyledTag
              rounded
              bgColor="background"
              color="text"
              title={t.name}
              key={t.id}
            />
          ))}
        </Stack>
      </StyledDescription>
    </StyledProductDetailHeader>
  )
}
