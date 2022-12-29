import styled from '@emotion/styled'
import { Size, ThemeColor } from '../../style/theme'
import { center } from '../../style/utils'

export type StyledBaseButtonProps = {
  bgColor: ThemeColor
  radius: number | string
  size: Size
  outlined?: boolean
  squared?: boolean
}

export const StyledBaseButton = styled.button<StyledBaseButtonProps>`
  height: ${({ size, theme }) => theme.sizes[size]}px;
  width: ${({ size, theme, squared }) => squared && `${theme.sizes[size]}px`};
  background-color: ${({ theme, bgColor, outlined }) =>
    outlined ? 'transparent' : theme.colors[bgColor]};
  border-radius: ${({ theme, radius }) =>
    typeof radius === 'number' ? `${theme.radii.at(radius)}px` : radius};
  border: ${({ outlined, bgColor, theme }) =>
    outlined ? `2px solid ${theme.colors[bgColor]}` : 'none'};
  padding: ${({ size }) => (size === 'sm' ? 2 : 4)}px;
  ${center}
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

export const TextContainer = styled.div<{ size: Size; hasIcon: boolean }>`
  padding-right: ${({ theme, size, hasIcon }) =>
    theme.spacings[size] * (hasIcon ? 0.5 : 1)}px;
  padding-left: ${({ theme, size }) => theme.spacings[size]}px;
`

export const IconContainer = styled.div<{ bgColor?: ThemeColor }>`
  background-color: ${({ theme, bgColor }) => bgColor && theme.colors[bgColor]};
  border-radius: 50%;
  aspect-ratio: 1;
  height: 100%;
  ${center}
`
