import { ReactNode } from 'react'
import { ThemeColor, FontSize } from '../../style/theme'
import { StyledText, TextVariant } from './styled'

type Props = {
  children: ReactNode
  color?: ThemeColor
  variant?: TextVariant
  size?: FontSize
  bold?: boolean
  capitalize?: boolean
  upperCase?: boolean
  className?: string
}

export const Text = ({
  children,
  size,
  bold,
  upperCase,
  className,
  capitalize,
  color = 'text',
  variant = 'p'
}: Props) => {
  return (
    <StyledText
      className={className}
      as={variant}
      textColor={color}
      textSize={size}
      variant={variant}
      bold={bold}
      upperCase={upperCase}
      capitalize={capitalize}
    >
      {children}
    </StyledText>
  )
}
