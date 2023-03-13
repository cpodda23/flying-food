import styled from '@emotion/styled'
import { Stack } from '../Stack'

export const StyledHeader = styled.header``

export const StyledUpperHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};

  .upper-header-content {
    max-width: ${({ theme }) => theme.containers.content}px;
    margin: 0 auto;
    display: flex;
  }
`

export const StyledStack = styled(Stack)`
  margin-left: auto;
`

export const StyledLowerHeader = styled.div`
  max-width: ${({ theme }) => theme.containers.content}px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
`

export const StyledHeaderSign = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  border-radius: 50px 0 0 50px;
  padding: 6px;
  gap: 8px;
  display: flex;
  align-items: center;
`
