import { useSelector } from 'react-redux'
import { SectionTitle } from '../../components/SectionTitle'
import { Stack } from '../../components/Stack'
import { selectCartProducts } from '../../features/cart/selectors'
import { CartProduct } from './CartProduct'

export const ShoppingCart = () => {
  const cartProducts = useSelector(selectCartProducts)
  return (
    <div>
      <SectionTitle main="shopping" secondary="cart" />
      <CartProduct quantity={0} product={cartProducts} />
      {/* <Stack direction='vertical'>
        {cartProducts.map((product) => (
        ))}
      </Stack> */}
    </div>
  )
}
