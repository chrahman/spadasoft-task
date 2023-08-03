import React from 'react';
import Chart from "react-apexcharts";

var options = {
    series: [42, 42, 42, 42, 65],
    chart: {
        width: 380,
        type: 'polarArea'
    },
    labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
    fill: {
        opacity: 1
    },
    stroke: {
        width: 1,
        colors: ["#0000001A", "#0000001A", "#0000001A", "#0000001A", "#0000001A"]
    },
    yaxis: {
        show: false
    },
    legend: {
        position: 'bottom'
    },
    plotOptions: {
        polarArea: {
            rings: {
                strokeWidth: 0
            },
            spokes: {
                strokeWidth: 0
            },
        }
    },
    theme: {
        monochrome: {
            enabled: true,
            shadeTo: 'light',
            shadeIntensity: 0.6
        }
    }
};
const UsersPieChart = () => {
    return (
        <Chart options={options} series={options.series} type="polarArea" width="380" />

    );
};

export default UsersPieChart;
