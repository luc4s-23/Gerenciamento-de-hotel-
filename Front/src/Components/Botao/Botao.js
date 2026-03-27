import "./Botao.css";

function Botao({ children, classe, onClick, className }) {
  return (
    <button className={`btn-base ${classe} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Botao;
