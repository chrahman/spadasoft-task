import React from "react";
import { Tabs as MuiTabs, Tab, Box } from "@mui/material";

const styles = {
  container: {
    backgroundColor: "transparent",
  },
  tab: {
    minWidth: "50%",
    color: "#EEE",
    textAlign: "center",
    fontFamily: "Rubik",
    fontSize: "11.998px",
    fontStyle: "normal",
    opacity: "0.5",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "3px",
    textTransform: "uppercase",
    borderBottom: `1px solid rgba(238, 238, 238, 0.25)`,
  },
  activeTab: {
    opacity: 1,
  },
  fullWidthTabs: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    "& .MuiTabs-indicator": {
      backgroundColor: "white",
      color: "white",
    },
  },
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Tabs = ({
  labels = [],
  selectedTab = 0,
  handleTabChange,
  components = [],
  padding = 3,
  tabHeaderPadding,
}) => {
  return (
    <>
      <Box
        sx={{ ...styles.container, padding: tabHeaderPadding || "3px 24px 0" }}
      >
        <MuiTabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="scrollable"
          sx={styles.fullWidthTabs}
        >
          {labels.map((label, index) => (
            <Tab
              label={label}
              {...a11yProps(index)}
              id={`full-width-tabpanel-${index}`}
              aria-labelledby={`full-width-tab-${index}`}
              sx={{
                ...styles.tab,
                ...(selectedTab === index ? styles.activeTab : {}),
              }}
              key={index}
            />
          ))}
        </MuiTabs>
      </Box>
      <Box p={padding} sx={{ height: "calc( 100% - 52px)", overflow: "auto" }}>
        {components[selectedTab]}
      </Box>
    </>
  );
};

export default Tabs;
