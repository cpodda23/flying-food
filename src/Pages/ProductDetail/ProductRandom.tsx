import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRandomProducts } from '../../api'
import { ProductCard } from '../../components/ProductCard'
import { cartActions } from '../../features/cart/reducer'
import { productsActions } from '../../features/products/reducer'
import { selectRandomProducts } from '../../features/products/selectors'
import { StyledGrid } from './styled'

type Props = {
  id: string
  count?: number
}

export const ProductRandom = ({ id, count }: Props) => {
  const dispatch = useDispatch()
  const randomProducts = useSelector(selectRandomProducts)
  // const [randomProducts, setRandomProducts] = useState<ProductDto[]>()

  useEffect(() => {
    getRandomProducts(id, count).then((id) => {
      dispatch(productsActions.fetchRandomProducts(id))
    })
  }, [id, count, dispatch])

  return (
    <StyledGrid>
      {randomProducts?.map((r) => (
        <ProductCard
          isAvailable={r.available}
          isNew={r.new}
          isDisabled={false}
          key={r.id}
          size="sm"
          imgSrc={r.imageUrl}
          linkUrl={`../products/${r.id}`}
          name={r.name}
          rating={r.rating}
          price={r.price}
          onClick={() => dispatch(cartActions.addToCart({ product: r, q: 1 }))}
        />
      ))}
    </StyledGrid>
  )
}
