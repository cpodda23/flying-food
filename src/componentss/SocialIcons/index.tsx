import { ThemeColor } from '../../style/theme'
import { Icon } from '../Icon'
import { StyledSocialIcons } from './styled'

type Props = {
  color?: ThemeColor
}

const config = [
  { name: 'twitter', linkUrl: '#' },
  { name: 'facebook', linkUrl: '#' },
  { name: 'googlePlus', linkUrl: '#' },
  { name: 'instagram', linkUrl: '#' },
  { name: 'linkedin', linkUrl: '#' }
] as const

export const SocialIcons = ({ color }: Props) => {
  return (
    <StyledSocialIcons>
      {config.map(({ name }) => (
        <Icon key={name} name={name} color={color} />
      ))}
    </StyledSocialIcons>
  )
}
