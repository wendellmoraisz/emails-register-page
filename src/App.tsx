import { ThemeProvider } from "@emotion/react";
import RegisterEmail from "./pages/register-email";
import { muiTheme } from "./muiThemeConfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <ThemeProvider theme={muiTheme}>
      <ToastContainer 
        position="top-center"
        autoClose={2500}
        theme="light"
        hideProgressBar={false}
      />
      <RegisterEmail />
    </ ThemeProvider>
  )
}

export default App
