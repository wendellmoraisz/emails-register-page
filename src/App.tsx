import { ThemeProvider } from "@emotion/react"
import RegisterEmail from "./pages/register-email"
import { muiTheme } from "./muiThemeConfig"

function App() {

  return (
    <ThemeProvider theme={muiTheme}>
      <RegisterEmail />
    </ ThemeProvider>
  )
}

export default App
