import styled from '@emotion/styled'

export const StyledSideBar = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  border-top-right-radius: ${({ theme }) => theme.radii[3]}px;
  border-bottom-right-radius: ${({ theme }) => theme.radii[3]}px;
  width: max-content;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  .section {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
    padding-bottom: ${({ theme }) => theme.spacings.lg}px;
  }
`
