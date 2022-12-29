import { Size, ThemeColor } from '../../style/theme'
import { Icon, IconName } from '../Icon'
import { Text } from '../Text'
import { BaseButton } from './BaseButton'
import { IconContainer, StyledText } from './styled'

type Props = {
  children: string
  icon?: IconName
  color?: ThemeColor
  iconColor?: ThemeColor
  iconBgColor?: ThemeColor
  bgColor?: ThemeColor
  outlined?: boolean
  size?: Size
  btnsize?: Size
  inverse?: boolean
}

export const Button = ({
  icon,
  children,
  outlined,
  iconColor,
  iconBgColor,
  inverse,
  bgColor = 'primary',
  color = 'text',
  size = 'md',
  btnsize
}: Props) => {
  const textSize = size === 'lg' ? 'md' : 'sm'
  const iconSize = size === 'lg' ? 'xl' : 'sm'
  const backgroundColor = inverse ? color : bgColor
  const textColor = inverse ? bgColor : color

  return (
    <BaseButton bgColor={backgroundColor} size={size} outlined={outlined}>
      <StyledText
        btnsize={size}
        size={textSize}
        hasIcon={!!icon}
        variant="span"
        color={textColor}
        upperCase
      >
        {children}
      </StyledText>
      {icon && (
        <IconContainer bgColor={iconBgColor}>
          <Icon name={icon} color={iconColor} size={iconSize} />
        </IconContainer>
      )}
    </BaseButton>
  )
}
