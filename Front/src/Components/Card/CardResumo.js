import './Card.css';
import Botao from '../Botao/Botao';

function Card({ id, numero, status, tipo, capacidade, diaria }) {
  const formatoLocale = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(diaria);

  const Statusquarto = (status) => {
    if (status === 0) {
      return 'Disponível'
    } else {
      return 'Ocupado'
    }
  }
  return (
    <div className="card-quarto">
      <div className="card-topo">
        <h2>Quarto {numero}</h2>
        <span className="status">{Statusquarto(status)}</span>
      </div>

      <div className="card-resumo">
        <p><strong>Tipo:</strong> {tipo}</p>
        <p><strong>Capacidade:</strong> {capacidade} pessoas</p>
        <p><strong>Diária:</strong> R$ {formatoLocale}</p>
      </div>

      <div className="card-detalhes">
        <div className="card-acoes">
          <Botao className="botao-editar" classe="verde" children="Editar" />
          <Botao className="botao-editar" classe="vermelho" children="Excluir" />
        </div>
      </div>
    </div>
  );
}
export default Card;

//Number(diaria).toFixed(2)