import { ThemeProvider } from "@emotion/react"
import { muiTheme } from "./muiThemeConfig"

function App() {

  return (
    <ThemeProvider theme={muiTheme}>
      ola
    </ ThemeProvider>
  )
}

export default App
