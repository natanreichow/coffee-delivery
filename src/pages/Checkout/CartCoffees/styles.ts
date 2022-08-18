import styled from "styled-components"

export const CartCoffeeContainer = styled.div``

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
  }

  strong {
    font-family: 'Roboto', sans-serif;
  }
`

export const Infos = styled.div`
  display: flex;
  gap: 1rem;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border: 0;
  background: ${props => props.theme['base-button']};
  color: ${props => props.theme['purple']};
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    color: red;
  }
`

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: ${props => props.theme['base-button']};
  margin: 2rem 0;
`