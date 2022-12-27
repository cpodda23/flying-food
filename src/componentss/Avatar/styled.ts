import styled from '@emotion/styled'
import { ThemeColor } from '../../style/theme'
import { center } from '../../style/utils'

export const StyledAvatar = styled.div<{
  bgColor: ThemeColor
  size: number
}>`
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  overflow: hidden;
  ${center}
`
