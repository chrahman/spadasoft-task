import { Box, ButtonBase } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export const SideNavItem = ({ icon, path, title, active }) => {
  const linkProps = path
    ? {
        component: "Button",
        onClick: () => handleRouting(path),
      }
    : {};

  const navigate = useNavigate();
  const location = useLocation();

  const handleRouting = (path) => {
    navigate(path);
  };


  return (
    <li>
      <ButtonBase
        sx={{
          alignItems: "center",
          borderRadius: 0,
          display: "flex",
          justifyContent: "flex-center",
          pl: "16px",
          pr: "16px",
          py: "6px",
          textAlign: "center",
          width: "100%",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.04)",
          },
          borderRight: location.pathname === path ? "2px solid #CE57D0" : "none",
        }}
        {...linkProps}
      >
        {icon && (
          <Box
            component="span"
            sx={{
              alignItems: "center",
              display: "inline-flex",
              justifyContent: "center",
              py: 1.5,
            }}
          >
            <img src={icon} alt={title} style={{
              filter: location.pathname === path ? "brightness(100)" : "none",
            }} />
          </Box>
        )}
      </ButtonBase>
    </li>
  );
};
