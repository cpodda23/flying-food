import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { theme, ThemeColor } from '../../style/theme'
import { iconsMap } from './config'

type Props = {
  name: IconName
  size?: SizeProp
  color?: ThemeColor
  bgColor?: ThemeColor
  className?: string
}

export type IconName = keyof typeof iconsMap

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
