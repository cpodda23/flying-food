import { Button } from '../Button'
import { Image } from '../Image'
import { Stack } from '../Stack'
import { Text } from '../Text'
import { Section } from './Section'
import { StyledSideBar } from './styled'

const sideBarList = [
  {
    sectionName: 'menu',
    items: [
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
  },
  {
    sectionName: 'services',
    items: [
      { name: 'personal', icon: 'personal' },
      { name: 'map', icon: 'map' },
      { name: 'delivery', icon: 'delivery' },
      { name: 'bonuses', icon: 'bonuses' }
    ]
  }
] as const

export const SideBar = () => {
  return (
    <StyledSideBar>
      <Stack direction="vertical">
        {sideBarList.map((item) => {
          return (
            <Section title={item.sectionName} items={item.items} key={item.sectionName} />
          )
        })}
        <Button bgColor="darkGrey" color="textInverse">
          sign off
        </Button>
        <div>
          <Image
            width={100}
            height={100}
            src="https://i2-prod.mirror.co.uk/incoming/article13995296.ece/ALTERNATES/s615/0_Eating-Burger.jpg"
          />
          <Text upperCase bold variant="p" size="lg" color="textInverse">
            bonus plus
          </Text>
          <Button bgColor="secondary" color="textInverse">
            partecipace
          </Button>
        </div>
      </Stack>
    </StyledSideBar>
  )
}
