import { Link } from 'react-router-dom'
import { Avatar } from '../Avatar'
import { Button, IconButton } from '../Button'
import { Searchbar } from '../SearchBar'
import { Select } from '../Select'
import { Stack } from '../Stack'
import { Text } from '../Text'
import {
  StyledHeader,
  StyledHeaderSign,
  StyledLowerHeader,
  StyledStack,
  StyledUpperHeader
} from './styled'

type Props = {
  username?: string
  imageSrc?: string
}

const languages = [
  { name: 'EN', id: 'en' },
  { name: 'IT', id: 'it' }
]

export const Header = ({ username, imageSrc }: Props) => {
  return (
    <StyledHeader>
      <StyledUpperHeader>
        <div className="upper-header-content">
          <StyledStack gap={8}>
            <Text color="lightGrey" upperCase variant="span" size="sm">
              working hours 8.00 23.00
            </Text>
            <Select items={languages} />
          </StyledStack>
        </div>
      </StyledUpperHeader>

      <StyledLowerHeader>
        <Searchbar outlined />
        <Stack centered gap={10}>
          <Link to={'../cart'}>
            <IconButton icon="bagShopping" bgColor="backgroundDark" color="textInverse" />
          </Link>
          <Button>web site</Button>
          <StyledHeaderSign>
            <Avatar size={36} username={username} imageSrc={imageSrc} />
            <Button color="lightGrey" bgColor="darkGrey">
              sign in
            </Button>
          </StyledHeaderSign>
        </Stack>
      </StyledLowerHeader>
    </StyledHeader>
  )
}
