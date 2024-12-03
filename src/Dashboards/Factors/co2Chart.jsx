import {LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid, } from 'recharts'

const data=[
    {name: 'Ago', Co2,'510'},
    {name: 'Set', Co2,'420'},
    {name: 'Out', Co2,'744'},
    {name: 'Nov', Co2,'1002'}
];

const chartCO2 = () => {
    return(
        <ResponsiveContainer width={100} height={500}>
            <LineChart
                data = {data}
                margin= {{left: 15, right: 30, top: 10, bottom: 20}}
            >
            <CartesianGrid strokeDasharray="10 10"/>
            <XAxis dataKey={name}/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <LineType="monotone" dataKey="CO2" stroke="#6BEEA0"/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default chartCO2;