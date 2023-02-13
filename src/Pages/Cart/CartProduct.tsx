import { ProductDto } from '../../api/types'
import { IconButton } from '../../components/Button'
import { Image } from '../../components/Image'
import { QuantitySelector } from '../../components/QuantitySelector'
import { Stack } from '../../components/Stack'
import { Tag } from '../../components/Tag'
import { Text } from '../../components/Text'
import { StyledCartProduct } from './styled'

// type Props = {
//   quantity: number
//   product: ProductDto
// }

// export const CartProduct = ({ quantity, product }: Props) => {
//   return (
//     <StyledCartProduct>
//       <Image src={product.imageUrl} alt={product.name} />
//       <Stack direction="vertical">
//         <Tag title="free delivery" size="sm" rounded />
//         <Text bold capitalize>
//           {product.name}
//         </Text>
//       </Stack>
//       <QuantitySelector quantity={quantity} max={product.stock} onClick={() => {}} />
//       <Text bold>{`${product.price}`}</Text>
//       <IconButton icon="x" bgColor="danger" onClick={() => {}} />
//     </StyledCartProduct>
//   )
// }
export const CartProduct = () => {
  return (
    <StyledCartProduct>
      <Image
        src="https://www.my-personaltrainer.it/2020/09/07/hamburger_900x760.jpeg"
        width={100}
      />
      <Stack direction="vertical" centered>
        <Tag title="free delivery" size="sm" rounded />
        <Text bold capitalize>
          burger king
        </Text>
      </Stack>
      <QuantitySelector quantity={0} max={2} onClick={() => {}} />
      <Text bold>$55.99</Text>
      <IconButton icon="x" bgColor="danger" onClick={() => {}} />
    </StyledCartProduct>
  )
}
