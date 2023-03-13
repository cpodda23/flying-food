import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components/Loading'
import { Rating } from '../../components/Rating'
import { Stack } from '../../components/Stack'
import { Text } from '../../components/Text'
import { productsActions } from '../../features/products/reducer'
import { selectProductDetail } from '../../features/products/selectors'
import { selectTags } from '../../features/tags/selectors'
import { useAction } from '../../hooks/useAction'
import { ProductDetailFooter } from './ProductDetailFooter'
import { ProductDetailHeader } from './ProductDetailHeader'
import { ProductRandom } from './ProductRandom'
import { StyledPaper, StyledProductDetail } from './styled'

export const ProductDetail = () => {
  const params = useParams<{ id: string }>()

  const product = useSelector(selectProductDetail)
  const tags = useSelector(selectTags)

  useAction(productsActions.fetchProductsById(params.id!), [params.id])

  if (!product) return <Loading />

  return (
    <StyledPaper shadow rounded>
      <Stack gap={30}>
        <StyledProductDetail direction="vertical" gap={20}>
          <ProductDetailHeader
            productTags={tags?.filter(({ id }) => product.tags.includes(id))}
            imgSrc={product.imageUrl}
            productName={product.name}
          />
          <Rating value={product.rating} />
          <Text>{product.description}</Text>
          <ProductDetailFooter max={product.stock} min={0} product={product} />
        </StyledProductDetail>
        <ProductRandom id={product.id} />
      </Stack>
    </StyledPaper>
  )
}
