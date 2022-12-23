import { ThemeColor } from '../../style/theme'
import { Text } from '../Text'
import { StyledTag } from './styled'

type Props = {
  title: string
  rounded: boolean
  color?: ThemeColor
  bgColor?: ThemeColor
  className?: string
}

export const Tag = ({
  className,
  title,
  rounded = true,
  bgColor = 'secondary',
  color = 'textInverse'
}: Props) => {
  return (
    <StyledTag className={className} rounded={rounded} bgColor={bgColor}>
      <Text color={color} upperCase>
        {title}
      </Text>
    </StyledTag>
  )
}
