import {
  Divider,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FundsManger from "./FundsManger";
import CircleProgress from "../../General/CircleProgress";

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
    gap: "22px",
  },
  dateContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
};

const FundsStates = () => {
  const isWidth1240 = useMediaQuery("(width: 1240px)");
  return (
    <Grid container sx={styles.container}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h3">Store Stats</Typography>
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

      <Grid item xs={12} sx={{ px: "5px", top: "20px", position: "relative" }}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h2" sx={{ fontSize: "22px" }}>
              Funds Mngr.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing="8px" sx={styles.dateContainer}>
              <Grid item xs={6} textAlign="right">
                <Typography variant="h2" sx={{ fontSize: "16px" }}>
                  26 OCT
                </Typography>
                <Typography variant="caption" textAlign="right">
                  Today
                </Typography>
              </Grid>
              <Grid item>
                <IconButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.7833 0.29197C2.37381 -0.08253 1.7105 -0.08253 1.30127 0.29197C0.892295 0.66762 0.892295 1.27483 1.30127 1.64971L5.74685 5.72178C6.15584 6.09628 6.81914 6.09628 7.22863 5.72178L11.6742 1.64971C12.0832 1.27483 12.0832 0.66762 11.6742 0.29197C11.2647 -0.08253 10.6012 -0.08253 10.1922 0.29197L6.48774 3.68569L2.7833 0.29197Z"
                      fill="#888888"
                    />
                  </svg>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <FundsManger />
      <Divider
        style={{
          width: "100%",
          background: "rgba(221, 221, 221, 1)",
        }}
      />

      <Grid container mt="20px">
        <Grid item flexGrow={1}>
          <Grid container spacing={1.8}>
            <Grid item>
              <CircleProgress
                variant="determinate"
                sx={{ color: "#DB50E0" }}
                value={75}
              />
            </Grid>
            <Grid item>
              <Typography variant="h4">76%</Typography>
              <Typography variant="caption">Organic</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item flexGrow={1} ml={isWidth1240 ? 0 : 3}>
          <Grid container spacing={1.8}>
            <Grid item>
              <CircleProgress
                variant="determinate"
                sx={{ color: "#DB50E0" }}
                value={24}
              />
            </Grid>
            <Grid item>
              <Typography variant="h4">24%</Typography>
              <Typography variant="caption">Other Parts</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FundsStates;
