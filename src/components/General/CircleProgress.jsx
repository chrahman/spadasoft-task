import React from "react";
import { CircularProgress } from "@mui/material";

const styles = {
    container: {
        transform: "rotate(360deg)",
        "& .MuiCircularProgress-circle": {
            strokeLinecap: "round",
        },
        color: '#DB50E0'
    }
}

const CircleProgress = ({ variant, value }) => {
    return (
        <CircularProgress
            variant={variant}
            sx={styles.container}
            value={value}
        />
    );
};

export default CircleProgress;