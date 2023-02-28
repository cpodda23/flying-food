import { ProductDto } from '../../api/types'
import { IconButton } from '../../components/Button'
import { Image } from '../../components/Image'
import { priceSymbols } from '../../components/ProductCard'
import { QuantitySelector } from '../../components/QuantitySelector'
import { Stack } from '../../components/Stack'
import { Tag } from '../../components/Tag'
import { Text } from '../../components/Text'
import { selectProductDetail } from '../../features/products/selectors'
import { StyledCartProduct } from './styled'

type Props = {
  quantity: number
  product: ProductDto
}

export const CartProduct = ({
  quantity = 0,
  product = {
    discountRate: null,
    size: {
      type: 'gram',
      value: 440
    },
    available: true,
    rating: 4,
    stock: 0,
    delivery: 'c8f067e6-298f-4c74-a8b1-72c985a6554b',
    name: 'Hawaii Burger',
    imageUrl: 'https://flying-food-assets.s3.eu-central-1.amazonaws.com/burger-1.png',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    id: '3c8a9a55-08b1-4e91-89b9-840f76b27df6',
    price: {
      type: 'USD',
      value: 13.64
    },
    new: false,
    tags: ['38d750f9-e7d5-4fa1-b1f7-93008a5a5a72']
  }
}: Props) => {
  return (
    <StyledCartProduct>
      <Image src={product.imageUrl} alt={product.name} width={100} />
      <Stack direction="vertical">
        <Tag title="free delivery" size="sm" rounded />
        <Text bold capitalize>
          {product.name}
        </Text>
      </Stack>
      <QuantitySelector quantity={quantity} max={product.stock} onClick={() => {}} />
      <Text inline bold>{`${priceSymbols[product.price.type]} ${
        product.price.value
      }`}</Text>
      <IconButton icon="x" bgColor="danger" onClick={() => {}} />
    </StyledCartProduct>
  )
}
// export const CartProduct = () => {
//   return (
//     <StyledCartProduct>
//       <Image
//         src="https://www.my-personaltrainer.it/2020/09/07/hamburger_900x760.jpeg"
//         width={100}
//       />
//       <Stack direction="vertical" centered>
//         <Tag title="free delivery" size="sm" rounded />
//         <Text bold capitalize>
//           burger king
//         </Text>
//       </Stack>
//       <QuantitySelector quantity={0} max={2} onClick={() => {}} />
//       <Text bold>$55.99</Text>
//       <IconButton icon="x" bgColor="danger" onClick={() => {}} />
//     </StyledCartProduct>
//   )
// }
