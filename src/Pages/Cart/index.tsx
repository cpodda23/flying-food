import { Stack } from '../../components/Stack'
import { CartDetails } from './CartDetails'
import { ShoppingCart } from './ShoppingCart'
import { StyledPaper } from './styled'

export const Cart = () => {
  return (
    <StyledPaper rounded shadow>
      <Stack>
        <ShoppingCart />
        <CartDetails />
      </Stack>
    </StyledPaper>
  )
}
