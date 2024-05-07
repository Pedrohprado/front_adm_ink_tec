import React from 'react';
import PickerMode from '../components/daypicker';
import AnimationButton from '../components/animateButton';
import GraphBar from '../components/graphics/graphbar';
import TableLastOp from '../components/tables/tablelastop';

function Cabins() {
  const [data, setData] = React.useState(null);
  const [fullData, setFullData] = React.useState(null);
  const [dataForTable, setDataForTable] = React.useState(null);
  const [date, setDate] = React.useState(new Date().toISOString().slice(0, 10));
  const [active, setActive] = React.useState(false);
  const [selected, setSelected] = React.useState(new Date());

  React.useEffect(() => {
    async function fetchOneDate() {
      try {
        const url = import.meta.env.VITE_BASE_URL_GET_SOME_CABINS_BY_DAY;
        const response = await fetch(`${url}null`);
        const data = await response.json();
        const newData = data.result.map((item) => {
          return {
            ...item,
            trabalhado: ((Math.round(item.trabalhado) * 100) / 536).toFixed(2),
          };
        });
        setFullData(newData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchOneDate();
  }, []);

  React.useEffect(() => {
    if (selected) setDate(selected.toISOString().slice(0, 10));
  }, [selected]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const url = import.meta.env.VITE_BASE_URL_GET_SOME_CABINS_BY_DAY;
        const response = await fetch(`${url}${date}`);
        const data = await response.json();
        //I need pass this newDate for setData(), but now, i use this for examples
        const newData = data.result.map((item) => {
          return {
            ...item,
            // trabalhado: Math.round(item.trabalhado),
            trabalhado: ((Math.round(item.trabalhado) * 100) / 536).toFixed(2),
            // trabalhado: item.trabalhado,
          };
        });
        console.log(data.result);
        setDataForTable(data.unicDat);
        setData(newData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [date]);

  return (
    <main className=' w-full h-screen flex flex-col'>
      <section className='  w-[85%] h-full py-2 px-5 flex flex-col absolute right-0 '>
        <h1 className=' mt-4 font-medium '>Relação de tempo por cabine</h1>
        <section className=' w-full flex items-center justify-center gap-5 '>
          <div className=' w-1/2 flex flex-col items-center justify-center border'>
            <h2 className='text-slate-600 font-medium text-sm bg-slate-300 rounded mt-2 py-1 px-2 text-start'>
              (%)
            </h2>
            <GraphBar data={fullData} />
          </div>
          <div>
            <div className=' w-full flex justify-around items-center '>
              <h2 className='text-slate-600 font-medium text-sm bg-slate-300 rounded mt-2 py-1 px-2 text-start'>
                Capacidade produtiva diária
              </h2>

              <h2 className='text-slate-600 font-medium text-sm rounded mt-2 py-1 px-2 text-start'>
                {date}
              </h2>
              <AnimationButton setActive={setActive} active={active} />
              {active ? (
                <PickerMode selected={selected} setSelected={setSelected} />
              ) : null}
            </div>

            <GraphBar data={data} fill={'#001a5b'} />
          </div>
        </section>
        <TableLastOp data={dataForTable} />
      </section>
    </main>
  );
}

export default Cabins;
