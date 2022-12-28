import styled from '@emotion/styled'
import { Size, ThemeColor } from '../../style/theme'

export type StyledBaseButtonProps = { bgColor: ThemeColor; radius: number; size: Size }

export const StyledBaseButton = styled.button<StyledBaseButtonProps>`
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  border-radius: ${({ theme, radius }) => theme.radii[radius]}px;
  padding-inline: ${({ theme, size }) => theme.sizes[size] * 2}px;
  padding-block: ${({ theme, size }) => theme.sizes[size] / 2}px;
  border: none;
  cursor: pointer;
`
