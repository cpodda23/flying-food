import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ProductDto } from '../../api/types'
import { IconButton } from '../../components/Button'
import { Image } from '../../components/Image'
import { priceSymbols } from '../../components/ProductCard'
import { QuantitySelector } from '../../components/QuantitySelector'
import { Stack } from '../../components/Stack'
import { Tag } from '../../components/Tag'
import { Text } from '../../components/Text'
import { cartActions } from '../../features/cart/reducer'
import { StyledCartProduct } from './styled'

type Props = {
  product: ProductDto
  quantity: number
}

export const CartProduct = ({ product, quantity }: Props) => {
  const dispatch = useDispatch()

  return (
    <StyledCartProduct>
      <Image src={product.imageUrl} alt={product.name} width={100} />
      <Stack direction="vertical">
        <Tag title="free delivery" size="sm" rounded />
        <Text bold capitalize>
          {product.name}
        </Text>
      </Stack>
      <QuantitySelector
        quantity={quantity}
        max={product.stock}
        onClick={(q) => dispatch(cartActions.updateQuantity({ id: product.id, q }))}
      />
      <Text inline bold>{`${priceSymbols[product.price.type]}${(
        product.price.value * quantity
      ).toFixed(2)}`}</Text>
      <IconButton
        icon="x"
        bgColor="danger"
        onClick={() => dispatch(cartActions.removeFromCart(product.id))}
      />
    </StyledCartProduct>
  )
}
