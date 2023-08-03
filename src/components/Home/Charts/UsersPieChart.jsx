import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Grid, Container, Typography, Box, useMediaQuery } from "@mui/material";
import BarsSvg from "../../../assets/images/Bars.svg";
import MoreIcon from "../../../assets/images/MoreIcon.svg";

const data = [
  { name: "Group A", value: 22000, background: "#DD94CF" },
  { name: "Group B", value: 0, background: " #DD94CF" },
  {
    name: "Group C",
    value: 2000,
    background: "#E5E5E5",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
  },
  { name: "Group D", value: 0, background: "#DD94CF" },
];

const styles = {
  container: {
    background:
      "linear-gradient(53deg, #CE4CE6 0%, #DE4DCB 100%, #EF5395 100%, #FA4A6F 100%), #333",
    boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.10)",
    p: "38px 39px 12px 39px",
    borderRadius: "4px",
  },
  heading: {
    color: "#FFF",
    fontFamily: "Rubik",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "28px",
    letterSpacing: "1.5px",
  },
  caption: {
    color: "#FFF",
    fontFamily: "Rubik",
    fontSize: "11.998px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "42.658px",
    letterSpacing: "1px",
  },
};

const UsersPieChart = () => {
  const isWidth1240 = useMediaQuery("(width: 1240px)");

  return (
    <Container sx={{ ...styles.container }}>
      <Grid container justifyContent="flex-end">
        <img src={BarsSvg} alt="Bars" />
      </Grid>
      <Box style={{ height: 122, width: isWidth1240 ? 100 : 200 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.background}
                  filter={entry.shadow}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>

      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h1" sx={styles.heading}>
            35%
          </Typography>
          <Typography variant="span" sx={styles.caption}>
            Desktop Users
          </Typography>
        </Grid>
        <Grid item>
          <img src={MoreIcon} alt="more" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UsersPieChart;
