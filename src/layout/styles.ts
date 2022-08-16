import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  padding: 0 2rem;
  background: ${props => props.theme['base-background']};

  margin: 0 auto;
  display: flex;
  flex-direction: column;
`