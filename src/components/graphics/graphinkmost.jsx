/* eslint-disable react/prop-types */
import { Bar, BarChart, LabelList, Rectangle, Tooltip, XAxis } from 'recharts';

const GraphInkMostUse = ({ data }) => {
  if (data)
    return (
      <div className=' flex items-center justify-center mt-5 w-full '>
        <BarChart width={600} height={220} data={data}>
          <XAxis dataKey='codigo' />
          <Tooltip />
          <Bar
            dataKey='quantidade'
            fill='#225DFE'
            activeBar={<Rectangle fill='#225dfec3' stroke='#225dfec3' />}
          >
            <LabelList dataKey='tinta' position={'top'} fontSize={'11px'} />
          </Bar>
        </BarChart>
      </div>
    );
};

export default GraphInkMostUse;
