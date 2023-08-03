import React from "react";
import { Grid, FormControlLabel, Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const styles = {
  label: {
    "& .MuiFormControlLabel-label": {
      color: "#EEE",
      fontFamily: "Rubik",
      fontSize: "10.998px",
      fontWeight: 700,
      lineHeight: "normal",
      textTransform: "uppercase",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  checkButton: {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "#DB50E0",
    cursor: 'pointer',
    boxShadow: '0px 20px 15px rgba(0, 0, 0, 0.05)',
  },
};

const TermsAndCondition = ({ label, action, onClick }) => {
  return (
    <Grid container alignItems="center" pt="38px" pb="35px">
      <Grid item xs={8} textAlign="left">
        <FormControlLabel control={action} label={label} sx={styles.label} />
      </Grid>
      <Grid item xs={4} sx={styles.buttonContainer}>
        <Box sx={styles.checkButton} onClick={onClick}>
          <CheckIcon />
        </Box>
      </Grid>
    </Grid>
  );
};

export default TermsAndCondition;
