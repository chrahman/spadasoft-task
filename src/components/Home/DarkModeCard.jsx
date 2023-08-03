import { Grid, Typography } from "@mui/material";
import CustomizedSwitcher from "../General/CustomizedSwitcher";

const styles = {
  container: {
    background: "#F2F2F2",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.10)",
    p: {
      xs: "30.5px 15px",
      sm: "29px 12px 12px 31px",
      md: "29px 12px 12px 31px",
      lg: "29px 12px 12px 31px",
    },
    borderRadius: "4px",
    gap: "22px",
  },
  dateContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
};

const DarkModeCard = () => {
  return (
    <Grid container sx={styles.container}>
      <Grid item xs={12} flexGrow={1}>
        <Grid container spacing={1.8}>
          <Grid item>
            <Typography variant="h1">Dark Mode</Typography>
            <Typography
              variant="span"
              sx={{
                fontsize: "11.998px",
                color: "#222",
                lineHeight: "42.658px",
              }}
            >
              Enabled
            </Typography>
          </Grid>
          <Grid item xs={12} mt={"41px"}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item>
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
                        d="M2.9997 1.49951C2.9997 0.671152 2.32842 -1.39475e-05 1.49994 -1.39475e-05C0.6717 -1.39475e-05 -0.000339985 0.671152 -0.000339985 1.49951C-0.000339985 2.32826 0.6717 2.99981 1.49994 2.99981C2.32842 2.99981 2.9997 2.32826 2.9997 1.49951ZM8.5001 -1.39475e-05C9.32832 -1.39475e-05 10.0001 0.671152 10.0001 1.49951C10.0001 2.32826 9.32832 2.99981 8.5001 2.99981C7.6716 2.99981 7.00008 2.32826 7.00008 1.49951C7.00008 0.671152 7.6716 -1.39475e-05 8.5001 -1.39475e-05ZM15.5 -1.39475e-05C16.3285 -1.39475e-05 16.9998 0.671152 16.9998 1.49951C16.9998 2.32826 16.3285 2.99981 15.5 2.99981C14.6715 2.99981 13.9997 2.32826 13.9997 1.49951C13.9997 0.671152 14.6715 -1.39475e-05 15.5 -1.39475e-05Z"
                        fill="#888888"
                      />
                    </svg>
                  </Grid>
                  <Grid item textAlign="right">
                    <CustomizedSwitcher />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DarkModeCard;
