import "./Reserva.css";
import BarraPesquisa from "../../Components/BarraPesquisa/BarraPesquisa";
import Botao from "../../Components/Botao/Botao";

function Reserva() {
  return (
    <main className="reserva-container">
      <header className="head-reserva">
        <h1>Reservas</h1>

        <Botao
          className="btn-nova-reserva"
          classe={"verde"}
          children={"Nova reserva"}
        />
      </header>

      <section className="hero-reserva">
        <BarraPesquisa Tplaceholder={"Buscar reservas..."} />

        <div className="tabela-reservas">
          <table className="tabela-dark">
            <thead>
              <tr>
                <th>Hospede</th>
                <th>Quarto</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Diárias</th>
                <th>Valor</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody></tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default Reserva;
