import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { SideNavBar } from "../../components/Dashboard/SideNavbar";
import { Grid, Typography, Box } from "@mui/material";
import StoreStates from "../../components/Dashboard/Charts/StoreStates";
import Sales from "../../components/Dashboard/Sales";
import TopNavBar from "../../components/Dashboard/TopNavBar";

const Dashboard = () => {
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
                Dashboard
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} lg={7}>
              <StoreStates />
            </Grid>
            <Grid item xs={12} md={12} lg={5}>
              <Sales />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
