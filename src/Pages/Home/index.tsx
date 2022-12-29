import { Button, IconButton } from '../../components/Button'
import { Text } from '../../components/Text'

export const Home = () => {
  return (
    <div>
      <Button outlined bgColor="text" color="text">
        Button X
      </Button>
      <Button>Button X</Button>
      <Button inverse>Button inverse</Button>
      <Button size="sm" iconBgColor="secondary" icon="clock">
        Button sm
      </Button>
      <Button size="md" bgColor="secondary" iconBgColor="backgroundDark" icon="award">
        Button md
      </Button>
      <Button
        size="lg"
        bgColor="backgroundDark"
        iconBgColor="primary"
        color="textInverse"
        icon="burger"
      >
        Button lg
      </Button>
      <IconButton size="sm" icon="bagShopping" />
      <IconButton size="md" icon="bagShopping" />
      <IconButton bgColor="background" color="text" size="lg" icon="plus" />
      <IconButton bgColor="background" color="danger" size="lg" icon="x" />
      <IconButton bgColor="background" color="danger" size="lg" icon="x" inverse />
      <IconButton size="lg" icon="minus" />
      <IconButton size="lg" icon="minus" bgColor="text" color="text" outlined />
    </div>
  )
}
