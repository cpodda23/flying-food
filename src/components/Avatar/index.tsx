import { ThemeColor } from '../../style/theme'
import { Image } from '../Image'
import { Text } from '../Text'
import { StyledAvatar } from './styled'

type Props = {
  username?: string
  imageSrc?: string
  size?: number
  color?: ThemeColor
  bgColor?: ThemeColor
  className?: string
}

const getInitials = (username: string) => {
  const initials = username.split(' ')
  const first = initials.at(0)?.charAt(0) || ''
  const last = initials.at(-1)?.charAt(0) || ''
  return `${first}${last}`
}

export const Avatar = ({
  className,
  username,
  imageSrc,
  size = 64,
  bgColor = 'secondary',
  color = 'textInverse'
}: Props) => {
  const renderContent = () => {
    if (imageSrc) return <Image width="100%" height="100%" fit="cover" src={imageSrc} />
    if (username)
      return (
        <Text size="lg" color={color} upperCase>
          {getInitials(username)}
        </Text>
      )
    return null
  }

  return (
    <StyledAvatar className={className} bgColor={bgColor} size={size}>
      {renderContent()}
    </StyledAvatar>
  )
}
