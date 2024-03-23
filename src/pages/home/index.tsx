import { CheckCircleOutline } from "@mui/icons-material";
import { Typography, Container, Grid, Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import IFPALogo from "../../assets/ifpa_logo.svg";
import IfpaCapa from "../../assets/image copy.png";
import Footer from "../../components/Footer";
import { projectName } from "../../constants/project";

const Home = () => {

    const defaulTitleFontSize = "1.2rem";
    const defaultBodyFontSize = "1rem";
    const defaultGridItemSx = {
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        padding: "20px",
        marginTop: "20px",
        width: "500px",
        transition: "all 0.3s ease",
        "&:hover": {
            transform: "translateY(-5px)",
        },
    }

    return (
        <>
            <img src={IfpaCapa} alt="" className="styled-image" />
            <Container>
                <Box sx={{
                    width: 200,
                    margin: "-60px auto 30px auto"
                }}>
                    <img src={IFPALogo} />
                </Box>
                <Typography marginBottom="30px" variant="h1" fontWeight="500" align="center" fontSize="1.7rem" gutterBottom>
                    Bem-vindo ao {projectName}!
                </Typography>

                <Grid container spacing={4} display="flex" gap="30px" justifyContent="center" flexWrap="wrap">
                    <Grid item xs={12} sx={defaultGridItemSx}>
                        <Typography variant="body1" fontSize={defaultBodyFontSize} textAlign="justify">
                            Em um mundo em constante movimento, informações relevantes e oportunidades acadêmicas muitas vezes se perdem na correria do dia a dia. O {projectName} nasceu da necessidade de garantir que cada membro da nossa comunidade não apenas receba, mas também se envolva com as notícias e eventos que formam o coração do nosso instituto.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <Link
                            to="/register-email"
                            style={{
                                textDecoration: "none",
                                color: "#fff",
                                backgroundColor: "#2C9F40",
                                padding: "10px 20px",
                                borderRadius: "5px",
                                transition: "all 0.3s ease",
                            }}
                        >
                            Quero me inscrever
                        </Link>

                    </Grid>
                    <Grid sx={defaultGridItemSx}>
                        <Divider>
                            <Typography variant="h2" fontSize={defaulTitleFontSize} gutterBottom>
                                Sobre o Projeto
                            </Typography>
                        </Divider>
                        <Typography variant="body1" fontSize={defaultBodyFontSize} >
                            <strong>Por que isso é importante?</strong> Cada dia no IFPA está cheio de novas informações, oportunidades de aprendizado e eventos comunitários. No entanto, percebemos um desafio: muitas dessas riquezas permanecem inexploradas devido à baixa visitação ao nosso site oficial. Aqui é onde entramos.
                        </Typography>
                        <Typography variant="body1" fontSize={defaultBodyFontSize} >
                            <strong>Nossa missão</strong> é garantir que você esteja sempre informado e envolvido, independente de onde esteja ou quão ocupado esteja.
                        </Typography>
                    </Grid>

                    <Grid item sx={defaultGridItemSx}>
                        <Divider>
                            <Typography variant="h2" fontSize={defaulTitleFontSize} gutterBottom>
                                Como Funciona
                            </Typography>
                        </Divider>
                        <Typography variant="body1" fontSize={defaultBodyFontSize} textAlign="justify">
                            <strong>Extração Inteligente de Notícias:</strong> Utilizamos tecnologia de ponta para monitorar e extrair
                            as notícias mais recentes dos sites do <a target="_blank" href="https://ifpa.edu.br/ultimas-noticias" className="styled-link">IFPA Geral</a> e do <a target="_blank" href="https://altamira.ifpa.edu.br/ultimas-noticias" className="styled-link">campus Altamira.</a>
                        </Typography>
                        <Typography variant="body1" fontSize={defaultBodyFontSize} textAlign="justify">
                            <strong>Entrega Personalizada:</strong> Após se cadastrar em nosso sistema, você começará a receber atualizações regulares diretamente no seu e-mail.
                        </Typography>
                    </Grid>

                    <Grid item sx={defaultGridItemSx}>
                        <Divider>
                            <Typography variant="h2" fontSize="1.3rem" gutterBottom>
                                Benefícios de Se Cadastrar
                            </Typography>
                        </Divider>
                        <Typography variant="body1" fontSize={defaultBodyFontSize}>
                            <CheckCircleOutline color="primary" />
                            <strong>Mantenha-se Informado:</strong> Não perca mais nenhum evento ou edital importante do IFPA.
                        </Typography>
                        <Typography variant="body1" fontSize={defaultBodyFontSize} >
                            <CheckCircleOutline color="primary" />
                            <strong>Conveniência:</strong> Receba tudo diretamente no seu e-mail.
                        </Typography>
                        <Typography variant="body1" fontSize={defaultBodyFontSize}>
                            <CheckCircleOutline color="primary" />
                            <strong>Totalmente Gratuito:</strong> Você não precisará pagar nada para receber as notícias.
                        </Typography>
                    </Grid>

                    <Grid item sx={defaultGridItemSx}>
                        <Divider>
                            <Typography variant="h2" fontSize="1.3rem" gutterBottom>
                                Pronto para Ficar Conectado?
                            </Typography>
                        </Divider>
                        <Typography variant="body1" fontSize={defaultBodyFontSize}>
                            Não perca a chance de fazer parte desse movimento inovador dentro da nossa comunidade acadêmica.
                            <Link to="/register-email" style={{
                                textDecoration: "none",
                                fontWeight: "bold",
                                color: "#2C9F40"

                            }}> Clique aqui </Link>
                            para se cadastrar e começar a receber as notícias que importam para você.
                        </Typography>
                    </Grid>

                </Grid>
            </Container>
            <Footer />

        </>
    )
}

export default Home;