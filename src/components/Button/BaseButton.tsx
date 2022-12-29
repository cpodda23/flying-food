import { ReactNode } from 'react'
import { StyledBaseButton, StyledBaseButtonProps } from './styled'

type Props = {
  className?: string
  children: ReactNode
  squared?: boolean
} & Partial<StyledBaseButtonProps>

export const BaseButton = ({
  children,
  className,
  outlined,
  squared,
  size = 'md',
  radius = 4,
  bgColor = 'primary'
}: Props) => {
  return (
    <StyledBaseButton
      outlined={outlined}
      size={size}
      className={className}
      radius={radius}
      bgColor={bgColor}
      squared={squared}
    >
      {children}
    </StyledBaseButton>
  )
}
