import { ReactNode } from 'react'
import { StyledText, StyledTextProp } from './styled'

type Props = {
  children: ReactNode
  className?: string
} & Partial<StyledTextProp>

export const Text = ({
  children,
  size,
  bold,
  upperCase,
  className,
  capitalize,
  inline,
  color = 'text',
  variant = 'p'
}: Props) => {
  return (
    <StyledText
      className={className}
      as={variant}
      color={color}
      size={size}
      variant={variant}
      bold={bold}
      upperCase={upperCase}
      capitalize={capitalize}
      inline={inline}
    >
      {children}
    </StyledText>
  )
}
