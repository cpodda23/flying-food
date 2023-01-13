import { IconName } from '../Icon'
import { MenuLink } from '../MenuLink'
import { Text } from '../Text'

type Props = {
  title: string
  items: ReadonlyArray<{ name: string; icon: IconName }>
}

export const Section = ({ title, items }: Props) => {
  return (
    <div className="section">
      <Text upperCase bold variant="p" color="textInverse">
        {title}
      </Text>
      <div>
        {items.map((item) => {
          return (
            <MenuLink
              title={item.name}
              icon={item.icon}
              linkUrl=""
              color="textInverse"
              key={item.name}
            />
          )
        })}
      </div>
    </div>
  )
}
