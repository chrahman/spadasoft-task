import React from "react";
import { Grid, Box, Typography } from "@mui/material";

const styles = {
  container: {
    background: "#F2F2F2",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.10)",
    p: "20px",
  },
  iconBox: {
    background: "#EBD3EB",
    borderRadius: "100%",
    width: "43px",
    height: "43px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(219, 80, 224, 1)",
  },
  heading: {
    color: "#222",
    fontFamily: "Rubik",
    fontSize: "12.997px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "42.658px",
    letterSpacing: "1.5px",
  },
};

const Card = ({ icon, heading }) => {
  return (
    <Grid container sx={styles.container}>
      <Grid item xs={12}>
        <Box sx={styles.iconBox}>{icon}</Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2" sx={styles.heading}>
          {heading}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Card;
