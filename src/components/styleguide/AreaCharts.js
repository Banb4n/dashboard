/* @flow */
import * as React from 'react';
import * as Recharts from 'recharts';

type StackedChartsDataKey = Array<{
    date: 'string',
    amount: number,
    win: number,
    loose: number
}>;

function StackedAreaCharts(props: { data: StackedChartsDataKey }) {
    const { data } = props;
    const { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } = Recharts;

    return (
        <AreaChart width={430} height={240} data={data}>
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="date" />
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
