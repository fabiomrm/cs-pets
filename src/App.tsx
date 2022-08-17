import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { AuthContextProvider } from "./context/AuthContext";
import { Router } from "./Routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";



export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AuthContextProvider>
          <Header />
          <Router />
        </AuthContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}


