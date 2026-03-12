import './Reserva.css'
import BarraPesquisa from '../../Components/BarraPesquisa/BarraPesquisa';
import Botao from '../../Components/Botao/Botao'

function Reserva() {
    return (
        <main className='reserva-container'>
            <div className='head-reserva'>
                <h1>Reservas</h1>

                <Botao classe={'verde'}>
                    + Nova Reserva
                </Botao>
            </div>

            <BarraPesquisa Tplaceholder={'Buscar reservas...'}/>

            <div className='tabela-reservas'>
                <table>
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
                    <tbody>
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default Reserva;