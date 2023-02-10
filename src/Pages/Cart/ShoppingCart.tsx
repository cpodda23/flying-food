import { SectionTitle } from '../../components/SectionTitle'
import { Stack } from '../../components/Stack'
import { CartProduct } from './CartProduct'

export const ShoppingCart = () => {
  return (
    <Stack direction="vertical">
      <SectionTitle main="shopping" secondary="cart" />
      <CartProduct />
    </Stack>
  )
}
