import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts, getTags } from '../../api'
import { ProductDto, TagDto } from '../../api/types'
import { Loading } from '../../components/Loading'
import { ProductCard } from '../../components/ProductCard'
import { productsActions } from '../../features/products/reducer'
import { PageHeader } from './PageHeader'
import { StyledGrid, StyledProducts } from './styled'

export const Products = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState<ProductDto[]>()
  const [tags, setTags] = useState<TagDto[]>()
  const [tagFilter, setTagFilter] = useState('')

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
    Promise.all([getProducts(), getTags()]).then(([p, t]) => {
      setTagFilter(t.find(({ hidden }) => !hidden)?.id || '')
      dispatch(productsActions.fetchProductsSuccess(p))
      // setProducts(p)
      setTags(t)
    })
  }, [])

  if (!products || !tags) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  const filteredTags = tags.filter((tag) => !tag.hidden)

  const filteredProducts = tagFilter
    ? products.filter((product) => product.tags.some((tag) => tag === tagFilter))
    : products

  return (
    <StyledProducts>
      <PageHeader tags={filteredTags} selectedTag={tagFilter} onTagClick={setTagFilter} />
      <StyledGrid>
        {filteredProducts?.map((product) => (
          <ProductCard
            linkUrl={`${product.id}`}
            key={product.id}
            name={product.name}
            imgSrc={product.imageUrl}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </StyledGrid>
    </StyledProducts>
  )
}
