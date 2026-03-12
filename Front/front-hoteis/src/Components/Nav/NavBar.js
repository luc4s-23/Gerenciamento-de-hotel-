import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="nav-bar">
            <h2>H0T3L</h2>
            <div className='nav-links'>
                <Link className="links" to="/">Início</Link>
                <Link className="links" to="/About">Sobre</Link>
                <Link className="links" to="/Contato">Contato</Link>
                <Link className="links" to="/Quarto">Quartos</Link>
                <Link className="links" to="/Reserva">Reservas</Link>
            </div>
            <footer className='footer'>
                <h3>Copyright©LUCAS-DANIEL</h3>
            </footer>
        </nav>
    );
}

export default NavBar;