import './Botao.css'

function BotaoNovoQuarto({ children, classe, onClick }) {
    return (
        <button className={`btn-base ${classe}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default BotaoNovoQuarto;