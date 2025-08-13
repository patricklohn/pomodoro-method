import { ThemeProvider } from "styled-components"
import GlobalStyle from "./global"
import defaultTheme from "./styles/themes/defaultTheme"
import Button from "./components/Button"

function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant ="primary"/>
      <Button variant ="secondary"/>
      <Button variant ="success"/>
      <Button variant ="danger"/>
      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  )
}

export default App
