import { IconButton } from '../../components/Button'
import { QuantitySelector } from '../../components/QuantitySelector'
import { Stack } from '../../components/Stack'
import { Tag } from '../../components/Tag'
import { Text } from '../../components/Text'
import { StyledCartProduct } from './styled'

export const CartProduct = () => {
  return (
    <StyledCartProduct>
      <img src="" alt="" />
      <Stack direction="vertical">
        <Tag title="free delivery" size="sm" rounded />
        <Text bold capitalize>
          burger king
        </Text>
      </Stack>
      <QuantitySelector quantity={0} max={0} onClick={() => {}} />
      <Text bold>$ 21</Text>
      <IconButton icon="x" bgColor="danger" onClick={() => {}} />
    </StyledCartProduct>
  )
}
