import styled from '@emotion/styled'
import { theme, ThemeColor } from '../../style/theme'

export const StyledFooter = styled.div<{ bgColor: ThemeColor }>`
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  border-top-left-radius: ${({ theme }) => theme.radii[3]}px;
  border-top-right-radius: ${({ theme }) => theme.radii[3]}px;

  .copyright {
    text-align: center;
    width: 100%;
    display: inline-block;
    padding-block: 16px;
    border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  }
`

export const StyledLogo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 0 50px 50px 0;
  padding: 6px 16px 6px 12px;
`
export const StyledFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.containers.content}px;
  margin: 0 auto;
  padding-block: 80px 40px;
`
