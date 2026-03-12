import './BarraPesquisa.css';
import Botao from '../Botao/Botao'

function BarraPesquisa({Tplaceholder}) {
    return (
        <div className="search-container">
            <input type="text" placeholder={Tplaceholder || "Pesquisar..."} className="search-input" />
            <Botao classe='azul'>Buscar</Botao>
        </div>
    );
}

export default BarraPesquisa;