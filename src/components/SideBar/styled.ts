import styled from '@emotion/styled'

export const StyledSideBar = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  border-top-right-radius: ${({ theme }) => theme.radii[3]}px;
  border-bottom-right-radius: ${({ theme }) => theme.radii[3]}px;
  width: 20%;
  padding: 30px;

  .section {
    gap: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  }
`
