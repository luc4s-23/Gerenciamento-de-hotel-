import "./Botao.css";

function Botao({ children, classe, onClick, className }) {
  return (
    <button type="submit" className={`btn-base ${classe} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Botao;
