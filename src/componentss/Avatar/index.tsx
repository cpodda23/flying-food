import { ThemeColor } from '../../style/theme'
import { Text } from '../Text'
import { StyledAvatar } from './styled'

type Props = {
  username?: string
  imageSrc?: string
  color?: ThemeColor
  bgColor?: ThemeColor
  className?: string
}

export const Avatar = ({
  className,
  username,
  imageSrc,
  bgColor = 'secondary',
  color = 'textInverse'
}: Props) => {
  const getInitials = () => {
    if (!username) return
    const initials = username.split(' ')
    const first = initials.at(0)?.charAt(0) || ''
    const last = initials.at(-1)?.charAt(0) || ''
    return `${first}${last}`
  }

  return (
    <StyledAvatar className={className} bgColor={bgColor}>
      <Text color={color} upperCase>
        {getInitials()}
      </Text>
      <img src={image} />
    </StyledAvatar>
  )
}
