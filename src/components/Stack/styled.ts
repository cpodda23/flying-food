import styled from '@emotion/styled'

export type StyledStackProps = {
  direction?: 'horizontal' | 'vertical'
  gap: number
}

export const StyledStack = styled.div<StyledStackProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'vertical' ? 'column' : 'row')};
  gap: ${({ gap }) => gap}px;
`
