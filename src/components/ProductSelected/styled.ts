import styled from '@emotion/styled'
import { Size } from '../../style/theme'

export const StyledProductSelectedContainer = styled.div<{ size?: Size }>`
  max-width: ${({ size }) => (size === 'sm' ? 180 : 600)}px;
  height: max-content;
`

export const StyledProductSelected = styled.div<{ size?: Size }>`
  height: max-content;
  position: relative;
  border-radius: 8px;
  padding: 0px 24px;
  background-color: #edeff3;

  & > img {
    transform: translateY(-16%) skew(-4deg);
  }
`
