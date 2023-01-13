import styled from '@emotion/styled'

export const StyledNewsletter = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radii.at(2)}px;
  max-width: ${({ theme }) => theme.containers.content}px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translateY(40px);

  .input {
    width: 80%;
    padding: 40px;
    position: relative;
  }

  .text {
    text-align: end;
    width: 180px;
  }

  button {
    padding-inline: ${({ theme }) => theme.spacings.lg * 1.5}px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
  }
`
