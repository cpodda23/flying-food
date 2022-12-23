import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowLeft,
  faArrowRight,
  faBagShopping,
  faStar
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { theme, ThemeColor } from '../../style/theme'

type IconName = keyof typeof iconsMap

type Props = {
  name: IconName
  size?: SizeProp
  color?: ThemeColor
  bgColor?: ThemeColor
  className?: string
}

const iconsMap = {
  bagShopping: faBagShopping,
  arrowRight: faArrowRight,
  arrowLeft: faArrowLeft,
  star: faStar
}

export function Icon({ size, name, className, color = 'background' }: Props) {
  return (
    <FontAwesomeIcon
      className={className}
      icon={iconsMap[name]}
      color={theme.colors[color]}
      size={size}
    />
  )
}
