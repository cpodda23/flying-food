import { useDispatch, useSelector } from 'react-redux'
import { Loading } from '../../components/Loading'
import { ProductCard } from '../../components/ProductCard'
import { cartActions } from '../../features/cart/reducer'
import { productsActions } from '../../features/products/reducer'
import { selectProducts } from '../../features/products/selectors'
import { tagsActions } from '../../features/tags/reducer'
import { selectedTag, selectTags } from '../../features/tags/selectors'
import { useAction } from '../../hooks/useAction'
import { PageHeader } from './PageHeader'
import { StyledGrid, StyledProducts } from './styled'

export const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const tags = useSelector(selectTags)
  const selectTag = useSelector(selectedTag)

  useAction(productsActions.fetchProducts(), [])

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
            isAvailable={product.available}
            isNew={product.new}
            linkUrl={`${product.id}`}
            key={product.id}
            name={product.name}
            imgSrc={product.imageUrl}
            rating={product.rating}
            price={product.price}
            isDisabled={false}
            onClick={() => dispatch(cartActions.addToCart({ product, q: 1 }))}
          />
        ))}
      </StyledGrid>
    </StyledProducts>
  )
}
