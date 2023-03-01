import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, getTags } from '../../api'
// import { ProductDto, TagDto } from '../../api/types'
import { Loading } from '../../components/Loading'
import { ProductCard } from '../../components/ProductCard'
import { cartActions } from '../../features/cart/reducer'
import { productsActions } from '../../features/products/reducer'
import { selectProducts } from '../../features/products/selectors'
import { tagsActions } from '../../features/tags/reducer'
import { selectedTag, selectTags } from '../../features/tags/selectors'
import { PageHeader } from './PageHeader'
import { StyledGrid, StyledProducts } from './styled'

export const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const tags = useSelector(selectTags)
  const selectTag = useSelector(selectedTag)
  // const [tags, setTags] = useState<TagDto[]>()
  // const [tagFilter, setTagFilter] = useState('')

  /* const [loading, setLoading] = useState(false)
  
    useEffect(() => {
    setLoading(true)
    Promise.all([getProducts(), getTags()])
      .then(([p, t]) => {
        setProducts(p)
        setTags(t)
      })
      .then(() => setLoading(false))
  }, []) */

  useEffect(() => {
    // Promise.all([getProducts(), getTags()]).then(([p, t]) => {
    // setTagFilter(t.find(({ hidden }) => !hidden)?.id || '')
    dispatch(productsActions.fetchProducts())
    dispatch(tagsActions.fetchTags())
    // setProducts(p)
    // setTags(t)
    // })
  }, [dispatch])

  if (!products || !tags) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  const filteredProducts = selectTag
    ? products.filter((product) => product.tags.some((tag) => tag === selectTag))
    : products

  return (
    <StyledProducts>
      <PageHeader
        tags={tags}
        selectedTag={selectTag}
        onTagClick={(selectTag) => dispatch(tagsActions.fetchSelectedTag(selectTag))}
      />
      <StyledGrid>
        {filteredProducts?.map((product) => (
          <ProductCard
            linkUrl={`${product.id}`}
            key={product.id}
            name={product.name}
            imgSrc={product.imageUrl}
            rating={product.rating}
            price={product.price}
            onClick={() => dispatch(cartActions.addToCart(product))}
          />
        ))}
      </StyledGrid>
    </StyledProducts>
  )
}
