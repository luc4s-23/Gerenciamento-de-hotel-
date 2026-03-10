import './BarraPesquisa.css';
import Botao from '../Botao/Botao'

function BarraPesquisa() {
    return (
        <div className="search-container">
            <input type="text" placeholder="Buscar quartos..." className="search-input" />
            <Botao classe='azul'>Buscar</Botao>
        </div>
    );
}

export default BarraPesquisa;