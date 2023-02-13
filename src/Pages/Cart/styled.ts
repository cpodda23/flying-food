import styled from '@emotion/styled'
import { Paper } from '../../components/Paper'
import { center } from '../../style/utils'

export const StyledPaper = styled(Paper)`
  max-width: ${({ theme }) => theme.containers.content}px;
  border-radius: ${({ theme }) => theme.radii.at(3)}px;
  padding: 20px;
  margin: 20px;
`
export const StyledCartProduct = styled.div`
  ${center}
  gap: 20px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.textInverse};
  border-radius: ${({ theme }) => theme.radii.at(2)}px;
`
export const StyledCartDetails = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  border-radius: ${({ theme }) => theme.radii.at(3)}px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  button {
    width: auto;
  }
`
