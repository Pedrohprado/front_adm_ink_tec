/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const TableLastOp = ({ data }) => {
  if (data)
    return (
      <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 bg-white'>
          <thead className='text-xs text-gray-700 bg-white border-b-[1px] '>
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
            {data.map((item) => (
              <tr className='bg-white' key={item.id}>
                <td className=' px-2 '>{item.name}</td>
                <td className='py-3 px-6'>{item.card}</td>
                <td className='py-3 px-6'>{item.cabin}</td>
                <td className='py-3 px-6'>{item.client}</td>
                <td className='py-3 px-6'>{item.codeInk}</td>
                <td className='py-3 px-6'>{item.inicio}</td>
                <td className='py-3 px-6'>{item.finalizado}</td>
                <td className='py-3 px-6'>{item.createdAt.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default TableLastOp;
