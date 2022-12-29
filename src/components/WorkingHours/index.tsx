import { Icon } from '../Icon'
import { Stack } from '../Stack'
import { Text } from '../Text'
import { StyledWorkingHours } from './styled'

type Props = {
  variant: 'light' | 'dark'
  opening: string
  closing: string
}

const variantColor = {
  light: { text: 'textInverse', icon: 'lightGrey' },
  dark: { text: 'text', icon: 'text' }
} as const

export const WorkingHours = ({ variant, opening, closing }: Props) => {
  const { text, icon } = variantColor[variant]
  return (
    <Stack direction="horizontal">
      <Icon name="clock" color={icon} size="2x" />
      <div>
        <Text size="sm" upperCase color={text}>
          working hours
        </Text>
        <Text size="sm" color={text}>
          {opening} {closing}
        </Text>
      </div>
    </Stack>
  )
}
