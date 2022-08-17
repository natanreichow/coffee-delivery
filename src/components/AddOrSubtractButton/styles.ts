import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.theme['base-button']};
  padding: 0.5rem;
  border-radius: 6px;

  button {
  border: 0;
  background: ${props => props.theme['base-button']};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
  }
`

export const NumberOfCoffee = styled.div`
  margin: 0 0.5rem;
`
