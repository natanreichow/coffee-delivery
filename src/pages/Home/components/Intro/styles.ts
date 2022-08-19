import styled from "styled-components"

export const InfosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 6rem 0;

  @media (max-width: 920px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const InfosText = styled.div`

  h1 {
    color: ${props => props.theme['base-title']};
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 1rem;
  }

  strong {
    font-size: 1.125rem;
    font-weight: 400;
  }
`

export const InfosItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  span {
    background: ${props => props.theme['purple']};
    padding: 0.5rem;
    border-radius: 999px;
    color: ${props => props.theme['base-white']};

    display: flex;
  }
`