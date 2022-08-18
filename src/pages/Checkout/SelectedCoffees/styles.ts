import styled from "styled-components"

export const SelectedCoffeesContainer = styled.div`
  max-width: 100%;
`

export const CheckoutBox = styled.div`
  width: 448px;
  background: ${props => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  padding: 2rem;
  margin: 1rem 0;
  max-width: 100%;
`

export const PriceSum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  button {
    margin-top: 1rem;
    background: ${props => props.theme['yellow']};
    border: 0;
    border-radius: 6px;
    padding: 1rem;
    color: ${props => props.theme['base-white']};
    font-size: 0.875rem;
    font-weight: bold;
    cursor: pointer;
    width: 100%;

    &:hover {
      opacity: 0.7;
    }
  }
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 0.875rem;
  }

  strong {
      font-size: 1.25rem;
      font-family: 'Roboto', sans-serif;
    }

  div {
    display: flex;
    gap: 0.2rem
  }
`
