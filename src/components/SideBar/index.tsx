import { Button } from '../Button'
import { Icon, IconName } from '../Icon'
import { Stack } from '../Stack'
import { Text } from '../Text'
import { StyledSideBar } from './styled'

export type SideBarList = { name: string; icon: IconName }[]

const sideBarList: SideBarList = [
  { name: 'burger', icon: 'burger' },
  { name: 'pizza', icon: 'pizza' },
  { name: 'sushi', icon: 'sushi' },
  { name: 'dessert', icon: 'dessert' },
  { name: 'beverages', icon: 'beverages' },
  { name: 'soups', icon: 'soups' },
  { name: 'cheescakes', icon: 'arrowLeft' },
  { name: 'icecream', icon: 'iceCream' },
  { name: 'salads', icon: 'salad' },
  { name: 'vegetables', icon: 'vegetables' },
  { name: 'fruits', icon: 'fruit' }
]

export const SideBar = () => {
  return (
    <StyledSideBar>
      <Stack direction="vertical">
        <Text upperCase bold variant="h3">
          menu
        </Text>
        {sideBarList.map((item) => {
          return (
            <Stack direction="horizontal">
              <Icon name={item.icon} />
              <Text upperCase color="textInverse">
                {item.name}
              </Text>
            </Stack>
          )
        })}
        <Text upperCase bold variant="h3">
          services
        </Text>
        <Button bgColor="darkGrey" color="textInverse">
          sign off
        </Button>
      </Stack>
    </StyledSideBar>
  )
}
