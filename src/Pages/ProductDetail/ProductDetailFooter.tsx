import { useState } from 'react'
import { Button } from '../../components/Button'
import { QuantitySelector } from '../../components/QuantitySelector'
import { Stack } from '../../components/Stack'

type Props = {
  max: number
}

export const ProductDetailFooter = ({ max }: Props) => {
  const [quantity, setQuantity] = useState(0)
  return (
    <Stack direction="horizontal">
      <Button
        bgColor="backgroundDark"
        color="textInverse"
        icon="bagShopping"
        iconBgColor="primary"
      >
        add to cart
      </Button>
      <QuantitySelector max={max} quantity={quantity} onClick={setQuantity} />
    </Stack>
  )
}
