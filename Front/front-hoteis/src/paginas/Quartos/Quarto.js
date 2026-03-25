import "./Quarto.css";
import { useEffect, useState } from "react";
import { listarQuartos } from "../../Services/QuartoService";
import Card from "../../Components/Card/CardResumo";

function Quarto() {
  const [quartos, setQuartos] = useState([]);

  useEffect(() => {
    const carregar = async () => {
      try {
        const dados = await listarQuartos();
        console.log("retorno de dados", dados)
        setQuartos(dados);
      } catch (error) {
        console.error("Erro ao carregar quartos:", error);
      }
    };

    carregar();
  }, []);

  return (
    <main className="main-quarto">
      <h1>Quartos</h1>

      <section className="cards-quartos">
        {quartos.length > 0 ? (
          quartos.map((quarto) => (
            <Card
              key={quarto.Id_quarto}
              id={quarto.Id_quarto}
              numero={quarto.Numero_quarto}
              status={quarto.Status}
              tipo={quarto.Tipo}
              capacidade={quarto.Capacidade}
              diaria={quarto.Preco_diaria}
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