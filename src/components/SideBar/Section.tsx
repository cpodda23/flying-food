import { IconName } from '../Icon'
import { MenuLink } from '../MenuLink'
import { Stack } from '../Stack'
import { Text } from '../Text'

type Props = {
  title: string
  items: ReadonlyArray<{ name: string; icon: IconName }>
}

export const Section = ({ title, items }: Props) => {
  return (
    <div className="section">
      <Stack direction="vertical" gap={12}>
        <Text upperCase bold variant="p" color="textInverse">
          {title}
        </Text>
        <div>
          <Stack direction="vertical" gap={12}>
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
          </Stack>
        </div>
      </Stack>
    </div>
  )
}
