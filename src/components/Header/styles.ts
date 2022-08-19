import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    display: flex;
    align-items: center;
    color: ${props => props.theme["yellow-dark"]};
    background: ${props => props.theme['yellow-light']};
    padding: 0.5rem;
    border-radius: 4px;
    border: 2px solid white;

    &:hover {
      border: 2px solid ${props => props.theme["yellow-dark"]};
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: -2.1rem;
    margin-left: 1.2rem;
    background: ${props => props.theme['yellow-dark']};
    color: white;
    border-radius: 999px;
    font-weight: bold;
    font-size: 0.75rem;
    width: 22px;
    height: 22px;
    border: 2px solid white;
  }
`

export const LocationTag = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme['purple']};
  background: ${props => props.theme['purple-light']};
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
`