import { TagDto } from '../../api/types'
import { ProductThumb } from '../../components/ProductCard/ProductThumb'
import { SectionTitle } from '../../components/SectionTitle'
import { Stack } from '../../components/Stack'
import { StyledDescription, StyledProductDetailHeader, StyledTag } from './styled'

type Props = {
  imgSrc: string
  isNew?: boolean
  productName: string
  productTags?: TagDto[]
}

export const ProductDetailHeader = ({
  imgSrc,
  isNew,
  productName,
  productTags
}: Props) => {
  return (
    <StyledProductDetailHeader size="md">
      <ProductThumb size="sm" src={imgSrc} isNew={isNew} alt={productName} />
      <StyledDescription>
        <SectionTitle
          main={productName.split(' ')[0]}
          secondary={productName.split(' ')[1]}
          // usare altro metodo
        />
        <Stack gap={10}>
          {productTags?.map((t) => (
            <StyledTag rounded bgColor="background" color="text" title={t.name} />
          ))}
        </Stack>
      </StyledDescription>
    </StyledProductDetailHeader>
  )
}
