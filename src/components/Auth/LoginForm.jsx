import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Switch } from "@mui/material";
import GenericTextField from "../General/GenericTextField";
import GoogleLogo from "../../assets/images/GoogleLogo.svg";
import FacebookLogo from "../../assets/images/FacebookLogo.svg";
import TermsAndCondition from "../General/TermsAndCondition";
import Button from "../General/Button";

const styles = {
  container: {
    width: { sm: "100%", md: "323px" },
    mt: "66px",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    flexDirection: "column",
  },
  heading: {
    color: "white",
    fontSize: "32px",
    fontFamily: "Rubik",
    fontWeight: "bold",
    lineHeight: "28px",
  },
  button: {
    display: "flex",
    background: "white",
    boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.10)",
    borderRadius: "8px",
    width: "100%",
    color: " #E23595",

    "&:hover": {
      background: "white",
      color: " #E23595",
    },
  },
  switch: {
    mr: 0.5,
    color: "white",
    borderColor: "white",
  },
};

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("navigate");
    navigate("/dashboard");
  };

  return (
    <Grid container sx={styles.container}>
      <Grid item mb="39px">
        <Typography variant="h4" sx={styles.heading}>
          Login
        </Typography>
      </Grid>
      <Grid item>
        <Grid container gap="21px">
          <Grid item xs={12}>
            <GenericTextField label="Name" name="Edmur" />
          </Grid>
          <Grid item xs={12}>
            <GenericTextField
              label="Password"
              name="Password"
              type="password"
            />
          </Grid>
        </Grid>
        <TermsAndCondition
          label="Remember me"
          isChecked={false}
          action={<Switch sx={styles.switch} />}
          onClick={handleLogin}
        />
        <Grid container gap="9px">
          <Grid item xs={12}>
            <Button
              customStyles={styles.button}
              text="Login with Google"
              startIcon={<img src={GoogleLogo} alt="Facebook Sign IN" />}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              customStyles={{ ...styles.button, color: "#3D64C3" }}
              text="Login with Facebook"
              startIcon={<img src={FacebookLogo} alt="Facebook SignIn" />}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
