/* eslint-disable react/prop-types */
import { Bar, BarChart, LabelList, Rectangle, Tooltip, XAxis } from 'recharts';

function GraphBar({ data, fill }) {
  if (data) {
    return (
      <div className=' flex items-center justify-center w-full '>
        <BarChart width={500} height={320} data={data}>
          <Tooltip />
          <XAxis dataKey={'cabine'} />
          <Bar
            dataKey='trabalhado'
            fill={fill ? fill : '#2260fe'}
            activeBar={<Rectangle fill='#225dfec3' stroke='#225dfec3' />}
          >
            <LabelList
              dataKey='trabalhado'
              position={'top'}
              fontSize={'11px'}
            />
          </Bar>
        </BarChart>
      </div>
    );
  }
}

export default GraphBar;
