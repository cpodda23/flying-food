import styled from '@emotion/styled'

export const StyledText = styled.p<{ fontColor: string }>`
  font-size: 20px;
  color: ${(props) => props.fontColor};
`
