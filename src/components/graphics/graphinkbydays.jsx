/* eslint-disable react/prop-types */
import { Line, LineChart, Tooltip, XAxis } from 'recharts';

function GraphInkByDays({ data }) {
  if (data)
    return (
      <div className=' flex items-center justify-center mt-5 w-full'>
        <LineChart width={600} height={200} data={data}>
          <XAxis dataKey='codigo' />
          <Tooltip />
          <Line dataKey='quantidade' fill='#225DFE' />
        </LineChart>
      </div>
    );
}

export default GraphInkByDays;
