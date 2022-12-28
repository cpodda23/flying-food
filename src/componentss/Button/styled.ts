import styled from '@emotion/styled'
import { Size, ThemeColor } from '../../style/theme'

export type StyledBaseButtonProps = {
  bgColor: ThemeColor
  radius: number | string
  size: Size
  outlined?: boolean
}

export const StyledBaseButton = styled.button<StyledBaseButtonProps>`
  background-color: ${({ theme, bgColor, outlined }) =>
    outlined ? 'transparent' : theme.colors[bgColor]};
  border-radius: ${({ theme, radius }) =>
    typeof radius === 'number' ? `${theme.radii.at(radius)}px` : radius};
  padding-inline: ${({ theme, size }) => theme.sizes[size] * 2}px;
  padding-block: ${({ theme, size }) => theme.sizes[size] / 2}px;
  border: ${({ outlined, bgColor, theme }) =>
    outlined ? `2px solid ${theme.colors[bgColor]}` : 'none'};
  cursor: pointer;
  transition: transform 0.08s ease-out;
  :hover {
    transform: translateY(-2px);
  }
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
