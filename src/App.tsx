import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./global";
import defaultTheme from "./styles/themes/defaultTheme";
import Router from "./Router";
import { CyclesContextProvider } from "./contexts/CyclesContext";
//import Button from "./components/Button"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
        <GlobalStyle></GlobalStyle>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
