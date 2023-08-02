import React from "react";
import { Button, Box, Divider, Grid, Typography } from "@mui/material";

const styles = {
  container: {
    background: "#F2F2F2",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.10)",
    p: {
      xs: "30.5px 15px",
      sm: "30.5px 39px",
      md: "30.5px 39px",
      lg: "30.5px 39px",
    },
    borderRadius: "4px",
    gap: "15px",
  },
  dateContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
  button: {
    background: "#5D8AC7",
    borderRadius: "4px",
    color: "#FFF",
    fontFamily: "Rubik",
    fontSize: "8.998px",
    fontStyle: "normal",
    fontWeight: 700,
    textTransform: "uppercase",
  },
};

const Sales = () => {
  const salesItems = [1, 2, 3, 4];
  return (
    <Grid container sx={styles.container}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h3">Sales</Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.8786 2.63626C7.2691 2.24558 7.2691 1.61256 6.8786 1.22188C6.48812 0.8312 5.85514 0.8312 5.46466 1.22188L1.22176 5.46424C0.83102 5.8553 0.83102 6.48834 1.22176 6.87862C1.61224 7.2693 2.24548 7.2693 2.63598 6.87862L6.8786 2.63626ZM15.3639 2.63626C15.7544 3.02656 15.7544 3.65958 15.3639 4.05026L4.05018 15.3637C3.6597 15.7544 3.02672 15.7544 2.63598 15.3637C2.24548 14.9734 2.24548 14.34 2.63598 13.9497L13.9497 2.63626C14.3404 2.24558 14.9734 2.24558 15.3639 2.63626ZM16.7784 11.1214C17.1688 11.5121 17.1688 12.1451 16.7784 12.5358L12.5355 16.7781C12.145 17.1688 11.512 17.1688 11.1215 16.7781C10.7308 16.3878 10.7308 15.7544 11.1215 15.3637L15.3639 11.1214C15.7544 10.7307 16.3876 10.7307 16.7784 11.1214Z"
                fill="#CCCCCC"
              />
            </svg>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {salesItems.length &&
          salesItems.map((item, index) => (
            <Box key={index}>
              <Grid container p="15px 22px">
                <Grid item xs={6}>
                  <Typography variant="h4">Sylvia</Typography>
                  <Typography variant="caption">
                    Alllen Durss 11:30 AM
                  </Typography>
                </Grid>
                <Grid item xs={6} textAlign="right">
                  <Typography variant="h4">+27.98</Typography>
                </Grid>
                <Grid item xs={12} mt={"4px"}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Button sx={styles.button}>Pay Pal</Button>
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="3"
                        viewBox="0 0 17 3"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.00022 1.50024C3.00022 0.671879 2.32844 -5.80549e-05 1.49994 -5.80549e-05C0.671449 -5.80549e-05 0.000179052 0.671879 0.000179052 1.50024C0.000179052 2.3286 0.671449 3.00016 1.49994 3.00016C2.32844 3.00016 3.00022 2.3286 3.00022 1.50024ZM8.5001 -5.80549e-05C9.32859 -5.80549e-05 9.99986 0.671879 9.99986 1.50024C9.99986 2.3286 9.32859 3.00016 8.5001 3.00016C7.67162 3.00016 6.99984 2.3286 6.99984 1.50024C6.99984 0.671879 7.67162 -5.80549e-05 8.5001 -5.80549e-05ZM15.5 -5.80549e-05C16.3285 -5.80549e-05 16.9998 0.671879 16.9998 1.50024C16.9998 2.3286 16.3285 3.00016 15.5 3.00016C14.6715 3.00016 13.9997 2.3286 13.9997 1.50024C13.9997 0.671879 14.6715 -5.80549e-05 15.5 -5.80549e-05Z"
                          fill="#888888"
                        />
                      </svg>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Divider sx={{ color: "#DDD" }} />
            </Box>
          ))}
      </Grid>
    </Grid>
  );
};

export default Sales;
