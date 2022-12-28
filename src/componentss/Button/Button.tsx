import { Size, ThemeColor } from '../../style/theme'
import { Icon, IconName } from '../Icon'
import { Stack } from '../Stack'
import { Text } from '../Text'
import { BaseButton } from './BaseButton'
import { IconButton } from './IconButton'

type Props = {
  icon?: IconName
  iconColor?: ThemeColor
  textColor?: ThemeColor
  bgColor?: ThemeColor
  outlined?: boolean
  size?: Size
  title: string
}

export const Button = ({
  icon,
  iconColor = 'background',
  textColor = 'backgroundDark',
  bgColor,
  title,
  size,
  outlined
}: Props) => {
  const textSize = size === 'lg' ? 'md' : 'sm'
  return (
    <BaseButton bgColor={bgColor} size={size}>
      <Stack>
        <Text size={textSize} bold color={textColor} upperCase>
          {title}
        </Text>
        {icon && <Icon name={icon} color={iconColor} />}
      </Stack>
    </BaseButton>
  )
}
