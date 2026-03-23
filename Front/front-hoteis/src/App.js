import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home/Home';
import About from './paginas/About/About';
import Contato from './paginas/Contato/Contato';
import NavBar from './Components/Nav/NavBar';
import './App.css';
import Quarto from './paginas/Quartos/Quarto';
import Reserva from './paginas/Reserva/Reserva';
import LoginUser from './paginas/Login/LoginUser';
import RecuperarSenha from './paginas/RecuperarSenha/RecuperarSenha';

function LayoutComMenu() {
  return (
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
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/LoginUser" element={<LoginUser />} />
        <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
        <Route path="/*" element={<LayoutComMenu />} />
      </Routes>
    </Router>
  );
}

export default App;