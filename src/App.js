import './App.css';
import Navbar from './navbar';
import Cards from './tourism';
import Funfacts from './funfacts';
import Home from './Home';
import Contact from './contact';
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/tourism' element={<Cards />}/>
            <Route path='/Funfacts' element={<Funfacts />}/>
            <Route path='/Funfacts' element={<Contact />}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
