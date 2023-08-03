import { Box, Drawer, Stack, useMediaQuery } from "@mui/material";
import { items } from "./NavItems";
import { SideNavItem } from "./SideNavItemLayout";
import Settings from "../../assets/images/nav-icons/settings.svg";
import Logout from "../../assets/images/nav-icons/logout.svg";

const styles = {
  drawer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#222222",
    position: "relative",
  },
  nav: {
    flexGrow: 1,
    px: 2,
    pt: 2,
  },
  stack: {
    listStyle: "none",
    p: 0,
    m: 0,
  },
};

export const SideNavBar = ({ open, onClose, active }) => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const content = (
    <Box sx={styles.drawer}>
      <Box
        sx={{
          background: "#FAFAFA",
          width: "100%",
          height: "90px",
        }}
      ></Box>
      <Box />
      <Box component="nav" sx={styles.nav}>
        <Stack component="ul" spacing={0} sx={styles.stack}>
          {items.map((item) => {
            return (
              <SideNavItem
                icon={item.icon}
                key={item.title}
                path={item.path}
                title={item.title}
                active={active}
              />
            );
          })}
        </Stack>
      </Box>

      <Box sx={{ px: 2, py: 3 }}>
        <Stack component="ul" spacing={0} sx={styles.stack}>
          <SideNavItem
            icon={Settings}
            key={"Settings"}
            path={"/settings"}
            title={"Settings"}
          />
          <SideNavItem
            icon={Logout}
            key={"Logout"}
            path={"/logout"}
            title={"Logout"}
          />
        </Stack>
      </Box>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            width: 104,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          width: 104,
        },
      }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
