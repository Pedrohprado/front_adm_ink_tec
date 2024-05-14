import { NavLink, Route, Routes } from 'react-router-dom';
import CabinsByDay from './cabinsbyday';
import CabinsByWeek from './cabinsbyweek';

function Cabins() {
  return (
    <main className=' w-full h-screen flex flex-col items-center p-4 ml-[17%]'>
      <nav className=' bg-slate-950  shadow-md w-[80%] py-2 flex justify-around mb-8 rounded'>
        <NavLink
          className=' text-white py-1 w-20 px-2 text-center rounded font-medium hover:bg-white hover:text-slate-950 transition'
          to={''}
        >
          diário
        </NavLink>
        <NavLink
          className=' text-white py-1 w-20 px-2 text-center rounded font-medium hover:bg-white hover:text-slate-950 transition'
          to={'week'}
        >
          semanal
        </NavLink>
        <NavLink
          className=' text-white py-1 w-20 px-2 text-center rounded font-medium hover:bg-white hover:text-slate-950 transition'
          to={'month'}
        >
          mensal
        </NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<CabinsByDay />} />
        <Route path='week' element={<CabinsByWeek />} />
        {/* <Route path='month' element={<CabinsByMonth />} /> */}
      </Routes>
    </main>
  );
}

export default Cabins;
