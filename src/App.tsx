import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import GlobalStyle from "./global"
import defaultTheme from "./styles/themes/defaultTheme"
import Router from "./Router"
//import Button from "./components/Button"

function App() {
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router/>
        <GlobalStyle></GlobalStyle>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
