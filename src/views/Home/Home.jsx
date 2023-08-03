import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { SideNavBar } from "../../components/Navbars/SideNavbar";
import { Grid, Typography, Box } from "@mui/material";
import TopNavBar from "../../components/Navbars/TopNavBar";
import DateBox from "../../components/Home/DateBox";
import DarkModeCard from "../../components/Home/DarkModeCard";
import SalesCard from "../../components/General/SalesCard";
import FundsStates from "../../components/Home/Charts/FundsStats";
import UsersPieChart from "../../components/Home/Charts/UsersPieChart";
import Card from "../../components/General/Card";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import DollarIcon from "../../assets/images/DollarIcon.svg";

const styles = {
  growText: {
    color: "#1A1A1A",
    fontFamily: "Rubik",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "28px",
  },
};

const Home = () => {
  const [openNav, setOpenNav] = useState(false);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box sx={!isMobile && { width: "104px" }}>
          <SideNavBar onClose={() => setOpenNav(false)} open={openNav} />
        </Box>
        <Box
          sx={{
            width: isMobile ? "100%" : "calc(100% - 104px)",
          }}
        >
          <TopNavBar onNavOpen={() => setOpenNav(true)} />

          <Grid
            container
            spacing={2}
            sx={{ padding: { xs: "20px", md: "50px", lg: "50px" } }}
          >
            <Grid item xs={12} mb={2}>
              <Typography variant="h1" sx={{ fontWeight: 300 }}>
                What’s new
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={3.5}>
                  <DateBox />
                </Grid>
                <Grid item xs={12} md={6} lg={2.5}>
                  <Grid container direction="column" gap={2}>
                    <Grid item xs={12}>
                      <SalesCard
                        marginBottom="62px"
                        headerLeftIcon={
                          <img src={DollarIcon} alt="dollar icon" />
                        }
                        bodyHeading="$12,487"
                        bodyCaption="+864 Comp."
                        footer={
                          <Grid container alignItems="center">
                            <Grid item>
                              <Grid container spacing={1} alignItems="center">
                                <Grid item>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M1.30424 14.1553L13.2483 2.20836H2.03358C1.4815 2.20836 1.03398 1.76066 1.03398 1.20816V1.03402C1.03398 0.48152 1.4815 0.0338199 2.03358 0.0338199H15.6392C15.9979 -0.0565407 16.3938 0.0384991 16.6743 0.31894C16.9484 0.593194 17.0456 0.977054 16.9659 1.32884V14.9663C16.9659 15.5184 16.5184 15.9661 15.9663 15.9661H15.7916C15.2396 15.9661 14.7918 15.5184 14.7918 14.9663V3.7392L2.84126 15.6926C2.41686 16.1171 1.72864 16.1171 1.30424 15.6926C0.8796 15.268 0.8796 14.5795 1.30424 14.1553Z"
                                      fill="#AAAAAA"
                                    />
                                  </svg>
                                </Grid>
                                <Grid item>
                                  <Typography
                                    variant="span"
                                    sx={styles.growText}
                                  >
                                    +24%
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid
                              item
                              sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                flexGrow: "1",
                              }}
                            >
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
                                  d="M2.99988 1.50006C2.99988 0.671697 2.32834 -0.000239968 1.50012 -0.000239968C0.6711 -0.000239968 -0.000159979 0.671697 -0.000159979 1.50006C-0.000159979 2.32842 0.6711 3.00036 1.50012 3.00036C2.32834 3.00036 2.99988 2.32842 2.99988 1.50006ZM8.50002 -0.000239968C9.3285 -0.000239968 10 0.671697 10 1.50006C10 2.32842 9.3285 3.00036 8.50002 3.00036C7.67152 3.00036 7 2.32842 7 1.50006C7 0.671697 7.67152 -0.000239968 8.50002 -0.000239968ZM15.5002 -0.000239968C16.3284 -0.000239968 16.9999 0.671697 16.9999 1.50006C16.9999 2.32842 16.3284 3.00036 15.5002 3.00036C14.6714 3.00036 13.9999 2.32842 13.9999 1.50006C13.9999 0.671697 14.6714 -0.000239968 15.5002 -0.000239968Z"
                                  fill="#888888"
                                />
                              </svg>
                            </Grid>
                          </Grid>
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <DarkModeCard />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6} lg={2.5}>
                  <Grid container direction="column" gap={2}>
                    <Grid item xs={12}>
                      <UsersPieChart />
                    </Grid>
                    <Grid item xs={12}>
                      <SalesCard
                        marginBottom="62px"
                        headerLeftIcon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="19"
                            viewBox="0 0 22 19"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.9517 1.13278C12.4579 1.41637 12.2883 2.04399 12.5735 2.53445L14.5873 5.9997H7.75241L10.0796 2.45662C10.3855 1.99042 10.2039 1.39515 9.67417 1.12623C9.1442 0.857303 8.46651 1.01642 8.1608 1.48224L5.19409 5.9997H2.92218C2.81829 5.9997 2.71812 6.01554 2.62394 6.04492C2.38671 5.97232 2.10249 5.97734 1.82113 6.07715C1.23001 6.28673 0.875744 6.83577 1.02963 7.3035L4.37442 17.4569C4.5089 17.8664 4.98871 18.0771 5.50239 17.9824C5.56283 17.9938 5.62519 17.9998 5.68894 17.9998H16.5996C16.6276 17.9998 16.6553 17.9986 16.6827 17.9964C17.1504 18.0506 17.5719 17.8414 17.696 17.4569L20.9709 7.3035C21.1215 6.83577 20.7749 6.28673 20.1961 6.07715C19.9688 5.99479 19.7395 5.97697 19.5358 6.01404C19.4806 6.00461 19.4239 5.9997 19.3661 5.9997H16.973L14.3625 1.50843C14.0774 1.0176 13.4454 0.849596 12.9517 1.13278ZM5.69671 7.99972H3.64959L6.28489 15.9998H15.8255L18.4059 7.99972H17.3686C17.2913 8.09433 17.1956 8.17675 17.0831 8.24128C16.637 8.49695 16.0788 8.38487 15.7645 7.99972H5.89473C5.82917 8.00489 5.7629 8.00495 5.69671 7.99972Z"
                              fill="#AAAAAA"
                            />
                          </svg>
                        }
                        bodyHeading="New Sale!"
                        footer={
                          <Grid container alignItems="center">
                            <Grid item xs={6}>
                              <Typography
                                sx={{
                                  fontSize: "12px",
                                  color: "#222",
                                  fontWeight: "500",
                                }}
                              >
                                Alexandria
                              </Typography>
                              <Typography
                                variant="span"
                                sx={{
                                  fontSize: "8.99px",
                                  color: "#222",
                                  opacity: "0.5",
                                }}
                              >
                                +24%
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                flexGrow: "1",
                              }}
                            >
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
                                  d="M2.99988 1.50006C2.99988 0.671697 2.32834 -0.000239968 1.50012 -0.000239968C0.6711 -0.000239968 -0.000159979 0.671697 -0.000159979 1.50006C-0.000159979 2.32842 0.6711 3.00036 1.50012 3.00036C2.32834 3.00036 2.99988 2.32842 2.99988 1.50006ZM8.50002 -0.000239968C9.3285 -0.000239968 10 0.671697 10 1.50006C10 2.32842 9.3285 3.00036 8.50002 3.00036C7.67152 3.00036 7 2.32842 7 1.50006C7 0.671697 7.67152 -0.000239968 8.50002 -0.000239968ZM15.5002 -0.000239968C16.3284 -0.000239968 16.9999 0.671697 16.9999 1.50006C16.9999 2.32842 16.3284 3.00036 15.5002 3.00036C14.6714 3.00036 13.9999 2.32842 13.9999 1.50006C13.9999 0.671697 14.6714 -0.000239968 15.5002 -0.000239968Z"
                                  fill="#888888"
                                />
                              </svg>
                            </Grid>
                          </Grid>
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6} lg={3.5}>
                  <Grid container direction="column" gap={2}>
                    <Grid item xs={12}>
                      <FundsStates />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Card heading="Add a Tile" icon={<AddIcon />} />
                        </Grid>
                        <Grid item xs={6}>
                          <Card heading="Settings" icon={<SettingsIcon />} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
