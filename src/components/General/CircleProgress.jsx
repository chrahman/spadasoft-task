import React from "react";
import { CircularProgress } from "@mui/material";

const styles = {
    container: {
        "& .MuiCircularProgress-circle": {
            strokeLinecap: "round",
        },
        color: '#DB50E0',
        transform: "rotate(360deg) !important",

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