import "./Quarto.css";
import { useEffect, useState } from "react";
import { listarQuartos } from "../../Services/QuartoService";
import Card from "../../Components/Card/CardResumo";
import Botao from "../../Components/Botao/Botao";
import PopUp from "../popup/FormQuarto/FormQuarto";

function Quarto() {
  const [quartos, setQuartos] = useState([]);
  const [open, setOpen] = useState(false);

  const carregarQuartos = async () => {
    try {
      const dados = await listarQuartos();
      setQuartos(dados);
    } catch (error) {
      console.error("Erro ao carregar quartos:", error);
    }
  };

  useEffect(() => {
    carregarQuartos();
  }, []);

  return (
    <main className="main-quarto">
      <h1>Quartos</h1>

      <Botao
        classe="azul"
        children="Novo Quarto"
        className="btn-novo-quarto"
        onClick={() => setOpen(true)}
      />

      <PopUp
        isOpen={open}
        onClose={() => setOpen(false)}
        onSalvar={carregarQuartos}
      />

      <section className="cards-quartos">
        {quartos.length > 0 ? (
          quartos.map((quarto) => (
            <Card
              id={quarto.id_quarto}
              numero={quarto.numero_quarto}
              status={quarto.status}
              tipo={quarto.tipo}
              capacidade={quarto.capacidade}
              diaria={quarto.preco_diaria}
            />
          ))
        ) : (
          <p>Nenhum quarto encontrado.</p>
        )}
      </section>
    </main>
  );
}

export default Quarto;