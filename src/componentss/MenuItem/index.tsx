import { NavLink } from 'react-router-dom'
import { ThemeColor } from '../../style/theme'
import { Icon, IconName } from '../Icon'
import { Text } from '../Text'
import { StyledMenuItem } from './styled'

type Props = {
  title: string
  icon?: IconName
  color?: ThemeColor
  linkUrl: string
}

export const MenuItem = ({ title, icon, color = 'text', linkUrl }: Props) => {
  return (
    <NavLink to={linkUrl}>
      <StyledMenuItem>
        {icon && <Icon name={icon} color={color} />}
        <Text size="sm" color={color} upperCase>
          {title}
        </Text>
      </StyledMenuItem>
    </NavLink>
  )
}
