import { ReactNode } from 'react'
import { StyledBaseButton, StyledBaseButtonProps } from './styled'

type Props = {
  children: ReactNode
  className?: string
  onClick?: () => void
  squared?: boolean
} & Partial<StyledBaseButtonProps>

export const BaseButton = ({
  children,
  className,
  outlined,
  squared,
  onClick,
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
      onClick={onClick}
    >
      {children}
    </StyledBaseButton>
  )
}
