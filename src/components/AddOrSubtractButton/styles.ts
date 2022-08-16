import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  width: 5rem;

  button, input {
    border: 0;
    background: ${props => props.theme['base-button']};
    padding: 0.5rem;
  }

  input {
    width: 100%;
    text-align: center;
    padding: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`

export const MinusButton = styled.button`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const PlusButton = styled.button`
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`