import { useSelector } from 'react-redux'
import { SectionTitle } from '../../components/SectionTitle'
import { Stack } from '../../components/Stack'
import { selectCartProducts } from '../../features/cart/selectors'
import { CartProduct } from './CartProduct'

export const ShoppingCart = () => {
  const cartProducts = useSelector(selectCartProducts)
  console.log(cartProducts)
  return (
    <div>
      <SectionTitle main="shopping" secondary="cart" />
      <Stack direction="vertical">
        {cartProducts.map((product) => (
          <CartProduct
            quantity={product.q}
            product={product.product}
            key={product.product.id}
          />
        ))}
      </Stack>
    </div>
  )
}
