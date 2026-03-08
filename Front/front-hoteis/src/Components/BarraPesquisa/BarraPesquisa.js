import './BarraPesquisa.css';

function BarraPesquisa() {
    return (
        <div className="search-container">
            <input type="text" placeholder="Buscar quartos..." className="search-input" />
            <button className="search-button">Buscar</button>
        </div>
    );
}

export default BarraPesquisa;