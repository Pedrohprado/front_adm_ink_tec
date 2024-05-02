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
          const info = data.slice(-10);
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
    <div className=' h-[40%]  flex flex-col p-2 gap-2'>
      <div className='flex justify-between'>
        <h2 className='font-bold'>Ultimas operações</h2>
        <Link
          to={'/dayinformations'}
          className=' text-sky-600 font-medium text-sm'
        >
          mais informações
        </Link>
      </div>
      <TableLastOp data={data} />
    </div>
  );
};

export default LastOperations;
