import styled from '@emotion/styled'
import { FontSize, ThemeColor } from '../../style/theme'

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export const StyledText = styled.p<{
  textColor: ThemeColor
  variant: TextVariant
  textSize?: FontSize
  upperCase?: boolean
  bold?: boolean
}>`
  color: ${({ theme, textColor }) => theme.colors[textColor]};
  font-size: ${({ theme, textSize, variant }) => {
    const size = textSize || (theme.textVariants[variant].size as FontSize) || 'md'
    return theme.fontSizes[size]
  }}rem;
  line-height: ${({ theme, variant }) => theme.textVariants[variant].lineHeight};
  text-transform: ${({ upperCase }) => upperCase && 'uppercase'};
  font-weight: ${({ bold }) => bold && 'bold'};
`
