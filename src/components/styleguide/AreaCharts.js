import * as React from 'react';
import * as Recharts from 'recharts';

function StackedAreaCharts() {
    const { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } = Recharts;
    const data = [
        { name: 'Page A', amount: 100, win: 50, loose: 0 },
        { name: 'Page B', amount: 150, win: 130, loose: 0 },
        { name: 'Page C', amount: 350, win: 0, loose: 350 },
        { name: 'Page D', amount: 580, win: 630, loose: 0 },
        { name: 'Page E', amount: 780, win: 0, loose: 1100 },
        { name: 'Page F', amount: 980, win: 1030, loose: 0 },
        { name: 'Page G', amount: 1280, win: 1560, loose: 0 }
    ];
    return (
        <AreaChart
            width={400}
            height={220}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
                type="monotone"
                dataKey="amount"
                stroke="#8884d8"
                fill="#8884d8"
            />
            <Area
                type="monotone"
                dataKey="win"
                stroke="#82ca9d"
                fill="#82ca9d"
            />
            <Area
                type="monotone"
                dataKey="loose"
                stroke="#ffc658"
                fill="#ffc658"
            />
        </AreaChart>
    );
}

export default StackedAreaCharts;
