import styled from '@emotion/styled'
import { Size, ThemeColor } from '../../style/theme'

export const StyledTag = styled.div<{
  rounded: boolean
  bgColor: ThemeColor
  size: Size
}>`
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  border-radius: ${({ theme, rounded }) => rounded && theme.radii.at(2)}px;
  padding-inline: ${({ theme, size }) => theme.spacings[size]}px;
  padding-block: ${({ theme, size }) => theme.spacings[size] / 2}px;
`
