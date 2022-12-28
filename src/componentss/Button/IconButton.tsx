import { Icon, IconName } from '../Icon'
import { BaseButton } from './BaseButton'
import { StyledBaseButtonProps } from './styled'

type Props = {
  icon: IconName
} & Partial<StyledBaseButtonProps>

export const IconButton = ({ icon }: Props) => {
  return (
    <BaseButton radius="50%">
      <IconButton icon={icon} />
    </BaseButton>
  )
}
