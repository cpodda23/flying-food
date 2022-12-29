import { ReactNode } from 'react'
import { StyledStack, StyledStackProps } from './styled'

type Props = {
  children: ReactNode
} & Partial<StyledStackProps>

export const Stack = ({ children, direction = 'horizontal', gap = 20 }: Props) => {
  return (
    <StyledStack direction={direction} gap={gap}>
      {children}
    </StyledStack>
  )
}
