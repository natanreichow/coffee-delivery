import styled from "styled-components";

export const ConfirmationContainer = styled.div`
  display: flex;
  margin-top: 6rem;
  justify-content: space-between;
  align-items: flex-end;

  header {
    strong {
      font-size: 2rem;
      color: ${props => props.theme['yellow-dark']};
    }
  }
`



export const DetailsBox = styled.div`
  padding: 2.5rem;
  border: 1px solid ${props => props.theme['yellow']};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 526px;
  border-radius: 6px 36px 6px 36px;
  margin-top: 3rem;
`

export const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  strong {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
  }

  p {
    font-size: 0.875rem;
  }

  span {
    display: flex;
    padding: 0.5rem;
    border-radius: 999px;
    background: ${props => props.theme['purple']};
  }
`
