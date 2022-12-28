import styled from '@emotion/styled'
import { FontSize, ThemeColor } from '../../style/theme'

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export type StyledTextProp = {
  color: ThemeColor
  variant: TextVariant
  size?: FontSize
  upperCase?: boolean
  bold?: boolean
  capitalize?: boolean
  inline?: boolean
}

export const StyledText = styled.p<StyledTextProp>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ theme, size, variant }) => {
    const variantFontSize = theme.textVariants[variant].fontSize
    if (variantFontSize === 'inherit') return
    const fontSize = size || variantFontSize
    return theme.fontSizes[fontSize] + 'rem'
  }};
  line-height: ${({ theme, variant }) => theme.textVariants[variant].lineHeight};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-transform: ${({ upperCase }) => upperCase && 'uppercase'};
  text-transform: ${({ capitalize }) => capitalize && 'capitalize'};
  display: ${({ inline }) => inline && 'inline-block'};
`
