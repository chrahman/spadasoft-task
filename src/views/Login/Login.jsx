import { useNavigate } from "react-router-dom";
import { Container, Grid, Paper, Divider, Typography } from "@mui/material";
import Logo from "../../assets/images/Logo.svg";
import GoogleLogo from "../../assets/images/GoogleLogo.svg";
import FacebookLogo from "../../assets/images/FacebookLogo.svg";
import Button from "../../components/General/Button";

const styles = {
  container: {
    pb: "59px",
    pt: "79px",
    fill: "linear-gradient(225deg, #FA4A6F 0%, #EF5395 30.91%, #DE4DCB 75.85%, #CE4CE6 100%), #E252BF",
    background:
      "linear-gradient(225deg, #FA4A6F 0%, #EF5395 30.91%, #DE4DCB 75.85%, #CE4CE6 100%), #E252BF",
    height: { xs: "100%", md: "100vh" },
    m: 0,
  },
  paper: {
    background: "transparent",
    boxShadow: "none",
    p: 2,
    margin: "auto",
    maxWidth: "324px",
    flexGrow: 1,
  },
  button: {
    display: "flex",
    background: "white",
    boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.10)",
    width: "100%",
    color: " #E23595",
    "&:hover": {
      background: "white",
      color: " #E23595",
    },
  },
  signUpButton: {
    display: "flex",
    background: "transparent",
    border: "1px solid #FFFFFF",
    boxSizing: "border-box",
    width: "100%",
    color: " #FFFFFF",
    "&:hover": {
      background: "white",
      color: " black",
    },
  },
  dividerBox: {
    width: "205px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    my: "10px",
  },
};

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/auth");
  };
  return (
    <Container maxWidth="100%" sx={styles.container}>
      <Paper sx={styles.paper}>
        <Grid container direction="column">
          <Grid
            item
            xs={3}
            md={3}
            lg={3}
            textAlign="center"
            sx={{ mb: "108px" }}
          >
            <img src={Logo} alt="logo" />
          </Grid>
          <Grid item xs={3}>
            <Grid container gap="10px">
              <Grid item xs={12}>
                <Button
                  text="Login"
                  customStyles={styles.button}
                  onClick={handleLogin}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  text="Login with Google"
                  customStyles={{ ...styles.button, color: "#C25457" }}
                  startIcon={<img src={GoogleLogo} alt="Login with Google" />}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  text="Login with Facebook"
                  customStyles={{ ...styles.button, color: "#3D64C3" }}
                  startIcon={
                    <img src={FacebookLogo} alt="Login with Facebook" />
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container sx={styles.dividerBox}>
              <Grid item flexGrow={1}>
                <Divider
                  sx={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                />
              </Grid>
              <Grid
                item
                sx={{
                  width: "46px",
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: "Rubik",
                  fontSize: "11.003px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "42.676px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  height: "43px",
                }}
              >
                Or
              </Grid>
              <Grid item flexGrow={1}>
                <Divider
                  sx={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button customStyles={styles.signUpButton} text="Sign Up" />
          </Grid>
        </Grid>
      </Paper>
      <Grid container maxWidth="sm" sx={{ mx: "auto", mt: "47px" }}>
        <Grid item xs={12} mb={2.5}>
          <Divider sx={{ width: "100%", height: "1px", background: "white" }} />
        </Grid>
        <Grid item xs={12} textAlign="center" sx={{ color: "white" }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 800,
              fontSize: "11.003px",
              textTransform: "uppercase",
            }}
          >
            Made by Royalz, V 1.0
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
