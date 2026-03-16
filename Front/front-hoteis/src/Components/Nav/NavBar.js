import { Link } from "react-router-dom";
import "./NavBar.css";
import {
  Home,
  About,
  Phone,
  RoomQuartos,
  RoomReservas,
} from "../icons/index";

function NavBar() {
  return (
    <nav className="nav-bar">
      <h2 className="nav-logo">H0T3L</h2>

      <div className="nav-links">
        <Link className="link-item" to="/">
          <Home className="nav-icon" />
          <span>Início</span>
        </Link>

        <Link className="link-item" to="/About">
          <About className="nav-icon" />
          <span>Sobre</span>
        </Link>

        <Link className="link-item" to="/Contato">
          <Phone className="nav-icon" />
          <span>Contato</span>
        </Link>

        <Link className="link-item" to="/Quarto">
          <RoomQuartos className="nav-icon" />
          <span>Quartos</span>
        </Link>
        <Link className="link-item" to="/Reserva">
          <RoomReservas className="nav-icon" />
          <span>Reservas</span>
        </Link>
      </div>

      <div className="nav-footer">
        <p>Copyright©LUCAS-DANIEL</p>
      </div>
    </nav>
  );
}

export default NavBar;
