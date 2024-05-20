import { FaHouse, FaBrush, FaDiceD6, FaSistrix } from 'react-icons/fa6';
import { IoMdPerson, IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Icon from './icon';
import React from 'react';
import { GlobalContext } from '../global-context/globalcontext';

function MenuRight() {
  const { setLogin, setUserName, userName } = React.useContext(GlobalContext);

  return (
    <header className=' w-[17%] h-screen bg-slate-950 text-white flex flex-col items-center justify-between p-2 fixed z-10'>
      <nav className=' w-full flex flex-col gap-1 mt-2'>
        <ul className=' flex flex-col gap-1 py-2 px-4 w-[80%]'>
          <li className='flex items-center gap-2 p-1 font-medium'>
            <span className=''>
              <Icon />
            </span>
            INK Tec
          </li>

          <li className=' w-full flex items-center justify-between bg-slate-500 px-3 py-3 rounded-sm text-sm'>
            <span>
              <IoMdPerson />
            </span>
            {userName.slice(0, 5)}
            <button
              onClick={() => {
                setLogin(false);
                setUserName('');
              }}
              className=' transition bg-slate-50 text-slate-500 rounded hover:bg-slate-600 hover:text-white'
            >
              <IoIosClose size={20} />
            </button>
          </li>
        </ul>

        <div className='border w-full my-5'></div>

        <ul className=' flex flex-col gap-4 py-2 px-4 text-sm'>
          <Link
            className='flex items-center gap-2 p-1 rounded-sm hover:bg-slate-400 transition hover:text-slate-600'
            to={'/home'}
          >
            <span>
              <FaHouse />
            </span>
            home
          </Link>
          <Link
            className='flex items-center gap-2 p-1 rounded-sm hover:bg-slate-400 transition hover:text-slate-600'
            to={'/cabin'}
          >
            <span>
              <FaDiceD6 />
            </span>
            cabines
          </Link>
          <Link
            className='flex items-center gap-2 p-1 rounded-sm hover:bg-slate-400 transition hover:text-slate-600'
            to={'/ink'}
          >
            <span>
              <FaBrush />
            </span>
            tintas
          </Link>
          <Link
            className='flex items-center gap-2 p-1 rounded-sm hover:bg-slate-400 transition hover:text-slate-600'
            to={'/search'}
          >
            <span>
              <FaSistrix />
            </span>
            pesquisar
          </Link>
        </ul>
      </nav>
      <div className='border w-full'></div>

      <footer className=' text-[0.75rem]  font-thin mb-5'>
        Pedertractor&Tractor
      </footer>
    </header>
  );
}

export default MenuRight;
