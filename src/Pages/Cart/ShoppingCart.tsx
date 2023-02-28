import { useDispatch, useSelector } from 'react-redux'
import { SectionTitle } from '../../components/SectionTitle'
import { Stack } from '../../components/Stack'
import { selectCartProducts } from '../../features/cart/selectors'
import { CartProduct } from './CartProduct'

export const ShoppingCart = () => {
  const dispatch = useDispatch()
  const cartProducts = useSelector(selectCartProducts)
  return (
    <div>
      <SectionTitle main="shopping" secondary="cart" />
      <CartProduct quantity={0} />
      {/* <Stack>
        {cartProducts.map((product) => (
        ))}
      </Stack> */}
    </div>
  )
}
