import { ThemeProvider } from "@emotion/react";
import RegisterEmail from "./pages/register-email";
import { muiTheme } from "./muiThemeConfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {

  return (
    <ThemeProvider theme={muiTheme}>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        theme="light"
        hideProgressBar={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-email" element={<RegisterEmail />} />
        </Routes>
      </BrowserRouter>
    </ ThemeProvider>
  )
}

export default App
