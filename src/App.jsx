import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import SearchPage from './pages/searchpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
