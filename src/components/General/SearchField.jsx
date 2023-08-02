import React, { Fragment } from "react";
import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";
import SearchIcon from "../../assets/images/Search.svg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    borderBottom: "1px solid #E0E0E0",
    marginLeft: "35px",
    paddingLeft: 5,
    paddingBottom: "15px",
    marginBottom: "-15px",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "61ch",
    },
  },
}));

const SearchField = () => {
  return (
    <Fragment>
      <Search>
        <SearchIconWrapper sx={{ p: 0, mt: "4px" }}>
          <img src={SearchIcon} alt="search" width="20" height="20" />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search for a number..."
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Fragment>
  );
};

export default SearchField;
