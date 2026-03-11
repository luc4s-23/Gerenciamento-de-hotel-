import './Botao.css'

function Botao({ children, classe, onClick }) {
    return (
        <button className={`btn-base ${classe}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Botao;