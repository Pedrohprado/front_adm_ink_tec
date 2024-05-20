import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import SearchPage from './pages/searchpage';
import MenuRight from './components/menuright';
import Cabins from './pages/cabins';
import Ink from './pages/ink';
import { Context } from './global-context/globalcontext';
import LoginPage from './pages/loginpage';
import ProtectedRouter from './helpers/protectedrouter';

function App() {
  return (
    <div className=' flex'>
      <BrowserRouter>
        <Context>
          <MenuRight />
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route
              path='/home'
              element={
                <ProtectedRouter>
                  <Home />
                </ProtectedRouter>
              }
            />
            <Route
              path='/search'
              element={
                <ProtectedRouter>
                  <SearchPage />
                </ProtectedRouter>
              }
            />
            <Route
              path='/cabin/*'
              element={
                <ProtectedRouter>
                  <Cabins />
                </ProtectedRouter>
              }
            />
            <Route
              path='/ink'
              element={
                <ProtectedRouter>
                  <Ink />
                </ProtectedRouter>
              }
            />
          </Routes>
        </Context>
      </BrowserRouter>
    </div>
  );
}

export default App;
