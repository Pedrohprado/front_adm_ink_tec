/* eslint-disable react/prop-types */

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

function GraphCabinInLine({ data }) {
  return (
    <div className=' flex items-center justify-center w-full flex-col border rounded py-4'>
      <LineChart width={800} height={300} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip />
        <Line type='monotone' dataKey='CPL-01' stroke='#06007b' />
        <Line type='monotone' dataKey='CPL-02' stroke='#008633' />
        <Line type='monotone' dataKey='CPL-03' stroke='#0068be' />
        <Line type='monotone' dataKey='CPL-04' stroke='#899300' />
        <Line type='monotone' dataKey='CPL-05' stroke='#3400a6' />
        <Line type='monotone' dataKey='CPL-06' stroke='#ff8400' />
        <Line type='monotone' dataKey='CPL-07' stroke='#ff1900' />
        <Line type='monotone' dataKey='CPL-08' stroke='#cf00ea' />
        <Line type='monotone' dataKey='CPL-09' stroke='#00ffff' />
        <Line type='monotone' dataKey='CPL-10' stroke='#82ca9d' />
      </LineChart>
    </div>
  );
}

export default GraphCabinInLine;
