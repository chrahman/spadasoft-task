import {
  Container,
  Grid,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoIcon from "../../assets/images/LogoIcon.svg";
import LoginForm from "../../components/Auth/LoginForm";
import Tabs from "../../components/General/Tabs";
import SignUpForm from "../../components/Auth/SignUpForm";
import React, { useState } from "react";
import Button from "../../components/General/Button";

const styles = {
  container: {
    pt: "27px",
    px: { xs: "8px", sm: "7px", md: "27px", lg: "27px" },
    fill: "linear-gradient(225deg, #FA4A6F 0%, #EF5395 30.91%, #DE4DCB 75.85%, #CE4CE6 100%), #E252BF",
    background:
      "linear-gradient(225deg, #FA4A6F 0%, #EF5395 30.91%, #DE4DCB 75.85%, #CE4CE6 100%), #E252BF",
    height: "100%",
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
    borderRadius: "8px",
    width: "100%",
    p: "18px 12.5px",
    color: " #E23595",
    fontFamily: "Rubik",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "28px",
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
    borderRadius: "8px",
    width: "100%",
    p: "18px 12.5px",
    color: " #FFFFFF",
    fontFamily: "Rubik",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "28px",
    "&:hover": {
      background: "white",
      color: " black",
    },
  },
  tabs: {
    color: "white",
    width: "100%",
  },
  navigateButton: {
    color: "white",
    background: "transparent",
    width: "75px",
    boxShadow: "none",
    p: "0",
    fontSize: "11.003px",
    textDecoration: "underline",
    "&:hover": {
      background: "transparent",
    },
  },
};

const Auth = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleBack = () => {
    navigate("/login");
  };

  const labels = ["Login", "Sign Up"];
  const components = [<LoginForm />, <SignUpForm />];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleNavigate = () => {
    if (selectedTab === 0) {
      setSelectedTab(1);
    } else {
      setSelectedTab(0);
    }
  };

  return (
    <Container maxWidth="100%" sx={styles.container}>
      <Grid container alignItems="start" sx={{ mb: "32px" }}>
        <Grid item>
          <IconButton onClick={handleBack} sx={{ color: "white" }}>
            <ArrowBackIcon />
          </IconButton>
        </Grid>
        <Grid item flexGrow={1} textAlign="center">
          <img src={LogoIcon} alt="logoIcon" />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6} lg={5} xl={4} textAlign="center">
          <Tabs
            selectedTab={selectedTab}
            handleTabChange={handleTabChange}
            components={components}
            labels={labels}
          />
        </Grid>
      </Grid>

      <Grid
        container
        maxWidth="sm"
        sx={{ mx: "auto", pt: selectedTab === 1 ? "0px" : "47px", pb: "20px" }}
      >
        <Grid item xs={12} mb={2.5}>
          <Divider sx={{ width: "100%", height: "1px", background: "white" }} />
        </Grid>
        <Grid item xs={12} textAlign="center" sx={{ color: "white" }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 700,
              fontSize: "11.003px",
              textTransform: "uppercase",
              color: "#EEE",
            }}
          >
            {selectedTab === 0 ? "new user?" : "Already did this?"}
            <Button
              text={selectedTab === 0 ? "Sign Up" : "Login In"}
              customStyles={styles.navigateButton}
              onClick={handleNavigate}
            ></Button>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Auth;
