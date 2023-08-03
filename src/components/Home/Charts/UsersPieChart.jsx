import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
    { name: 'Category A', value: 30 },
    { name: 'Category B', value: 25 },
    { name: 'Category C', value: 45 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const UsersPieChart = () => {
    return (
        <PieChart width={200} height={200}>
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default UsersPieChart;
