import { Grid, Typography } from "@mui/material";
import { projectName } from "../constants/project";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Grid item width="100%" marginTop="30px" padding="30px 0" style={{ backgroundColor: "#2C9F40" }}>
            <Typography color="#fff" fontSize="1rem" textAlign="center" variant="body2">
                &copy; {currentYear} {projectName}. Todos os direitos reservados.
            </Typography>
        </Grid>
    );
}

export default Footer;