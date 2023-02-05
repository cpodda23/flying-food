import styled from '@emotion/styled'

export const StyledProducts = styled.div`
  max-width: ${({ theme }) => theme.containers.content}px;
  padding: 32px;
`
export const StyledGrid = styled.div`
  display: grid;
  max-width: ${({ theme }) => theme.containers.content}px;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
`
