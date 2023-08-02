import { Checkbox, Grid, Typography } from "@mui/material";
import React from "react";
import {useNavigate} from 'react-router-dom';
import GenericTextField from "../General/GenericTextField";
import TermsAndCondition from "../General/TermsAndCondition";

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
  checkBox: {
    mr: 0.5,
    color: "white",
    borderColor: "white",
  },
};

const SignUpForm = () => {
  const navigate =useNavigate();
  const handleNavigate = () =>{
    navigate("/dashboard")
  }
  return (
    <Grid container sx={styles.container}>
      <Grid item mb="39px">
        <Typography variant="h4" sx={styles.heading}>
          Join Us
        </Typography>
      </Grid>
      <Grid item>
        <Grid container gap="21px">
          <Grid item xs={12}>
            <GenericTextField label="Edmur" name="login" type="text" />
          </Grid>
          <Grid item xs={12}>
            <GenericTextField
              label="Password"
              name="password"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <GenericTextField
              label="Repeat password"
              name="Repeat password"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <GenericTextField
              label="Email Address"
              name="Email Address"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TermsAndCondition
              label="Remember me"
              isChecked={false}
              action={<Checkbox sx={styles.checkBox} />}
              onClick={handleNavigate}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignUpForm;
