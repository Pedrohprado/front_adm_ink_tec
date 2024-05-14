/* eslint-disable react/prop-types */
import { Bar, BarChart, Rectangle, Tooltip, XAxis } from 'recharts';

function GraphBarInks({ data, fill, text }) {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className=' w-full bg-white py-1 px-3 rounded shadow text-center'>
          <p className='label'>{`${payload[0].payload.tinta} : ${payload[0].value}`}</p>
          <p className='label'>{`${payload[0].payload.codigo}`}</p>
        </div>
      );
    }
  };

  if (data) {
    return (
      <div className=' flex items-center justify-center w-[60%] flex-col border rounded py-4'>
        <p className=' px-4 bg-slate-200 text-center text-slate-800 font-medium text-sm py-1 rounded mb-5'>
          {text}
        </p>
        <BarChart width={520} height={250} data={data}>
          <Tooltip content={<CustomTooltip />} />
          <XAxis dataKey={'codigo'} fontSize={14} />
          <Bar
            style={{ color: 'red' }}
            dataKey='quantidade'
            fill={fill ? fill : '#2260fe'}
            activeBar={<Rectangle fill='#225dfec3' stroke='#225dfec3' />}
          />
        </BarChart>
      </div>
    );
  }
}

export default GraphBarInks;
