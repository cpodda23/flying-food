import { IconName } from '@fortawesome/fontawesome-svg-core'
import { ThemeColor } from '../../style/theme'
import { Icon } from '../Icon'
import { StyledRating } from './styled'

type Props = {
  icon: IconName
  color?: ThemeColor
  bgColor?: ThemeColor
  className?: string
}

export const Rating = ({ className, icon = 'star', color = 'background' }: Props) => {
  return null
  /*  return (
    <StyledRating className={className} color={color}>
      <Icon icon={icon} />
    </StyledRating>
  ) */
}
