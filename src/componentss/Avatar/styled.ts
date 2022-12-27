import styled from '@emotion/styled'
import { ThemeColor } from '../../style/theme'

export const StyledAvatar = styled.div<{
  bgColor: ThemeColor
}>`
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
`
