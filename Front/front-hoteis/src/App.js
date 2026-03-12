import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home/Home';
import About from './paginas/About/About';
import Contato from './paginas/Contato/Contato';
import NavBar from './Components/Nav/NavBar';
import './App.css'
import Quarto from './paginas/Quartos/Quarto';
import Reserva from './paginas/Reserva/Reserva';

function App() {
  return (
    <Router>
      <div className='layout-horizontal'>

        <NavBar />

        <div className='main-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contato" element={<Contato />} />
            <Route path="/Quarto" element={<Quarto />} />
            <Route path="/Reserva" element={<Reserva />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
