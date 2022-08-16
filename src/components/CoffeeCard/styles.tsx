import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 256px;
  height: 310px;
  background: ${props => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem 1.5rem 1.5rem;
  border-radius: 6px 36px 6px 36px;
  /* margin-bottom: 2rem; */

  img {
    height: 120px;
    width: 120px;
    margin-top: -1rem;
  }

  span {
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    padding: 0.25rem 0.5rem;
    font-size: 0.625rem;
    font-weight: bold;
    border-radius: 999px;
  }

  strong {
    font-size: 1.25rem;
  }

  p {
    text-align: center;
    font-size: 0.875rem;
  }

  form {
    display: flex;
    gap: 0.5rem;
  }
`

export const Buy = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;

  button[type=submit] {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border: 0;
    color: ${props => props.theme['base-white']};
    background: ${props => props.theme['purple-dark']};
    border-radius: 6px;
  }
`



