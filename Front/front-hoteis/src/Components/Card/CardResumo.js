import './Card.css';
import Botao from '../Botao/Botao';

function Card() {
    return (
        <div className='card-quarto'>
            <div className='card-topo'>
                <p><h2>Quarto </h2> 101</p>
                <span className='status'>Disponível</span>
            </div>

            <div className='card-resumo'>
                <p><strong>Tipo:</strong> Luxo</p>
                <p><strong>Capacidade:</strong>  pessoas</p>
                <p><strong>Diária:</strong> R$ </p>
            </div>


            <div className='card-detalhes'>
                <div className='card-acoes'>
                    <Botao className="botao-editar" classe="verde" children="Editar" />
                    <Botao className="botao-editar" classe="vermelho" children="Excluir" />
                </div>
            </div>
        </div>
    );
}
export default Card;

