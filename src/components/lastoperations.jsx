/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import TableLastOp from './tables/tablelastop';
import React from 'react';

const LastOperations = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchDatas() {
      try {
        const url = import.meta.env.VITE_BASE_URL_GET_ALL_DATAS;
        const response = await fetch(url);
        const data = await response.json();

        if (data.length > 10) {
          const info = data.slice(-10).reverse();
          setData(info);
        } else {
          setData(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchDatas();
  }, []);

  return (
    <div className='h-[50%] flex flex-col p-1 gap-2 mt-4'>
      <div className='flex justify-between'>
        <h2 className='font-bold'>Ultimas operações</h2>
        <Link
          to={'/search'}
          className=' text-sky-600 font-medium text-sm hover:text-sky-300 transition hover:border-b-[1px] border-sky-300'
        >
          mais informações
        </Link>
      </div>
      <TableLastOp data={data} />
    </div>
  );
};

export default LastOperations;
