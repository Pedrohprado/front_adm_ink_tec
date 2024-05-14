/* eslint-disable react/prop-types */
import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

function GraphPie({ data, text }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  if (data) {
    const percentage = (value, total) => {
      return ((value / total) * 100).toFixed(2);
    };

    const total = data.reduce((acc, item) => acc + item.quantidade, 0);

    const dataWithPercentage = data.map((item) => ({
      ...item,
      porcentagem: percentage(item.quantidade, total),
    }));

    const renderLabel = ({ cliente, porcentagem }) =>
      `${cliente}: ${porcentagem}%`;

    const onPieEnter = (_, index) => {
      setActiveIndex(index);
    };

    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className=' w-full bg-white py-1 px-3 rounded shadow text-center'>
            <p className='label'>{`${payload[0].payload.cliente} : ${payload[0].value}`}</p>
          </div>
        );
      }
    };

    return (
      <div className='w-[40%] flex items-center justify-center  flex-col border rounded py-4'>
        <p className=' px-4 bg-slate-200 text-center text-slate-800 font-medium text-sm py-1 rounded mb-5'>
          {text}
        </p>
        <PieChart width={400} height={250}>
          <Pie
            activeIndex={activeIndex}
            dataKey='quantidade'
            startAngle={0}
            endAngle={360}
            data={dataWithPercentage}
            cx='50%'
            cy='50%'
            outerRadius={50}
            innerRadius={30}
            fill='#0e0964'
            label={renderLabel}
            fontSize={'12px'}
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.cliente == 'john deere'
                    ? '#1a6b24'
                    : entry.cliente == 'caterpillar'
                    ? '#f6b900'
                    : entry.cliente == 'cnh'
                    ? '#b91818'
                    : entry.cliente == 'volvo'
                    ? '#5d5d5d'
                    : 'bronw'
                }
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </div>
    );
  }
}

export default GraphPie;
