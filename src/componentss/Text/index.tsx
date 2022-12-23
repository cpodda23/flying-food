import { ReactNode } from 'react'
import { ThemeColor, FontSize } from '../../style/theme'
import { StyledText, TextVariant } from './styled'

type Props = {
  children: ReactNode
  color?: ThemeColor
  variant?: TextVariant
  size?: FontSize
  bold?: boolean
  upperCase?: boolean
}

export const Text = ({
  children,
  size,
  bold,
  upperCase,
  color = 'text',
  variant = 'p'
}: Props) => {
  return (
    <StyledText
      as={variant}
      textColor={color}
      textSize={size}
      variant={variant}
      bold={bold}
      upperCase={upperCase}
    >
      {children}
    </StyledText>
  )
}
