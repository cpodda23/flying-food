import styled from '@emotion/styled'
import { ThemeColor } from '../../style/theme'

export const StyledTag = styled.div<{
  rounded: boolean
  bgColor: ThemeColor
  // color: ThemeColor
}>`
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};

  border-radius: ${({ theme, rounded }) => rounded && theme.radii.at(1)}px;
`
