import { Divider, Grid, Typography } from "@mui/material";

const styles = {
  container: {
    background: "#F2F2F2",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.10)",
    p: {
      xs: "30.5px 15px",
      sm: "39px 28px 18px 28px",
      md: "39px 28px 18px 28px",
      lg: "39px 28px 18px 28px",
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

const SalesCard = ({
  marginBottom,
  headerRightIcon,
  headerLeftIcon,
  bodyHeading,
  bodyCaption,
  footer,
}) => {
  return (
    <Grid container sx={styles.container}>
      <Grid item xs={12} px="4px" sx={{ marginBottom: marginBottom }}>
        <Grid container>
          <Grid item xs={6}>
            {headerLeftIcon}
          </Grid>
          <Grid item xs={6} textAlign="right">
            {headerRightIcon || (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.8787 2.63618C7.2692 2.2455 7.2692 1.61248 6.8787 1.2218C6.48822 0.83112 5.85498 0.83112 5.4645 1.2218L1.22186 5.46456C0.83138 5.85524 0.83138 6.48826 1.22186 6.87856C1.61234 7.26922 2.24558 7.26922 2.63608 6.87856L6.8787 2.63618ZM15.3637 2.63618C15.7542 3.02686 15.7542 3.65988 15.3637 4.05018L4.05028 15.3641C3.6598 15.7547 3.02656 15.7547 2.63608 15.3641C2.24558 14.9734 2.24558 14.3404 2.63608 13.9497L13.9498 2.63618C14.3403 2.2455 14.9735 2.2455 15.3637 2.63618ZM16.7782 11.1213C17.1687 11.5116 17.1687 12.145 16.7782 12.5357L12.5356 16.778C12.1451 17.1691 11.5118 17.1691 11.1213 16.778C10.7309 16.3878 10.7309 15.7547 11.1213 15.3641L15.3637 11.1213C15.7542 10.7306 16.3877 10.7306 16.7782 11.1213Z"
                  fill="#CCCCCC"
                />
              </svg>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item flexGrow={1}>
          <Grid container spacing={1.8} gap="7px">
            <Grid item>
              <Typography variant="h1">{bodyHeading}</Typography>
              <Typography
                variant="span"
                sx={{
                  fontsize: "11.998px",
                  color: "#222",
                  lineHeight: "42.658px",
                }}
              >
                {bodyCaption}
              </Typography>
            </Grid>
            <Divider
              style={{
                width: "100%",
                background: "rgba(221, 221, 221, 1)",
              }}
            />
            <Grid item xs={12}>
              {footer}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SalesCard;
