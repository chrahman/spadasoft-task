import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    info: {
      main: "#D8D8D8",
    },
    primary: {
      main: "#EEEEEE",
    },
    text: {
      main: "#EEEEEE",
    },
  },
  typography: {
    fontFamily: "Rubik sans-serif",
    fontWeight: "600",
    tabs: {
      color: "red",
    },
    poster: {
      color: "#1A2733",
    },
    h1: {
      fontSize: "36px",
      fontFamily: "Rubik sans-serif",
      fontWeight: 400,
    },
    h2: {
      color: "#1A1A1A",
      fontFamily: "Rubik",
      fontSize: "26px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "28px",
      letterSpacing: "1.3px",
    },
    h3: {
      color: "#535353",
      fontFamily: "Rubik",
      fontSize: "15px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "28px",
      letterSpacing: "1.5px",
    },
    h4: {
      color: "#1A1A1A",
      fontFamily: "Rubik",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "28px",
      letterSpacing: "1.35px",
    },
    h5: {
      color: "#1A2733",
      fontFamily: "Rubik",
      fontSize: "16px",
      fontWeight: "bold",
      letterSpacing: 0,
      lineHeight: "22px",
    },
    caption: {
      opacity: 0.5,
      color: "#222",
      fontFamily: "Rubik",
      fontSize: "10.998px",
      fontStyle: "normal",
      fontWeight: 500,
    },
  },
  TablePagination: {
    rowsPerPage: {
      display: "flex",
      border: "1px solid black",
    },
  },
  FormLabel: {
    fontSize: "2rem",
  },
});
