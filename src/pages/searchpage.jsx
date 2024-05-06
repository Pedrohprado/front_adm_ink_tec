import React from 'react';
import InputSearch from '../components/inputsearch';
import TableForSearch from '../components/tables/tableforsearch';

const SearchPage = () => {
  const [data, setData] = React.useState(null);
  const [value, setValue] = React.useState({
    option: 'card',
    search: '',
  });

  React.useEffect(() => {
    async function fetchDatas() {
      try {
        const url = import.meta.env.VITE_BASE_URL_ROLES;
        const response = await fetch(`${url}/${value.option}/${value.search}`);
        const data = await response.json();

        if (data.length >= 1) {
          setData(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (value.option === 'batch' && value.search.length) fetchDatas();
    if (value.option === 'client' && value.search.length >= 3) fetchDatas();
    if (value.option.length > 3 && value.search.length >= 4) fetchDatas();
  }, [value]);

  return (
    <main className=' w-full h-screen flex flex-col'>
      <section className='  w-[85%] h-full py-2 px-5 flex flex-col absolute right-0 '>
        <InputSearch setValue={setValue} value={value} />
        <TableForSearch data={data} setData={setData} />
      </section>
    </main>
  );
};

export default SearchPage;
