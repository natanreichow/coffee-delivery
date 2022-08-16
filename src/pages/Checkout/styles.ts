import styled from "styled-components";

export const CheckoutContainer = styled.div`
  form {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    max-width: 100%;
  }
`

export const OrderInfo = styled.div`
  max-width: 100%;
`

export const AddressForm = styled.div`
  background: ${props => props.theme['base-card']};
  width: 640px;
  padding: 2rem;
  margin: 1rem 0;
  max-width: 100%;
  border-radius: 6px;

  header {
    display: flex;
    gap: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`

export const AddressInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  margin-top: 2rem;

  div {
    display: flex;
    gap: 0.5rem;

    input {
      width: 100%;
    }
  }

  input {
    padding: 1rem;
    font-size: 0.875rem;
    border: none;
    border-radius: 6px;
    background: ${props => props.theme['base-input']};
  }
`

export const Payment = styled.div`
  background: ${props => props.theme['base-card']};
  padding: 2rem;
  border-radius: 6px;

  header {
    display: flex;
    gap: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`

export const PaymentMethodButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  button {
    padding: 1rem;
    border: 1px solid ${props => props.theme['base-card']};
    border-radius: 6px;
    background: ${props => props.theme['base-button']};
    font-size: 0.75rem;
    width: 178.67px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    
    &:hover {
      background: ${props => props.theme['purple-light']};
    }

    &:focus {
      border: 1px solid ${props => props.theme['purple']};
      background: ${props => props.theme['purple-light']};
    }
  }
`


export const CheckoutSection = styled.div`
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
