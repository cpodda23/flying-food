import { SectionTitle } from '../../components/SectionTitle'
import { Stack } from '../../components/Stack'
import { CartProduct } from './CartProduct'

export const ShoppingCart = () => {
  return (
    <div>
      <SectionTitle main="shopping" secondary="cart" />
      <Stack>
        <CartProduct />
      </Stack>
    </div>
  )
}
