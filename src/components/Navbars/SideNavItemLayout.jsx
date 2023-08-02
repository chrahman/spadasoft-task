import { Box, ButtonBase } from "@mui/material";

export const SideNavItem = ({ icon, path, title, active }) => {
  const linkProps = path
    ? {
        component: "a",
        href: path,
        target: "_blank",
      }
    : {};

  return (
    <li>
      <ButtonBase
        sx={{
          alignItems: "center",
          borderRadius: 1,
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
          borderLeft: active ? "4px solid #CE57D0" : "none",
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
            <img src={icon} alt={title} />
          </Box>
        )}
      </ButtonBase>
    </li>
  );
};
