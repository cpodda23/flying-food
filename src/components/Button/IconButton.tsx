import { ThemeColor } from '../../style/theme'
import { Icon, IconName } from '../Icon'
import { BaseButton } from './BaseButton'
import { IconContainer, StyledBaseButtonProps } from './styled'

type Props = {
  icon: IconName
  color?: ThemeColor
  inverse?: boolean
  onClick?: () => void
} & Partial<StyledBaseButtonProps>

export const IconButton = ({
  icon,
  size,
  color,
  bgColor,
  inverse,
  outlined,
  disabled,
  onClick
}: Props) => {
  const iconSize = size === 'lg' ? 'xl' : 'sm'
  const backgroundColor = inverse ? color : bgColor
  const iconColor = inverse ? bgColor : color

  return (
    <BaseButton
      radius="50%"
      squared
      size={size}
      bgColor={backgroundColor}
      outlined={outlined}
      disabled={disabled}
      onClick={onClick}
    >
      <IconContainer>
        <Icon name={icon} size={iconSize} color={iconColor} />
      </IconContainer>
    </BaseButton>
  )
}
