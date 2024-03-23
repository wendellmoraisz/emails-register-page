import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import IFPALogo from "../../assets/ifpa_logo.svg";
import { registerEmail } from "../../services/email-service";
import Email from "../../interfaces/Email";
import { toast } from "react-toastify";
import updateToastByHttpStatusCode from "../../Common/updateToastByHttpStatusCode";
import Footer from "../../components/Footer";
import { FormGroup, FormControlLabel } from "@mui/material";

const RegisterEmail = () => {

  const [emailValue, setEmailValue] = useState("");
  const [checkedIFPAAltamira, setCheckedIFPAAltamira] = useState(true);
  const [checkedIFPAGeral, setCheckedIFPAGeral] = useState(true);

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
    } catch (e) {
      updateToastByHttpStatusCode(toastId, 500);
    }

    setEmailValue("");
  };

  return (
    <div className="register-container">
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
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
          <Typography component="h1" variant="h6" align="center">
            Inscreva-se para receber as notícias do IFPA Campus Altamira direto na sua caixa de e-mails
          </Typography>


          <Box component="form" sx={{ marginTop: 2 }} onSubmit={handleSubmit}>

            <Typography>
              Selecione as opções de origem das notícias que deseja receber
            </Typography>

            <FormGroup row>
              <FormControlLabel control={<Checkbox onChange={(e) => setCheckedIFPAAltamira(e.target.checked)} checked={checkedIFPAAltamira} />} label="IFPA Altamira" />
              <FormControlLabel control={<Checkbox onChange={(e) => setCheckedIFPAGeral(e.target.checked)} checked={checkedIFPAGeral} />} label="IFPA Geral" />
            </FormGroup>

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
      <Footer />
    </div>
  );
}

export default RegisterEmail;