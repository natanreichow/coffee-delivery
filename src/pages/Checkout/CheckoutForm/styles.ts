import styled from "styled-components";

export const CheckoutFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 640px;
`
export const AddressSection = styled.div`
  background: ${props => props.theme['base-card']};
  padding: 2rem;
  border-radius: 6px;
  max-width: 100%;
`

export const AddressSectionHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

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

export const PaymentSection = styled.div`
  background: ${props => props.theme['base-card']};
  padding: 2rem;
  border-radius: 6px;
  max-width: 100%;
`

export const PaymentSectionHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

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

