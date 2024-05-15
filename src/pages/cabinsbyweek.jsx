import React from 'react';
import GraphBar from '../components/graphics/graphbar';
import AnimationButton from '../components/animateButton';
import PickerDayByRange from '../components/pickerdaybyrange';
import GraphPie from '../components/graphics/graphpie';
import GraphBarInks from '../components/graphics/graphbarinks';
import TableLastOp from '../components/tables/tablelastop';
import GraphCabinInLine from '../components/graphics/graphcabinline';

function CabinsByWeek() {
  const [fullData, setFullData] = React.useState(null);
  const [active, setActive] = React.useState(false);
  const [selectedRange, setSelectdRange] = React.useState('');
  const [dates, setDates] = React.useState(['2024-04-29', '2024-05-07']);
  const [dataPie, setDataPie] = React.useState(null);
  const [dataInks, setDataInks] = React.useState(null);
  const [dataForTable, setDataForTable] = React.useState(null);
  const [dataCabins, setDataCabins] = React.useState(null);
  const [quant, setQuant] = React.useState(0);

  React.useEffect(() => {
    async function fetchOneDate() {
      try {
        const url = import.meta.env.VITE_BASE_URL_GET_SOME_CABINS_BY_WEEK;
        const response = await fetch(`${url}${dates[0]}/${dates[1]}`);
        const data = await response.json();
        console.log(data);
        const newData = data.result.map((item) => {
          return {
            ...item,
            trabalhado: item.trabalhado.toFixed(2),
          };
        });
        setFullData(newData);
        setQuant(data.datasBetween.length);
        setDataPie(data.client);
        setDataInks(data.inks);
        setDataCabins(data.teste);
        setDataForTable(data.datasBetween);
      } catch (error) {
        console.log(error);
      }
    }

    if (dates && dates.length >= 2) {
      fetchOneDate();
    }
  }, [dates]);

  React.useEffect(() => {
    if (selectedRange) {
      if (selectedRange.from && selectedRange.to) {
        const newFrom = new Date(selectedRange.from).toISOString().slice(0, 10);
        const newTo = new Date(selectedRange.to).toISOString().slice(0, 10);
        setDates([newFrom, newTo]);
        console.log(newFrom, newTo);

        setActive(false);
      }
    }
  }, [selectedRange]);

  return (
    <section className='w-[95%] flex flex-col items-center'>
      <nav className='w-[80%] flex justify-around items-center mb-5'>
        <h2 className='text-slate-600 font-medium text-sm rounded mt-2 py-1 px-2 text-start'>
          {`${dates[0]} até ${dates[1]}`}
        </h2>
        <AnimationButton setActive={setActive} active={active} />
        {active ? (
          <PickerDayByRange
            selectedRange={selectedRange}
            setSelectdRange={setSelectdRange}
          />
        ) : null}
        <p className=' gap-2 flex items-center justify-center rounded px-3 py-1 bg-slate-200 text-slate-800 font-medium text-sm'>
          operações realizadas: <span className=' text-xl'>{quant}</span>
        </p>
      </nav>
      <GraphBar
        fill={'#000e30'}
        data={fullData}
        text={'Tempo trabalhado das cabines (pintando)- semanal'}
      />
      <div className=' w-full flex items-center justify-center gap-2 py-5 mb-2'>
        <GraphBarInks
          data={dataInks}
          text={'quantidade das tintas utilizadas entre os dias'}
        />
        <GraphPie data={dataPie} text={'clientes entre os dias (%)t'} />
      </div>

      <TableLastOp data={dataForTable} />

      <GraphCabinInLine data={dataCabins} />
    </section>
  );
}

export default CabinsByWeek;
