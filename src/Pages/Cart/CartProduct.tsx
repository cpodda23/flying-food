import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductDto } from '../../api/types'
import { IconButton } from '../../components/Button'
import { Image } from '../../components/Image'
import { priceSymbols } from '../../components/ProductCard'
import { QuantitySelector } from '../../components/QuantitySelector'
import { Stack } from '../../components/Stack'
import { Tag } from '../../components/Tag'
import { Text } from '../../components/Text'
import { cartActions } from '../../features/cart/reducer'
import { selectCartProducts } from '../../features/cart/selectors'
import { StyledCartProduct } from './styled'

type Props = {
  product: ProductDto
  quantity: number
}

export const CartProduct = ({ product, quantity }: Props) => {
  const dispatch = useDispatch()
  const [q, setQ] = useState(quantity)
  return (
    <StyledCartProduct>
      <Image src={product.imageUrl} alt={product.name} width={100} />
      <Stack direction="vertical">
        <Tag title="free delivery" size="sm" rounded />
        <Text bold capitalize>
          {product.name}
        </Text>
      </Stack>
      <QuantitySelector quantity={q} max={product.stock} onClick={setQ} />
      <Text inline bold>{`${priceSymbols[product.price.type]} ${
        product.price.value
      }`}</Text>
      <IconButton
        icon="x"
        bgColor="danger"
        onClick={() => dispatch(cartActions.removeFromCart({ product, q: quantity }))}
      />
    </StyledCartProduct>
  )
}
