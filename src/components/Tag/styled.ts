import styled from '@emotion/styled'
import { Size, ThemeColor } from '../../style/theme'

export const StyledTag = styled.div<{
  rounded: boolean
  bgColor: ThemeColor
  size: Size
}>`
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  border-radius: ${({ theme, rounded }) => rounded && theme.radii.at(0)}px;
  padding-inline: ${({ theme, size }) => theme.sizes[size]}px;
  padding-block: ${({ theme, size }) => theme.sizes[size]}px;
`
