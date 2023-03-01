import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductsById, getTags } from '../../api'
import { ProductDto, TagDto } from '../../api/types'
import { Loading } from '../../components/Loading'
import { Rating } from '../../components/Rating'
import { Stack } from '../../components/Stack'
import { Text } from '../../components/Text'
import { productsActions } from '../../features/products/reducer'
import { selectProductDetail } from '../../features/products/selectors'
import { tagsActions } from '../../features/tags/reducer'
import { selectTags } from '../../features/tags/selectors'
import { ProductDetailFooter } from './ProductDetailFooter'
import { ProductDetailHeader } from './ProductDetailHeader'
import { ProductRandom } from './ProductRandom'
import { StyledPaper, StyledProductDetail } from './styled'

export const ProductDetail = () => {
  const params = useParams<{ id: string }>()
  const dispatch = useDispatch()
  // const [product, setProduct] = useState<ProductDto>()
  const product = useSelector(selectProductDetail)
  const tags = useSelector(selectTags)
  // const [tagsById, setTagById] = useState<Record<string, TagDto>>({})
  // const [tags, setTags] = useState<TagDto[]>()

  useEffect(() => {
    // Promise.all([getProductsById(params.id!), getTags()]).then(([product, tags]) => {
    dispatch(productsActions.fetchProductsById(params.id!))
    dispatch(tagsActions.fetchTags())
    // setTagById(tags.reduce((acc, tag) => ({ ...acc, [tag.id]: tag }), {}))
    // setTags(tags)
    // })
  }, [params.id, dispatch])

  if (!product) {
    return <Loading />
  }

  return (
    <StyledPaper shadow rounded>
      <Stack gap={30}>
        <StyledProductDetail direction="vertical" gap={20}>
          <ProductDetailHeader
            productTags={tags?.filter(({ id }) => product.tags.includes(id))}
            // productTags={product.tags.map((tag) => tagsById[tag])}
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
