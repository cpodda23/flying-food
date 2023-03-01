import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ProductDto } from '../../api/types'
import { Button } from '../../components/Button'
import { QuantitySelector } from '../../components/QuantitySelector'
import { Stack } from '../../components/Stack'
import { cartActions } from '../../features/cart/reducer'

type Props = {
  max: number
  min: number
  product: ProductDto
}

export const ProductDetailFooter = ({ max, min, product }: Props) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(0)
  return (
    <Stack direction="horizontal">
      <Button
        bgColor="backgroundDark"
        color="textInverse"
        icon="bagShopping"
        iconBgColor="primary"
        onClick={() => dispatch(cartActions.addToCart(product))}
      >
        add to cart
      </Button>
      <QuantitySelector min={min} max={max} quantity={quantity} onClick={setQuantity} />
    </Stack>
  )
}
