import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById, getTags } from '../../api'
import { ProductDto, TagDto } from '../../api/types'
import { Loading } from '../../components/Loading'
import { Rating } from '../../components/Rating'
import { Stack } from '../../components/Stack'
import { Text } from '../../components/Text'
import { ProductDetailFooter } from './ProductDetailFooter'
import { ProductDetailHeader } from './ProductDetailHeader'
import { ProductRandom } from './ProductRandom'
import { StyledPaper, StyledProductDetail } from './styled'

export const ProductDetail = () => {
  const params = useParams<{ id: string }>()
  const [product, setProduct] = useState<ProductDto>()
  const [tagsById, setTagById] = useState<TagDto[]>()

  useEffect(() => {
    Promise.all([getProductsById(params.id!), getTags()]).then(([product, tagsById]) => {
      setProduct(product)
      setTagById(tagsById)
    })
  }, [])

  if (!product) {
    return <Loading />
  }

  return (
    <StyledPaper shadow rounded>
      <Stack gap={30}>
        <StyledProductDetail direction="vertical" gap={20}>
          <ProductDetailHeader
            productTags={tagsById?.filter(({ id }) => product.tags.includes(id))}
            imgSrc={product.imageUrl}
            productName={product.name}
          />
          <Rating value={product.rating} />
          <Text>{product.description}</Text>
          <ProductDetailFooter max={product.stock} />
        </StyledProductDetail>
        <ProductRandom id={product.id} />
      </Stack>
    </StyledPaper>
  )
}
