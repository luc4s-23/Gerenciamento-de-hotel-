import './Home.css';
import CardHotel from '../../Components/Card/CardResumo';

function Home() {
    return (
        <main className="home-container">
            <section className="hero-home">
                <h1>Tela de início</h1>
                <p>Confira as melhores opções para sua estadia</p>

                <CardHotel />


            </section>
        </main>
    );
}

export default Home;