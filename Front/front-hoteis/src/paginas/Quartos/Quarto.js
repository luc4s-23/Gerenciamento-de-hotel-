import './Quarto.css';
import BarraPesquisa from '../../Components/BarraPesquisa/BarraPesquisa';
import BotaoNovoQuarto from '../../Components/Botao/Botao'
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

                <BotaoNovoQuarto 
                    className='botao-novo-quarto'
                    classe="verde"
                >
                    + Novo Quarto
                </BotaoNovoQuarto>
            </header>

            <section className='hero-quarto'>

                <BarraPesquisa />

                <div className='tabela-quartos'>
                    <table>
                        <thead>
                            <tr>
                                <th>Número</th>
                                <th>Tipo</th>
                                <th>Preço</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>101</td>
                                <td>Padrão</td>
                                <td>R$200</td>
                                <td>Disponível</td>
                                <td>Editar | Excluir</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </section>

        </main>
    );
}

export default Quarto;