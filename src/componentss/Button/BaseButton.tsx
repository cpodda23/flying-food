import { ReactNode } from 'react'
import { StyledBaseButton, StyledBaseButtonProps } from './styled'

type Props = {
  className?: string
  children: ReactNode
} & Partial<StyledBaseButtonProps>

export const BaseButton = ({
  children,
  className,
  size = 'md',
  radius = 3,
  bgColor = 'primary'
}: Props) => {
  return (
    <StyledBaseButton size={size} className={className} radius={radius} bgColor={bgColor}>
      {children}
    </StyledBaseButton>
  )
}
