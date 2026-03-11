import './Quarto.css';
import BarraPesquisa from '../../Components/BarraPesquisa/BarraPesquisa';
import Botao from '../../Components/Botao/Botao'
// import {DoorOpen} from '../../Components/icones/icones'


// function Quarto() {
//     return (
//         <main className='quarto-container'>
//             <div className='head-quartos'>
//                 {/* <DoorOpen /> */}
//                 <h1 className='titulo-pag'>Gestão de quartos</h1>
//                 <BotaoNovoQuarto className='botao-novo-quarto' classe="verde">+ Novo Quarto</BotaoNovoQuarto>
//             </div>
//             <section className='hero-quarto'>
//                 <BarraPesquisa />
//                 <div className='tabela-quartos'>
//                     <h2>ola</h2>
//                     <h2>ola</h2>
//                 </div>
//             </section>
//         </main>
//     );
// }

function Quarto() {
    return (
        <main className='quarto-container'>

            <header className='head-quartos'>
                {/* <DoorOpen /> */}
                <h1 className='titulo-pag'>Gestão de quartos</h1>

                <Botao className='botao-novo-quarto' classe="verde">
                    + Novo Quarto
                </Botao>
            </header>

            <section className='hero-quarto'>

                <BarraPesquisa />

                <div className='tabela-quartos'>
                    <table class="tabela-dark">

                        <thead>
                            <tr>
                                <th>Número</th>
                                <th>Tipo</th>
                                <th>Preço diária</th>
                                <th>Disponível</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>A01</td>
                                <td>2</td>
                                <td>R$ 250,00</td>
                                <td>
                                    <Botao classe={'verde'}>
                                        Sim
                                    </Botao>
                                </td>
                            </tr>

                            <tr>
                                <td>A02</td>
                                <td>2</td>
                                <td>R$ 250,00</td>
                                <td>
                                    <Botao classe={'vermelho'}>
                                        Não
                                    </Botao>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </section>

        </main>
    );
}

export default Quarto;