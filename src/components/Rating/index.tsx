import { ThemeColor } from '../../style/theme'
import { Icon } from '../Icon'
import { StyledRating } from './styled'

type Props = {
  value: number
  color?: ThemeColor
  stars?: number
}

export const Rating = ({ value, color = 'primary', stars = 5 }: Props) => {
  const getIcon = (index: number) => {
    if (index + 1 <= value) return 'starFull'
    if (index + 0.5 <= value) return 'starHalf'
    return 'starEmpty'
  }

  return (
    <StyledRating>
      {Array.from({ length: stars }).map((_, i) => (
        <Icon name={getIcon(i)} color={color} key={i} />
      ))}
    </StyledRating>
  )
}
