import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import SearchPage from './pages/searchpage';
import MenuRight from './components/menuright';
import Cabins from './pages/cabins';
import Ink from './pages/ink';

function App() {
  return (
    <div className=' flex'>
      <BrowserRouter>
        <MenuRight />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/cabin' element={<Cabins />} />
          <Route path='/ink' element={<Ink />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
