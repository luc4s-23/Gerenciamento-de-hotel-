import './Card.css';
import Botao from '../Botao/Botao';
import { deletarQuarto } from '../../Services/QuartoService';

function Card({ id, numero, status, tipo, capacidade, diaria, aoExcluir }) {
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

  const handleExcluir = async () => {
    if (window.confirm(`Deseja excluir o quarto: ${numero}?`)) {
      try {
        await deletarQuarto(id);
        alert("Excluido com sucesso!");
        aoExcluir();
      } catch {
        alert("Erro ao excluir", console.error())
      }
    }
  };

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
          <Botao className="botao-editar" classe="laranja" children="Editar" />
          <Botao className="botao-editar" classe="vermelho" children="Excluir" onClick={handleExcluir}/>
        </div>
      </div>
    </div>
  );
}
export default Card;

//Number(diaria).toFixed(2)