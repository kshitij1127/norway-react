import './App.css';
import Navbar from './navbar';
import Cards from './tourism';
import Funfacts from './funfacts';
import Home from './Home';
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <div className='gradient_bg'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/tourism' element={<Cards />}/>
            <Route path='/Funfacts' element={<Funfacts />}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
