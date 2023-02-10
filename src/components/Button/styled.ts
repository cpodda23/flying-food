import styled from '@emotion/styled'
import { Size, ThemeColor } from '../../style/theme'
import { center } from '../../style/utils'
import { Text } from '../Text'

export type StyledBaseButtonProps = {
  bgColor: ThemeColor
  radius: number | string
  size: Size
  outlined?: boolean
  squared?: boolean
  disabled?: boolean
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
  font-family: inherit;
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

export const StyledText = styled(Text)<{ btnsize: Size; hasIcon: boolean }>`
  padding-right: ${({ theme, btnsize, hasIcon }) =>
    theme.spacings[btnsize] * (hasIcon ? 0.5 : 1)}px;
  padding-left: ${({ theme, btnsize }) => theme.spacings[btnsize]}px;
`

export const IconContainer = styled.div<{ bgColor?: ThemeColor }>`
  background-color: ${({ theme, bgColor }) => bgColor && theme.colors[bgColor]};
  border-radius: 50%;
  aspect-ratio: 1;
  height: 100%;
  ${center}
`
