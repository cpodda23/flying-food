import styled from '@emotion/styled'
import { Paper } from '../../components/Paper'
import { Stack } from '../../components/Stack'

export const StyledPaper = styled(Paper)`
  margin: 20px;
  padding: 20px;
`
export const StyledCartProduct = styled(Stack)`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.radii.at(2)}px;
`
export const StyledCartDetails = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  border-radius: ${({ theme }) => theme.radii.at(2)}px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
