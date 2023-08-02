import * as React from "react";
import {
  useMediaQuery,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import message from "../../assets/images/MessageIcon.svg";
import activity from "../../assets/images/ActivityIcon.svg";
import dotIcon from "../../assets/images/BellDot.svg";
import LineIcon from "../../assets/images/Line.svg";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchField from "../General/SearchField";

const styles = {
  container: {
    flexGrow: 1,
    "& .MuiToolbar-root": {
      minHeight: "90px",
    },
  },
  appBarContainer: {
    backgroundColor: "#FAFAFA",
    color: "black",
    boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.02)",
  },
  addIcon: {
    color: "#FAFAFA",
    borderRadius: "25px",
    width: "30px",
    height: "30px",
    background: "linear-gradient(#FA4A6F, #EF5395, #DE4DCB, #CE4CE6)",
    boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.10)",
  },
  accountIconButton: {
    marginLeft: "28px",
    marginRight: "0px",
    "&:hover": { backgroundColor: "transparent" },
  },
  avatar: {
    width: "30px",
    height: "30px",
    boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.10)",
  },
  arrowIcon: {
    color: "#888",
    width: "15px",
    height: "15px",
    marginLeft: "5px",
  },
};

export default function TopNavBar({ onNavOpen }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <Box sx={styles.container}>
      <AppBar position="static" sx={styles.appBarContainer}>
        <Toolbar>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={onNavOpen}
            >
              <MenuIcon />
            </IconButton>
          )}
          <SearchField />
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <img src={message} alt="message" width="20" height="20" />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ position: "relative" }}
            >
              <img src={activity} alt="activity" width="20" height="20" />
              <img
                src={dotIcon}
                alt="dotIcon"
                style={{ position: "absolute", bottom: "0px", right: "18px" }}
              />
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              sx={{ marginLeft: "28px", marginRight: "20px" }}
            >
              <AddIcon sx={styles.addIcon} />
            </IconButton>
            <Box>
              <img src={LineIcon} alt="line" />
            </Box>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={styles.accountIconButton}
            >
              <Avatar sx={styles.avatar} />
              <KeyboardArrowDownIcon sx={styles.arrowIcon} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
