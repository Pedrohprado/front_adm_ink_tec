import React from 'react';
import GraphInkByDays from './graphics/graphinkbydays';
import { VscGraphLine } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const DayInformations = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchDatas() {
      try {
        const url = import.meta.env.VITE_BASE_URL_GET_SOME_CABINS_BY_DAY;
        const response = await fetch(`${url}null`);
        const data = await response.json();
        setData(data.result);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDatas();
  }, []);

  return (
    <Link
      className=' w-1/2 flex flex-col p-4 border rounded shadow-md hover:cursor-pointer hover:border-slate-500 transition'
      to={'/cabin'}
    >
      <span className=' rounded flex w-64 items-center gap-2 px-5 py-1 bg-slate-200'>
        <VscGraphLine fill={'#1010108b'} />
        <p className=' text-slate-600 font-medium text-sm '>
          tempo trabalhado por cabine
        </p>
      </span>
      <GraphInkByDays data={data} width={500} height={220} />
    </Link>
  );
};

export default DayInformations;
