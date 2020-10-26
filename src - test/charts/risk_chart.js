import React from 'react';
import { TinyAreaChart ,RadarChart } from 'bizcharts';

// 数据源
const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 6 },
    { year: '1994', value: 6 },
    { year: '1995', value: 8 },
    { year: '1996', value: 9 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
];

const data2 = [
    {
        item: 'Design',
        user: 'a',
        score: 70,
    },
    {
        item: 'Design',
        user: 'b',
        score: 30,
    },
    {
        item: 'Development',
        user: 'a',
        score: 60,
    },
    {
        item: 'Development',
        user: 'b',
        score: 70,
    },
    {
        item: 'Marketing',
        user: 'a',
        score: 60,
    },
    {
        item: 'Marketing',
        user: 'b',
        score: 50,
    },
    {
        item: 'Users',
        user: 'a',
        score: 40,
    },
    {
        item: 'Users',
        user: 'b',
        score: 50,
    },
    {
        item: 'Test',
        user: 'a',
        score: 60,
    },
    {
        item: 'Test',
        user: 'b',
        score: 70,
    },

];

function Demo() {
    return (
        <TinyAreaChart
            data={data}
            width={400}
            height={300}
            xField='year'
            yField='value'
        />
    );
}

function Demo2() {
    return (
        <RadarChart
            data={data2}
            title={{
                visible: true,
            }}
            width={400}
            height={400}
            forceFit={true}
            angleField='item'
            radiusField='score'
            seriesField='user'
            radiusAxis={{
                grid: {
                    line: {
                        type: 'line',
                    },
                },
            }}
            line={{
                visible: true,
            }}
            point={{
                visible: true,
                shape: 'circle',
            }}
            legend={{
                visible: true,
                position: 'bottom-center',
            }}
        />
    );
}

export { Demo,Demo2 }
