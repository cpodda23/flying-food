import styled from '@emotion/styled'

export const StyledNewsletter = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radii.at(2)}px;
  max-width: ${({ theme }) => theme.containers.content}px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  transform: translateY(40px);

  .input-container {
    flex: 1;
    position: relative;
  }

  .text {
    text-align: end;
  }

  button {
    padding-inline: ${({ theme }) => theme.spacings.lg * 1.5}px;
    position: absolute;
    right: 0;
  }
`
