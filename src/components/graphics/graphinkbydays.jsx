/* eslint-disable react/prop-types */
import { AreaChart, Area, XAxis, Tooltip, LabelList } from 'recharts';

function GraphInkByDays({ data }) {
  if (data)
    return (
      <div className=' flex items-center justify-center mt-5 w-full'>
        <AreaChart width={500} height={220} data={data}>
          <XAxis dataKey='cabine' fontSize={'14px'} />
          <Tooltip />
          <Area dataKey='trabalhado' fill='#dba80169' stroke='#dba801'>
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
