import { Link } from 'react-router-dom'
import { IconButton } from '../Button'
import { Stack } from '../Stack'
import { StyledHeaderTag } from './styled'

type Props = {
  quantity: number
}

export const CartButton = ({ quantity }: Props) => {
  return (
    <Stack centered>
      {quantity !== 0 && (
        <StyledHeaderTag
          title={quantity.toString()}
          bgColor="danger"
          color="textInverse"
          rounded
          size="sm"
        />
      )}

      <Link to={'../cart'}>
        <IconButton icon="bagShopping" bgColor="backgroundDark" color="textInverse" />
      </Link>
    </Stack>
  )
}
