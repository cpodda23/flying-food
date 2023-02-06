import styled from '@emotion/styled'
import { center } from '../../style/utils'

export const StyledContainer = styled.div`
  ${center}
  height: 300px;
  width: 600px;
`

export const StyledLoading = styled.div`
  display: block;
  width: 60px;
  height: 60px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({ theme }) =>
    `${theme.colors.backgroundDark} transparent ${theme.colors.backgroundDark} transparent`};
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
