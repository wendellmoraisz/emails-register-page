import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import IFPALogo from "../../assets/ifpa_logo.svg";
import { registerEmail } from "../../services/email-service";
import Email from "../../interfaces/Email";
import { toast } from "react-toastify";
import updateToastByHttpStatusCode from "../../Common/updateToastByHttpStatusCode";

const RegisterEmail = () => {

  const [emailValue, setEmailValue] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const toastId = "email-toast";
    toast.loading("Estamos cadastrando o seu e-mail...", { toastId });

    const data = new FormData(event.currentTarget);
    const email: Email = {
      address: data.get("email") as string
    }

    try {
      const response = await registerEmail(email);
      updateToastByHttpStatusCode(toastId, response.statusCode)
    } catch(e) {
      updateToastByHttpStatusCode(toastId, 500);
    }

    setEmailValue("");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Box sx={{
          width: 200,
        }}>
          <img src={IFPALogo} />
        </Box>
        <Typography component="h1" variant="h6" fontWeight="bold" align="center">
          Inscreva-se para receber as notícias do IFPA Campus Altamira direto na sua caixa de e-mails
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Seu principal e-mail"
            type="email"
            name="email"
            autoComplete="email"
            value={emailValue}
            onChange={e => setEmailValue(e.target.value)}
            autoFocus
            required
            InputProps={{
              endAdornment: (
                <EmailOutlinedIcon
                  color="primary"
                  sx={{ mr: 1 }}
                />
              )
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Quero me inscrever
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default RegisterEmail;