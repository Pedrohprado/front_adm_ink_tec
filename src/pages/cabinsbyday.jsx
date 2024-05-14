import React from 'react';
import AnimationButton from '../components/animateButton';
import PickerMode from '../components/daypicker';
import GraphBar from '../components/graphics/graphbar';
import TableLastOp from '../components/tables/tablelastop';
import GraphPie from '../components/graphics/graphpie';
import GraphBarInks from '../components/graphics/graphbarinks';

function CabinsByDay() {
  const [data, setData] = React.useState(null);
  const [date, setDate] = React.useState(new Date().toISOString().slice(0, 10));
  const [selected, setSelected] = React.useState(new Date());
  const [dataForTable, setDataForTable] = React.useState(null);
  const [active, setActive] = React.useState(false);
  const [dataPie, setDataPie] = React.useState(null);
  const [dataInks, setDataInks] = React.useState(null);

  React.useEffect(() => {
    if (selected) setDate(selected.toISOString().slice(0, 10));
  }, [selected]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const url = import.meta.env.VITE_BASE_URL_GET_SOME_CABINS_BY_DAY;
        const response = await fetch(`${url}${date}`);
        const data = await response.json();

        const newData = data.result.map((item) => {
          return {
            ...item,
            trabalhado: item.trabalhado.toFixed(2),
          };
        });
        setDataPie(data.client);
        setDataInks(data.inks);
        setDataForTable(data.unicDat);
        setData(newData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [date]);

  return (
    <section className='w-[95%] flex flex-col items-center'>
      <nav className='w-[80%] flex justify-around items-center mb-5'>
        <h2 className='text-slate-600 font-medium text-sm rounded mt-2 py-1 px-2 text-start'>
          {date}
        </h2>
        <AnimationButton setActive={setActive} active={active} />
        {active ? (
          <PickerMode
            selected={selected}
            setSelected={setSelected}
            setActive={setActive}
          />
        ) : null}
      </nav>
      <GraphBar
        data={data}
        fill={'#001a5b'}
        text={'tempo de pintura de cada cabine (min)'}
      />
      <div className=' w-full flex items-center justify-center gap-2 py-5'>
        <GraphBarInks
          data={dataInks}
          text={'quantidade das tintas utilizadas'}
        />
        <GraphPie data={dataPie} text={'clientes do dia (%)'} />
      </div>

      <TableLastOp data={dataForTable} />
    </section>
  );
}

export default CabinsByDay;
