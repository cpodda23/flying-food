import { Text } from '../Text'
import { StyledMenuPages } from './styled'

const config = [
  { name: 'home', linkUrl: '#' },
  { name: 'delivery', linkUrl: '#' },
  { name: 'payment', linkUrl: '#' },
  { name: 'payment2', linkUrl: '#' },
  { name: 'menu', linkUrl: '#' },
  { name: 'about us', linkUrl: '#' },
  { name: 'contact', linkUrl: '#' },
  { name: 'delivery2', linkUrl: '#' }
]

export const MenuPages = () => {
  return (
    <StyledMenuPages>
      {config.map(({ name }) => (
        <Text variant="span" color="lightGrey" upperCase size="sm" key={name}>
          {name}
        </Text>
      ))}
    </StyledMenuPages>
  )
}
