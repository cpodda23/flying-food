import styled from '@emotion/styled'
import { Paper } from '../../components/Paper'
import { Stack } from '../../components/Stack'
import { Tag } from '../../components/Tag'
import { Size } from '../../style/theme'

export const StyledProductDetail = styled(Stack)<{ size?: Size }>`
  max-width: ${({ size }) => (size === 'sm' ? 180 : 600)}px;
`
export const StyledPaper = styled(Paper)`
  margin: 20px;
  padding: 60px;
`

export const StyledProductDetailHeader = styled.div<{ size?: Size }>`
  transform: skewX(4deg);
  height: max-content;
  position: relative;
  border-radius: 8px;
  padding: 0px 24px;
  background-color: #edeff3;

  & > img {
    transform: translateY(-16%) skew(-4deg);
  }
`

export const StyledTag = styled(Tag)`
  width: max-content;
  height: max-content;
`
export const StyledGrid = styled.div`
  display: grid;
  max-width: ${({ theme }) => theme.containers.content}px;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`
