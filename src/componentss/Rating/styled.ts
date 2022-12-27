import styled from '@emotion/styled'
import { ThemeColor } from '../../style/theme'

export const StyledRating = styled.div<{
  rounded: boolean
  bgColor: ThemeColor
  color: ThemeColor
}>`
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  background-color: ${({ theme, color }) => theme.colors[color]};
`
