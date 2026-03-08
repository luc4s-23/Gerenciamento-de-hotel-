import './Quarto.css';
import BarraPesquisa from '../../Components/BarraPesquisa/BarraPesquisa';

function Quarto() {
    return (
        <main className='quarto-container'>
            <section className='hero-quarto'>
                <h1>Gestão de quartos</h1>
                <BarraPesquisa />
            </section>
        </main>
    );
}

export default Quarto;