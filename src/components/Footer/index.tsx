import { Button } from '../Button'
import { Input } from '../Input'
import Logo from '../Logo'
import { MenuPages } from '../MenuPages'
import { Newsletter } from '../Newsletter'
import { SocialIcons } from '../SocialIcons'
import { Text } from '../Text'
import { WorkingHours } from '../WorkingHours'
import { StyledFooter, StyledFooterContainer, StyledLogo } from './styled'

type Props = {}

export const Footer = ({}: Props) => {
  return (
    <div>
      <Newsletter />
      <StyledFooter bgColor="backgroundDark">
        <StyledFooterContainer>
          <StyledLogo>
            <Logo inverse direction="horizontal" />
          </StyledLogo>
          <MenuPages />
          <WorkingHours opening="8:00" closing="18:00" variant="light" />
          <SocialIcons color="lightGrey" />
        </StyledFooterContainer>

        <Text className="copyright" variant="span" color="lightGrey" size="sm">
          &copy; 2021 all rights reserved
        </Text>
      </StyledFooter>
    </div>
  )
}
