import styled from '@emotion/styled'

export const StyledSideBar = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  border-top-right-radius: ${({ theme }) => theme.radii[3]}px;
  border-bottom-right-radius: ${({ theme }) => theme.radii[3]}px;
`
