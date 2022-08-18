import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
// import { CoffeesContextProvider } from './contexts/CoffeesContext'


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        {/* <CoffeesContextProvider> */}
          <Router />
        {/* </CoffeesContextProvider> */}
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
