/* eslint-disable react/prop-types */
import React from 'react';
import { GlobalContext } from '../../global-context/globalcontext';

function TableForSearch({ data, setData }) {
  const [table, setTable] = React.useState(false);
  const [item, setItem] = React.useState(false);

  const { idMaster, setIdMaster } = React.useContext(GlobalContext);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const url = import.meta.env.VITE_BASE_URL_ID;
        const response = await fetch(`${url}${idMaster}`);
        const data = await response.json();
        setItem(data);
        setTable(true);
      } catch (error) {
        console.log(error);
      } finally {
        setIdMaster('');
      }
    }
    if (idMaster) fetchData();
  }, [idMaster, setIdMaster]);

  async function handleClick(item) {
    const id = item.id;

    try {
      const url = import.meta.env.VITE_BASE_URL_ID;
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      setItem(data);
      setTable(true);
      setData('');
    } catch (error) {
      console.log(error);
    }
  }

  if (!data && table && item) {
    return (
      <div className=' w-full h-full flex  items-center justify-center '>
        {item ? (
          <div className=' relative mt-10 w-[90%] flex flex-col gap-10'>
            <table className='w-full text-sm text-center text-black bg-white  shadow-md'>
              <thead className=' text-gray-200  bg-slate-950'>
                <tr>
                  <th scope='col' className='p-2'>
                    nome
                  </th>
                  <th scope='col' className='p-2'>
                    cartão
                  </th>
                  <th scope='col' className='p-2'>
                    cabine
                  </th>
                  <th scope='col' className='p-2'>
                    empresa
                  </th>
                  <th scope='col' className='p-2'>
                    cliente
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='col' className='p-2'>
                    {item.name.toLowerCase()}
                  </th>
                  <th scope='col' className='p-2'>
                    {item.card}
                  </th>
                  <th scope='col' className='p-2'>
                    {item.cabin}
                  </th>
                  <th scope='col' className='p-2'>
                    {item.unit}
                  </th>
                  <th scope='col' className='p-2'>
                    {item.client}
                  </th>
                </tr>
              </tbody>
            </table>
            <table className='w-full text-sm text-center text-black bg-white  shadow-md'>
              <thead className=' text-gray-200  bg-slate-950'>
                <tr>
                  <th scope='col' className='p-2'>
                    fornecedor
                  </th>
                  <th scope='col' className='p-2'>
                    tipo de tinta
                  </th>
                  <th scope='col' className='p-2'>
                    tinta
                  </th>
                  <th scope='col' className='p-2'>
                    código
                  </th>
                  <th scope='col' className='p-2'>
                    potlife
                  </th>
                  <th scope='col' className='p-2'>
                    lote
                  </th>
                  <th scope='col' className='p-2'>
                    catalizador
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='col' className='p-2'>
                    {item.forn}
                  </th>
                  <th scope='col' className='p-2'>
                    {item.typeInk}
                  </th>
                  <th scope='col' className='p-2'>
                    {item.ink}
                  </th>
                  <th scope='col' className='p-2'>
                    {item.codeInk}
                  </th>
                  <th scope='col' className='p-2'>
                    {item.potlife}
                  </th>
                  <th scope='col' className='p-2'>
                    {item.batch}
                  </th>
                  <th scope='col' className='p-2'>
                    {item.catalyst}
                  </th>
                </tr>
              </tbody>
            </table>
            <table className='w-full text-sm text-center text-black bg-white  shadow-md'>
              <thead className=' text-gray-200  bg-slate-950'>
                <tr>
                  <th scope='col' className='p-2'>
                    temperatura
                  </th>
                  <th scope='col' className='p-2'>
                    umidade
                  </th>
                  <th scope='col' className='p-2'>
                    p. orvalho
                  </th>
                  <th scope='col' className='p-2'>
                    pr. tambor
                  </th>
                  <th scope='col' className='p-2'>
                    pr. filtro
                  </th>
                  <th scope='col' className='p-2'>
                    viscosidade
                  </th>
                  <th scope='col' className='p-2'>
                    vaz. de tinta
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='col' className='p-2'>
                    {item.temperature} ºC
                  </th>
                  <th scope='col' className='p-2'>
                    {item.umity} %
                  </th>
                  <th scope='col' className='p-2'>
                    {item.orval} ºC
                  </th>
                  <th scope='col' className='p-2'>
                    {item.press} psi
                  </th>
                  <th scope='col' className='p-2'>
                    {item.filter} psi
                  </th>
                  <th scope='col' className='p-2'>
                    {item.visc} seg
                  </th>
                  <th scope='col' className='p-2'>
                    {item.flowRate} ml
                  </th>
                </tr>
              </tbody>
            </table>
            <table className='w-full text-sm text-center text-black bg-white  shadow-md'>
              <thead className=' text-gray-200  bg-slate-950'>
                <tr>
                  <th scope='col' className='p-2'>
                    tempo iniciado
                  </th>
                  <th scope='col' className='p-2'>
                    tempo finalizado
                  </th>
                  <th scope='col' className='p-2'>
                    tempo trabalhado
                  </th>
                  <th scope='col' className='p-2'>
                    data
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='col' className='p-2'>
                    {item.inicio}
                  </th>
                  <th scope='col' className='p-2'>
                    {item.finalizado}
                  </th>
                  <th scope='col' className='p-2'>
                    {item.trabalhado} min
                  </th>
                  <th scope='col' className='p-2'>
                    {item.createdAt.slice(0, 10)}
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    );
  } else {
    return (
      <div className='overflow-x-auto relative shadow-md sm:rounded-lg mt-10'>
        <table className='w-full text-sm text-left text-gray-500 bg-white'>
          <thead className=' text-gray-200  bg-slate-950'>
            <tr>
              <th scope='col' className='px-2'>
                nome
              </th>
              <th scope='col' className='px-6'>
                cartão
              </th>
              <th scope='col' className='px-6'>
                cabine
              </th>
              <th scope='col' className='px-6'>
                cliente
              </th>
              <th scope='col' className='px-6'>
                tinta
              </th>
              <th scope='col' className='px-6'>
                lote
              </th>
              <th scope='col' className='px-6'>
                início
              </th>
              <th scope='col' className='py-3 px-6'>
                finalizado
              </th>
              <th scope='col' className='py-3 px-6'>
                data
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((item) => (
                  <tr
                    className='bg-white cursor-pointer transition hover:bg-slate-300'
                    key={item.id}
                    onClick={() => handleClick(item)}
                  >
                    <td className=' px-2 '>{item.name}</td>
                    <td className='py-3 px-6'>{item.card}</td>
                    <td className='py-3 px-6'>{item.cabin}</td>
                    <td className='py-3 px-6'>{item.client}</td>
                    <td className='py-3 px-6'>{item.codeInk}</td>
                    <td className='py-3 px-6'>{item.batch}</td>
                    <td className='py-3 px-6'>{item.inicio}</td>
                    <td className='py-3 px-6'>{item.finalizado}</td>
                    <td className='py-3 px-6'>{item.createdAt.slice(0, 10)}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableForSearch;
