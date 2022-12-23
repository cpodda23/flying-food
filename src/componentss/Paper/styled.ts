import styled from '@emotion/styled'
import { ThemeColor } from '../../style/theme'

export const StyledPaper = styled.div<{
  rounded?: boolean
  shadow?: boolean
  bgColor: ThemeColor
}>`
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  box-shadow: ${({ shadow }) => shadow && '0 8px 40px rgb(0, 0, 0, 0.1)'};
  border-radius: ${({ theme, rounded }) => rounded && theme.radii.at(1)}px;
`
