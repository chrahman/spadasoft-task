import React from "react";
import { Box } from "@mui/material";
import { LoadingButton as MuiButton } from "@mui/lab";

const styles = {
  button: {
    textTransform: "uppercase",
    lineHeight: "16px",
    padding: "10px",
    fontWeight: 600,
    fontSize: "13px",
    borderRadius: "8px",
  },
  textBox: {
    width: "85%",
    textAlign: "center",
    fontFamily: "Rubik",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "28px",
  },
};

const Button = ({
  variant = "contained",
  text = "",
  loading = false,
  customStyles,
  color,
  size = "medium",
  fullWidth = false,
  startIcon = null,
  ...props
}) => {
  return (
    <MuiButton
      sx={{ ...styles.button, ...customStyles }}
      variant={variant}
      loading={loading}
      color={color}
      size={size}
      fullWidth={fullWidth}
      disableElevation
      startIcon={startIcon}
      {...props}
    >
      <Box sx={styles.textBox}>{text}</Box>
    </MuiButton>
  );
};

export default Button;
