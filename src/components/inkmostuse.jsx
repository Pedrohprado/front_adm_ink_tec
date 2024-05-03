import React from 'react';
import GraphInkMostUse from './graphics/graphinkmost';

import { VscGraph } from 'react-icons/vsc';

const InkMostUse = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchDatas() {
      try {
        const url = import.meta.env.VITE_BASE_URL_GET_SOME_INKS;
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDatas();
  }, []);

  return (
    <div className=' w-1/2 flex flex-col p-4 border rounded shadow-md'>
      <span className=' rounded flex w-52 items-center gap-2 px-5 py-1 bg-slate-200'>
        <VscGraph fill={'#1010108b'} />
        <p className=' text-slate-600 font-medium text-sm '>
          tintas mais utilizadas
        </p>
      </span>
      <GraphInkMostUse data={data} />
    </div>
  );
};

export default InkMostUse;
