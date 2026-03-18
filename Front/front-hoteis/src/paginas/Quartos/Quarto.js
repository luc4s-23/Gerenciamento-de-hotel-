import "./Quarto.css";
import Card from '../../Components/Card/CardResumo';

function Quarto() {
  return (
    <main className="main-quarto">
      <h1>Quartos</h1>
      <section className="cards-quartos">
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
}

// function Quarto() {
//   return (
//     <main className="quarto-container">
//       <header className="head-quartos">
//         <h1 className="titulo-pag">Gestão de quartos</h1>

//         <Botao
//           className="botao-novo-quarto"
//           classe="verde"
//           children={"Novo Quarto"}
//         />
//       </header>

//       <section className="hero-quarto">
//         <BarraPesquisa Tplaceholder={"Buscar quartos..."} />

//         <div className="tabela-quartos">
//           <table class="tabela-dark">
//             <thead>
//               <tr>
//                 <th>Número do quarto</th>
//                 <th>Tipo</th>
//                 <th>Capacidade</th>
//                 <th>Preço diária</th>
//                 <th>Descrição</th>
//                 <th>Status</th>
//                 <th>Ações</th>
//               </tr>
//             </thead>

//             <tbody></tbody>
//           </table>
//         </div>
//       </section>
//     </main>
//   );
// }

export default Quarto;
