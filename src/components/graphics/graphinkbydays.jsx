/* eslint-disable react/prop-types */
import { AreaChart, Area, XAxis, Tooltip, LabelList } from 'recharts';

function GraphInkByDays({ data, width, height }) {
  if (data)
    return (
      <div className='flex items-center justify-center mt-5 w-full'>
        <AreaChart width={width} height={height} data={data}>
          <XAxis dataKey={'cabine'} />
          <Tooltip />
          <Area dataKey='trabalhado' fill='#B18CFF' stroke='#8b59f7'>
            <LabelList
              dataKey='trabalhado'
              position={'top'}
              fontSize={'11px'}
            />
          </Area>
        </AreaChart>
      </div>
    );
}

export default GraphInkByDays;
