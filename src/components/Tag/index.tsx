import { Size, ThemeColor } from '../../style/theme'
import { Text } from '../Text'
import { StyledTag } from './styled'

type Props = {
  title: string
  rounded?: boolean
  color?: ThemeColor
  bgColor?: ThemeColor
  size?: Size
  className?: string
}

export const Tag = ({
  className,
  title,
  size = 'md',
  rounded = true,
  bgColor = 'secondary',
  color = 'textInverse'
}: Props) => {
  return (
    <StyledTag size={size} className={className} rounded={rounded} bgColor={bgColor}>
      <Text color={color} size={size}>
        {title}
      </Text>
    </StyledTag>
  )
}
